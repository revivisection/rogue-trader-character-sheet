<script lang="ts">
    import Button from "../Button/Button.svelte";
    import body from '../../assets/images/Human_Silhouette.svg'
    import { InventoryData } from "../Data/InventoryData";

    export let activeTabValue = 0;    
    const handleClick = (tabValue: number) => () => {
        activeTabValue = tabValue;
    }
</script>
<div class="outerContainer desktop">
    <div class="container">
        {#each InventoryData as item}
            <div class="grid-{InventoryData.indexOf(item)+1}">
                <Button buttonType="ability inventory" customArgs={activeTabValue === InventoryData.indexOf(item) ? 'active' : ''} on:click={handleClick(InventoryData.indexOf(item))} >
                    <div slot="buttonContent" class="buttonContent">
                        {item.label}<br>
                        <div class="itemName grey">{item.item ? item.item : ""}</div>
                    </div>
                </Button>
            </div>
        {/each}
        {#each InventoryData as item}
            {#if activeTabValue == InventoryData.indexOf(item)}
                <div class="box central-container cairo-regular">
                    <div class="descriptionContainer">
                        <p class="cairo-bold descriptionTitle">Description</p>
                        <div class="grey">{@html item.itemDesc}</div>
                    </div>
                </div>
                <div class="central-container image-container">
                    <img class="body-image no-select" draggable="false" src="{body}" alt="" srcset="">
                </div>
            {/if}
        {/each}
    </div>
</div>
<div class="mobile">
    <div class="container">
        <div class="slotContainer">
            {#each InventoryData as item}
            <div class="inventory__item grid-{InventoryData.indexOf(item)+1}">
                <Button buttonType="ability inventory" customArgs={activeTabValue === InventoryData.indexOf(item) ? 'active' : ''} on:click={handleClick(InventoryData.indexOf(item))} >
                    <div slot="buttonContent" class="buttonContent">
                        {item.label}<br>
                    </div>
                </Button>
            </div>
        {/each}
        </div>
        
        {#each InventoryData as item}
            {#if activeTabValue == InventoryData.indexOf(item)}
                <div class="central-container cairo-regular">
                    <div class="descriptionContainer">
                        <p class="cairo-bold descriptionTitle">Description</p>
                        {#if item.item}
                            <div class="itemName grey cairo-bold">{item.item ? item.item : ""}</div>
                        {/if}
                        <div class="grey">{@html item.itemDesc}</div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</div>

<style lang="scss">
    .buttonContent {
        text-align: left;
    }
    .itemName {
        text-transform: uppercase;
    }
    .descriptionTitle {
        text-transform: uppercase;
    }
    .outerContainer {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
    }
    .container{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        width: 100%;
        justify-items: center;
        justify-content: center;
        align-items: center;
    }
    .image-container {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;

        .body-image {
            max-height: 450px;
            width: 100%;
            height: 100%;
        }
    }

    .grid-1 { grid-area: 1 / 1 / 2 / 2; }
    .grid-2 { grid-area: 2 / 1 / 3 / 2; }
    .grid-3 { grid-area: 3 / 1 / 4 / 2; }
    .grid-4 { grid-area: 4 / 1 / 5 / 2; }
    .grid-5 { grid-area: 5 / 1 / 6 / 2; }
    .central-container { 
        grid-area: 1 / 2 / 6 / 3; 
    }
    .grid-6 { grid-area: 1 / 3 / 2 / 4; }
    .grid-7 { grid-area: 2 / 3 / 3 / 4; }
    .grid-8 { grid-area: 3 / 3 / 4 / 4; }
    .grid-9 { grid-area: 4 / 3 / 5 / 4; }
    .grid-10 { grid-area: 5 / 3 / 6 / 4; }

	.box {
        color: #6E9846;
		// padding: 15px 20px;
        border-top: 0;
        overflow-y: scroll;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        justify-content: center;
        width: 100%;
        // text-align: justify;
        div.descriptionContainer {
            border-width: 5px;
            border-style: solid;
            background-color: #1b2614;
            border-color: #2B4021;
            width: 100%;
            height: 100px;
            max-width: 180px;
            padding: 15px 20px;
            overflow-y: scroll;
            p {
                margin-block-start: 0;
                margin-block-end: 10px;
            }
        }
	}
    @media screen and (max-width: 1024px) {
        .container {
            height: 100%;
        }
    }
    @media screen and (max-width: 768px) {
    }
    @media screen and (max-width: 675px) {
        .desktop {
            display: none;
        }
        .mobile {
            display: initial;
        }
        .slotContainer {
            grid-area: 1 / 1 / 2 / 5;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .container {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: auto;
            align-items: baseline;
            .itemName {
                padding-bottom: 10px;
            }
        }
        .central-container {
            grid-area: 2 / 1 / 6 / 5; 
            height: fit-content;
            padding-bottom: 20px;
            align-self: baseline;
        }
        .itemName {
            padding-bottom: 10px;
        }
        .inventory__item {
            flex-grow: 1;
        }
    }
</style>