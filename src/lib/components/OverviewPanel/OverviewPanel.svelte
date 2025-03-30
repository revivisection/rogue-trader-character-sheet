<style lang="scss">
    .clipboard__container {
        position: relative;
        max-width: 500px;
        height: 100%;
        z-index: 4;
    }
    .basicInfoContainer {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        justify-items: center;
        grid-area: 2 / 1 / 3 / 3;
        background: #A8947F;
        padding: 4.5px 0;
    }
    .paper-header {
        background: #A8947F;
        padding: 4.5px 0;
        text-transform: uppercase;
        text-align: center;
        color: #424242;
        border-radius: 5px 5px 0 0;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .paper-header.full-name {
        cursor: pointer;
    }
    #animated-text-strip {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        overflow: hidden;
        width: 150px;
        gap: 2px;
    }
    #animated-text-strip .marquee {
        white-space: nowrap;
        animation: marquee 10s linear infinite;
        max-width: none;
    }

    @keyframes marquee {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(-100%, 0);
        }
    }
    @media screen and (max-width: 320px) {
        #animated-text-strip {
          width: 100px;  
        }
    }

    .overviewPanel{
        &__backing {
            border-image-slice: 90 83 93 96 fill;
            border-image-width: 40px 30px 60px 50px;
            border-image-outset: 8px 0px 20px 30px;
            border-image-repeat: stretch stretch;
            position: relative;
            max-width: 500px;
            height: calc(100% - 10px - 16* 2px);
            padding: 16px 20px;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            background-repeat: no-repeat;
            background-size: contain;
            background-position-x: center;
            .seals {
                position: absolute;
                top: 0;
                z-index: 5;
                top: -4px;
                left: -60px;
            }
            .seals--little {
                position: absolute;
                right: -5px;
                bottom: -95px;
                z-index: 2;
                width: 70px;
            }
        }
        
        &__backgroundImage {
            grid-area: 1 / 1 / 3 / 3;
            height: 100%;
            width: 100%;
            overflow: hidden;
            border-radius: 5px;
            // padding: 16px 13px;
            img {
                object-fit: cover;
                height: 100%;
                width: 100%;
                border-radius: 5px;
            }
        }
        &__contentContainer {
            grid-area: 1 / 1 / 2 / 2; 
            z-index: 1;
            position: relative;
            width: 100%;
            height: 100%;
            &-content {
                padding: 40px 20px;;
                font-size: 16px;
                overflow-y: scroll;
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-column-gap: 5px;
                grid-row-gap: 10px;
            }
        }
    }
    .right-container {
        grid-area: 1 / 2 / 2 / 3;
    }
    .left-container {
        grid-area: 1 / 1 / 2 / 2; 
        display: flex;
        flex-direction: column;
        .portrait {
            // box-shadow: 0px 4px 4px #6E9846 inset;
            position: relative;
            width: 100%;
            height: 100%;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            .healthbar {
                position: absolute;
                bottom: 0;
                background-color: #597938;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: center;
                gap: 5px;
                font-size: 14px;
                font-weight: 500;
                padding-top: 1px;
                padding-bottom: 1px;
                color: #fff;
                flex-wrap: wrap;
            }
        }
        img {
            object-fit: cover;
            width: 100%;
            height: 100%;
        }
    }
    .stats {
        font-size: 14px;
        padding-top: 10px;
        table {

            width: 100%;
            border-collapse: collapse;
            td {
                padding-top: 1px;
            }
            .shorthand {
                font-size: 12px;
                text-align: center;
                padding: 1px 2px;
                margin-right: 2px;
                &.positive {
                    background-color: #597938;
                    color: #fff;
                }
                &.negative {
                    background-color: #814d4d;
                    color: #fff;
                }
            }
            .value {
                font-size: 18px;
            }
            .bonus {
                font-size: 10px;
            }
        }
    }
    .weapon-skills {
        grid-area: 3 / 1 / 4 / 3;
    }
    .basicInfoContainer :global(.button__container) {
        width: -webkit-fill-available;
    }
    .clipboard {
        width: 100%;
        img {
            position: absolute;
            z-index: 5;
            width: 200px;
            top: calc(-200px / 3);
            left: 50%;
            transform: translateX(-50%);
        }
    }
    .stamp {
        z-index: -1;
        position: absolute;
        width: 80%;
        opacity: 40%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .bonus.darkgreen, .value.darkgreen, .bonus.red, .value.red {
        font-weight: 700;
    }

    .modal-image {
        width: 100%;
    }
    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 3px solid #2B4021;
        margin: 1em 0;
        padding: 0;
    }

    @media screen and (max-width: 1024px) {
        .overviewPanel__contentContainer-content {
            padding: 40px 10px;
        }
        .overviewPanel{
            &__backing {
                .seals--little {
                    width: 60px;
                }
            }
        }
        
    }
    @media screen and (max-width: 831px) {
        .clipboard__container{
            max-width: 450px;
        }
        .candleServo {
            display: block;
        }
    }
    @media screen and (max-width: 768px) {

        .overviewPanel__backing {
            max-width: 100%;
        }
    }
    @media screen and (max-width: 609px) {
        .candleServo {
            display: none;
        }
    }
    @media screen and (max-width: 526px) {
        .clipboard__container{
            max-width: 100%;
        }
        .overviewPanel{
            &__backing {
                border-image-outset: 8px 10px 20px 27px;
            }
        }
    }
    @media screen and (max-width: 425px) {
        #animated-text-strip {
            width: 100px;
        }
        .overviewPanel{
            &__backing {
                border-image-width: 40px 30px 60px 50px;
                border-image-outset: 8px 5px 20px 10px;

                .seals {
                    top: -4px;
                    left: -37px;
                    width: 95px;
                }
            }
        }
    }
    @media screen and (max-width: 355px) {
        #animated-text-strip {
            width: 150px;
        }
        .overviewPanel__contentContainer-content {
            display: flex;
            flex-direction: column;
        }
    }
    .candleServo {
        position: relative;
        animation: MoveUpDown 7s linear infinite;
        img {
            max-width: 300px;
            position: absolute;
            top: 10px;
            right: -55%;    

        }
    }
    @keyframes MoveUpDown {
        0%, 100% {
            bottom: 0;
        }
        50% {
            bottom: 40px;
        }
    }
