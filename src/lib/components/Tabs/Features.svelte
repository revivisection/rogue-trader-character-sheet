<script lang="ts">

    import Tabs from "./Tabs.svelte";
    import Tab1_Abilities from './Tab1_Abilities.svelte';
    import Tab1_Talents from './Tab1_Talents.svelte';

    let items = [
    { 
      label: "Active Abilities",
      value: 1,
      component: Tab1_Abilities
    },
    { 
      label: "Talents",
      value: 2,
      component: Tab1_Talents
    }
  ]; 

</script>

<style lang="scss">
  .tab1__container :global(.tabs__container) {
    width: 100%!important;
    border: none;
  }
  .tab1__container :global(.tabs__container ul) {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    gap: 20px;
  }
  .tab1__container :global(.tabs__container .box) {
    border: none;
    background: transparent;
    padding: 0;
    margin: 0;
    max-height: 500px;
    height: 450px;
    padding-right: 10px;
    margin-right: -10px;
  }
  @media screen and (max-width: 1024px) {
    .tab1__container :global(.tabs__container .box) {
      overflow: visible;
    }
  }
  @media screen and (max-width: 768px) {
    .tab1__container :global(.tabs__container .box) {
      overflow: visible;
    }
  }
  @media screen and (max-width: 425px) {
    .tab1__container :global(.tabs__buttonContainer .button__container) {
      width: 100%; 
    } 
  //   .tab1__container:global(.tabs__container > ul > div ) {
  //     width: 100%;
  //   } 
  }
</style>

<div class="tab1__container">
  <Tabs {items} buttonType="slim"></Tabs>
</div>


