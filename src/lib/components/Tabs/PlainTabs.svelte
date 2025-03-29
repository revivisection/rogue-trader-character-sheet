<style>
    .tabs__container {
        /* width: 80%; */
        max-width: 900px;
    }
	.box {
        border-top: 0;
        /* overflow-y: scroll; */
	}
    ul {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        /* margin-bottom: 20px; */
        margin-top: 0px;
        list-style: none;
        gap: 5px;
        margin-block-end: 0px;
        justify-content: center;
        /* gap: 20px; */
    }

    @media screen and (max-width: 768px) {
        /* ul {
            padding: 10px 00px;
        } */
        
    }
</style>

<script lang="ts">
    import PaperButton from "../PaperButton/PaperButton.svelte";

  export let items:Array<any> = [];
  export let activeTabValue = 1;

  const handleClick = (tabValue: number) => () => {
    (activeTabValue = tabValue)
  };
  export let buttonType:String = "";
</script>


<div class="tabs__container">
    <ul>
        {#each items as item}
            <PaperButton buttonType={buttonType} customArgs={activeTabValue === item.value ? 'active' : ''} on:click={handleClick(item.value)} >
                <div slot="buttonContent">
                    {item.label}
                </div>
            </PaperButton>
        {/each}
    </ul>

    {#each items as item}
        {#if activeTabValue == item.value}
            <div class="box">
                <svelte:component this={item.component}/>
            </div>
        {/if}
    {/each}
</div>

