<script lang="ts">
    import { weaponsData } from "../Data/Weapons";
    import Classified from "../Decor/Classified.svelte";

</script>
<style lang="scss">
    table {
        font-size: 14px;
        border-collapse: collapse;
        margin-top: 10px;
        // display: block;
        // overflow-x: auto;

        // tbody {
        //     display: table;
        //     width: 100%;
        // }

        thead>tr:is(:first-child) {
            border-bottom: 1px dotted #A8947F;
            td {
                padding-bottom: 5px;
            }
        }
    }
    .item__title{
		width: 100%;
		display: flex;
        // font-weight: 700;
        &:not(:first-child) {
            padding-top: 5px;
        }
    } 
    .dot{
      	flex: 1;
		border-bottom: 1.8px dashed ;
		height: 11px;
		margin-left: 5px;
    }
    td {
        border-left: 1px solid #A8947F;
        border-right: 1px solid #A8947F;
        border-collapse: collapse;
        padding-left: 5px;
        padding-right: 5px;

        &:is(:last-child) {
            border-right: none;
            padding-right: 0px;

        }
        &:is(:first-child) {
            border-left: none;
            padding-left: 0px;

        }
    }

    .weapons__container {
        padding-top: 10px;
        padding-right: 10px;
        margin-right: -10px;
        overflow-y: scroll;
        max-height: 185px;
        min-height: 142px;
        scrollbar-color: #A8947F transparent;
        scrollbar-width: thin;
        scrollbar-gutter: stable both-edges;
        font-size: 14px;
    }
    @media screen and (max-width: 375px) {
        .weapons__container {
            height: 175px;
            padding-right: 0;
        }
        :global(.box) {
            padding-right: 10px;
        }
    }
    @media screen and (max-width: 355px) {
        .weapons__container {
            min-height: 175px;
            width: calc(100vw - 100px);
        }
    }
</style>
<div class="weapons__container">
    {#if weaponsData.length > 0 }
        {#each weaponsData as weapon}
        <div class="item__title">{weapon.name}<span class="dot"></span></div>
            <table>
                <thead>
                    <tr>
                        <td>Hand</td>
                        <td title="Firepower/Damage"><abbr>Dmg.</abbr></td>
                        <td>Ammo</td>
                        <td title="Armour Penetration"><abbr>Pen.</abbr></td>
                        <td>Range</td>
                        <td title="Ability"><abbr>Abil.</abbr></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{weapon.hand}</td>
                        <td>{@html weapon.damage}</td>
                        <td>{weapon.ammo}</td>
                        <td>{weapon.penetration}</td>
                        <td>{@html weapon.range}</td>
                        <td>{@html weapon.ability}</td>
                    </tr>
                </tbody>
            </table>
        {/each}
    {:else}
        <Classified></Classified>
    {/if}
</div>
