
<script lang="ts"> 
 
// Sources:
//  https://github.com/janzheng/svelte-masonry#readme
// Based on:
//  https://css-tricks.com/a-lightweight-masonry-solution

import Masonry from '../Masonry/Masonry.svelte'
import Modal from '../Modal/Modal.svelte';
import Button from '../Button/Button.svelte';
import { firstImageBig, GalleryData } from '../Data/GalleryData';

let itemCount = 5
let showModal = false;
let modalContent:any;
let modalTitle:any;

</script>
<Modal bind:showModal>
  <div slot="header" class="cairo-bold">
    {#if modalTitle!=null}
      {modalTitle}
    {/if}
    {#if modalTitle==null}
      Untitled - Image Viewer <small>V01.001</small>
    {/if}
  </div>
  <!-- modal content -->
  <img class="image" src="{modalContent}" alt="Big preview of a gallery item" draggable="false" >
</Modal>

<Masonry stretchFirst={firstImageBig} gridGap={'0.75rem'} colWidth={'minmax(Min(20em, 100%), 1fr)'} items={GalleryData.slice(0,itemCount)}>
    {#each GalleryData.slice(0,itemCount) as o}
      <div class="_card _padding">
        {#if o.image!= null}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <div class="image__container">
            <button
            on:click={() => {
              $: modalContent = o.image;
              $: modalTitle = o.name;
              showModal = true
            }}>
              <img class="pointer image image-{GalleryData.indexOf(o)}" src="{o.image}" alt="gallery item" draggable="false" >
            </button>
          </div>
        {/if}

        {#if o.name!= null}
          <header class="cairo-bold">
            <h3>{@html o.name}</h3>
          </header>
        {/if}

        {#if o.text!= null}
          <section class="cairo-regular grey">
            <p>{@html o.text}</p>
          </section>
        {/if}

      </div>
    {/each}
</Masonry>
<div class="footerContainer cairo-regular">
  <Button buttonType="ability shadow" on:click={()=>(
      itemCount<GalleryData.length?itemCount+=3:undefined
    )}>
    <div slot="buttonContent">
      Load More
    </div>
  </Button>
  {#if itemCount < GalleryData.length}
    <small>Item loaded: {itemCount} of out {GalleryData.length}</small>
  {/if}
  {#if itemCount >= GalleryData.length}
    <small>All items loaded</small>
  {/if}
</div>

<style>
  .footerContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding-top: 10px;
  }
  ._padding {
    padding: 12px;
  }
  
  ._card {
    border-width: 5px;
    border-style: solid;
    color: #6E9846;
    background-color: #1b261473;
    border-color: #2B4021;
    box-sizing: border-box;
    line-height: 150%;
  }
	
	/* ._sticky {
		position: sticky;
		top: 12px;
	} */
  .image__container {
    margin: auto;
    width: fit-content;
  }

  .image {
    width: initial;
    max-width: 100%;
  }
</style>