</style>

<script lang="ts">
    import paperImage from '../../assets/images/Texturelabs_Paper_329L.jpg'
    import WeaponsTab from './WeaponsTab.svelte';
    import SkillsTab from './SkillsTab.svelte';
    import clipboardImg from '../../assets/images/clipboard clip.png'
    import PlainTabs from '../Tabs/PlainTabs.svelte';
    import rtCompass from '../../assets/images/rogue trader compass.png'
    import { statsData } from '../Data/StatsData';
    import { characterInfo, combatInfo } from '../Data/CharacterInfo';
    import { onMount } from 'svelte';
    import bookBacking from "../../assets/images/backcover.png"
    import puritySeals from "../../assets/images/purity seal.png"
    import littleSeals from "../../assets/images/little seal.png"
    import candleServo from "../../assets/images/servo skull candles.png"
    import Modal from '../Modal/Modal.svelte';

    let items = [
        
        { 
            label: "Skills",
            value: 1,
            component: SkillsTab
        },
        { 
            label: "Weapons",
            value: 2,
            component: WeaponsTab
        }
    ];
    onMount(() => {

    })

    let isAnimating = false;
    let showModal = false;

</script>
<Modal bind:showModal dialogueClass="rt-portrait">
    <div slot="header" class="cairo-bold">
    {#if characterInfo.name!=null}
      Rogue Trader {characterInfo.name}<br>
    {/if}
    {#if characterInfo.name==null}
      Untitled - Image Viewer <small>V01.001</small>
    {/if}
  </div>
  <!-- modal content -->
  <img class="modal-image" src="{characterInfo.image}" alt="Portrait of the rogue trader" draggable="false" >
  <hr>
  {#if characterInfo.fullname}
    <div class="cairo-bold" style="line-height: 150%;">
        <small class="grey">also known as</small> {characterInfo.fullname}.
    </div>
  {/if}
</Modal>

<div class="clipboard__container">
    <div class="candleServo mobile no-select">
        <img draggable="false" src="{candleServo}" alt="" srcset="">
    </div>
    
    <div class="clipboard">
        <img class="no-select" src="{clipboardImg}" alt="" srcset="" draggable="false">
    </div>
    <div class="overviewPanel__backing" style="border-image-source:url({bookBacking})">
        <img class="seals no-select" src="{puritySeals}" alt="" draggable="false">
        <img class="seals--little no-select" src="{littleSeals}" alt="" draggable="false">
         <div class="overviewPanel__contentContainer">
            <img draggable="false" class="no-select stamp" src="{rtCompass}" alt="">
            <div class="overviewPanel__contentContainer-content alegreya-regular">
                <div class="left-container">
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div tabindex="0" role="button" class="paper-header full-name alegreya-bold" on:click={() => (isAnimating = !isAnimating)}>
                        {#if isAnimating}
                            <div id="animated-text-strip">
                                <span class="marquee">{characterInfo.fullname}  ✦</span>
                                <span class="marquee">{characterInfo.fullname}  ✦</span>
                                <span class="marquee">{characterInfo.fullname}  ✦</span>
                            </div>
                        {:else}
                            {characterInfo.name}
                        {/if}
                    </div>
                    
                    <div class="portrait">
                        <div class="healthbar">
                            <div class="level">lvl {characterInfo.level}</div>-
                            <div class="health">{characterInfo.health}</div>
                        </div>
                        <img on:click={() => {showModal = true}} class="pointer no-select" draggable="false" src="{characterInfo.image}" alt="">
                    </div>
                </div>
                
                <div class="right-container">
                    <div class="paper-header alegreya-bold">Characteristics</div>
                    <div class="stats">
                        <table>
                            {#each statsData as stat}
                                <tr>
                                    {#if stat.bonus && stat.bonus > 0}
                                        <td>
                                            <div class="shorthand positive">
                                                {stat.shorthand}
                                            </div>
                                        </td>
                                    {:else if stat.bonus && stat.bonus < 0}
                                        <td>
                                            <div class="shorthand negative">
                                                {stat.shorthand}
                                            </div>
                                        </td>
                                    {:else}
                                        <td>
                                            <div class="shorthand">
                                                {stat.shorthand}
                                            </div>
                                        </td>
                                    {/if}
                                    <td>{stat.label}</td>
                                    
                                    {#if stat.bonus && stat.bonus > 0}
                                        <td class="value darkgreen">{stat.value}</td>
                                    {:else if stat.bonus && stat.bonus < 0}
                                        <td class="value red">{stat.value}</td>
                                    {:else}
                                        <td class="value">{stat.value}</td>
                                    {/if}

                                    {#if stat.bonus}
                                        {#if stat.bonus > 0}
                                            <td class="bonus darkgreen">
                                                +{stat.bonus}
                                            </td>
                                        {:else}
                                            <td class="bonus red">
                                                {stat.bonus}
                                            </td>
                                        {/if}
                                    {:else}
                                        <td class="bonus"></td>
                                    {/if}
                                </tr>
                            {/each}
                        </table>
                    </div>
                </div>
                <div class="basicInfoContainer">
                    <div title="Deflection">{combatInfo.deflection}</div>
                    <div title="Armour">{combatInfo.armour}</div>
                    <div title="Dodge">{combatInfo.dodge}</div>
                    <div title="Dodge Reduction">{combatInfo.dodgeReduction}</div>
                    <div title="Parry">{combatInfo.parry}</div>
                    <div title="Resolve">{combatInfo.resolve}</div>
                </div>
                <div class="weapon-skills">
                    <PlainTabs {items} buttonType="slim"></PlainTabs>
                </div>
                
            </div>
        </div>
        <div class="overviewPanel__backgroundImage">
            <img class="no-select" src={paperImage} alt="" srcset="" draggable="false">
        </div>
        
    </div>
</div>
