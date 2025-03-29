<style>
    .tabs__container {
        z-index: 3;
        /* width: 80%; */
        max-width: 900px;
        border-image-slice: 140 81 140 81 fill;
        border-image-width: 80px 42px 80px 42px;
        border-image-outset: 80px 15px 80px 30px;
        border-image-repeat: stretch stretch;
        border-image-source: url("/dataslate.webp")
    }
	.box {
        color: #6E9846;
        /* background: linear-gradient(-114.836deg, #1D2019 0%, #333D26 100%); */

		/* margin-bottom: 10px; */
		padding: 5px 20px 15px 20px;
        border-top: 0;
        height: 500px;
        /* max-height: 80vh; */
        overflow-y: scroll;
        /* border-color: #293123;
        border-width: 5px;
        border-style: solid;
        border-radius: 5px; */
        position: relative;
	}
    ul.tabs__buttonContainer {
        display: flex;
        flex-wrap: wrap;
        padding-left: 0;
        /* margin-bottom: 20px; */
        margin-top: 0px;
        margin-bottom: 0px;
        list-style: none;
        /* border-bottom: 1px solid #dee2e6; */
        /* background-color: #232A1A; */
        /* border: 5px solid #293123; */
        /* border-radius: 5px; */
        padding: 25px 20px 15px 20px;
        justify-content: center;
        /* gap: 20px; */
    }
    @media screen and (max-width: 1024px) {
        .box {
            height: 400px;
        }
    }
    @media screen and (max-width: 768px) {
        ul.tabs__buttonContainer {
            padding: 10px 10px;
        }
        .tabs__container {
            border-image-slice: 180 81 180 81 fill;
            border-image-outset: 80px 15px 80px 30px;
        }
    }
    @media screen and (max-width: 526px) {
        .tabs__container {
            border-image-slice: 185 100 175 110 fill;
            border-image-width: 100px 50px 100px 53px;
            border-image-outset: 100px 25px 100px 30px;
            border-image-repeat: stretch stretch;
            border-image-source: url("/dataslate_mobile.webp");
        }
    }
</style>

<script lang="ts">
    import Button from "../Button/Button.svelte";
    import decorativeBkg from "../../assets/images/rt-logo.png"

    export let items:Array<any> = [];
    export let activeTabValue = 1;

    const handleClick = (tabValue: number) => () => (activeTabValue = tabValue);
    export let buttonType:String = "";
</script>


<div class="tabs__container">
    <ul class="tabs__buttonContainer">
        {#each items as item}
            <Button buttonType={buttonType} customArgs={activeTabValue === item.value ? 'active' : ''} on:click={handleClick(item.value)} >
                <div slot="buttonContent">
                    {item.label}
                </div>
            </Button>
        {/each}
    </ul>

    {#each items as item}
        {#if activeTabValue == item.value}
            <div class="box" style="background: url({decorativeBkg}) center center no-repeat;
            background-size: cover, auto;
            ">
                <div style="z-index: 2; position: relative;">
                    <svelte:component this={item.component}/>
                </div>
            </div>
        {/if}
    {/each}
</div>