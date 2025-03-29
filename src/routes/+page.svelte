<svelte:head>
    <title>Rogue Trader Character Sheet</title> 
</svelte:head>
<script lang="ts">
    export const prerender = true;
    export const ssr = true;
    export const trailingSlash = 'always';
    import bkg from "$lib/assets/images/glass bkg.jpg";
    import '$lib/assets/app.scss';
    import Features from "$lib/components/Tabs/Features.svelte";
	import Summary from "$lib/components/Tabs/Summary.svelte";
	import Inventory from "$lib/components/Tabs/Inventory.svelte";
	import Relations from "$lib/components/Tabs/Relations.svelte";

    import Tabs from "$lib/components/Tabs/Tabs.svelte";
    import OverviewPanel from "$lib/components/OverviewPanel/OverviewPanel.svelte";
    import Gallery from "$lib/components/Tabs/Gallery.svelte";
    import servoSkull from "$lib/assets/images/servo skull with candle transparent.png"
    import SideServos from "$lib/components/Decor/SideServos.svelte";

    let items = [
        { 
            label: "Summary",
            value: 1,
            component: Summary
        },
        { 
            label: "Features",
            value: 2,
            component: Features
        },
        { 
            label: "Inventory",
            value: 3,
            component: Inventory
        },
        { 
            label: "Relations",
            value: 4,
            component: Relations
        },
        { 
            label: "Gallery",
            value: 5,
            component: Gallery
        },
    ]; 
    function getRandomInt(max:number) {
        return Math.floor(Math.random() * max);
    }
</script>
<style lang="scss">
    .background {
        position: fixed;
        top: 0;
        z-index: -1;
        left: 0;
        height: 100vh;
        width: 100vw;
        mix-blend-mode: color-dodge;
        img.background-image {
            opacity: 50%;
            object-fit: cover;
            height: 100%;
            width: 100%;
        }
    }
    .background-overlay {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        z-index: 1;
        align-items: center;
        justify-content: center;
        gap: 50px;
        
        z-index: -1;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        :nth-child(even) img {
            padding-bottom: 200px;
        }
    }

    img.overlay-item__image {
        max-height: 250px;
        padding-bottom: 10px;
    }
    .background-overlay__item {
        position: relative;
        animation: MoveUpDown 8s linear infinite;
        animation-delay: calc(var(--animation-order) * 200ms);
    }
    .candle-glow {
        position: absolute;
        top: -20px;
        left: calc(50% - 20px);
        width: 40px;
        height: 80px;
        border-radius: 50%;
        opacity: 50%;
        background: radial-gradient(50% 50% at 50% 50%, #DCF0F9 0%, #FFC857 31.77%, rgba(164, 122, 80, .6) 61.98%, rgba(49, 24, 71, .24) 100%);
        animation: flicker 10s linear infinite;
        animation-delay: calc(var(--animation-order) * 1000ms);
        mix-blend-mode: hard-light;
    }
    @keyframes MoveUpDown {
        0%, 100% {
            bottom: 0;
        }
        50% {
            bottom: 50px;
        }
    }
    @keyframes flicker {
        0%  {   filter: blur(5px) brightness(1);    }
        10% {   filter: blur(5px) brightness(0.5);  }
        20% {   filter: blur(5px) brightness(1);    }
        50% {   filter: blur(5px) brightness(1);    }
        99% {   filter: blur(5px) brightness(0.7);  }
        100%{   filter: blur(5px) brightness(1);    }
    }
    .container-left {
        // background-color: aqua;
        width: 35%;
        position: relative;
    }
    .container-right {
        width: 65%;
        display: grid;
        align-items: center;
        // background-color: plum;
    }
    .grandContainer-small {
        display: flex;
        flex-direction: row;
        // flex-wrap: wrap;
        gap: 40px;
        width: 1210px;
        max-width: calc(100vw - 20px);
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        height: fit-content;
    }
    .container {
        position: relative;
        width: 100svw;
        height: 100svh;
        display: flex;
        justify-content: center;
    }
    @media screen and (max-width: 1024px) {
        .container-left {
        // background-color: aqua;
            width: 40%;
        }
        .container-right {
            width: 60%;
            // background-color: plum;
        }
    }
    @media screen and (max-width: 831px) {
        .container { 
            width: initial;
            height: initial;
            padding-left: 40px;
            padding-right: 40px;
            padding-bottom: 50px;
            padding-top: 50px;
            overflow-x: clip;
        }
        .grandContainer-small {
            flex-direction: column;
            position: relative;
            transform: none;
            left: initial;
            top: initial;
            width: 100%;
            gap: 120px;
            padding-bottom: 80px;
            padding-top: 20px;
        }
        .container-left {
        // background-color: aqua;
            display: flex;
            width: 100%;
        }
        .container-right {
            width: 100%;
            // background-color: plum;
        }
    }
    @media screen and (max-width: 1330px) {
        .background-overlay {
            display: none;
        }
    }
    @media screen and (max-width: 425px) { 
        .container {
            padding-left: 20px;
            padding-right: 20px;
            padding-bottom: 45px;
            padding-top: 75px;
        }
    }

    @media screen and (min-width: 768px) and (max-height: 700px) {
        .container {
            padding-top: 90px;
            justify-content: center;
            padding-bottom: 90px;
            height: initial;
            width: initial;
        }
        .grandContainer-small {
            position: initial; 
            transform: none; 
            height: fit-content;
            justify-content: center;
        }
        :global(tabs__container .box) {
            height: 400px!important;
        }
        :global(.tabs__buttonContainer) {
            padding: 10px 20px!important;
        }
    } 

</style>
<div class="container">
    <div class="grandContainer-small">
        <div class="container-left">
            <OverviewPanel></OverviewPanel>
            <SideServos></SideServos>
        </div>
        <div class="container-right">
            <Tabs {items} buttonType="top-bar"></Tabs>
        </div>
    </div>
</div>

<div class="background">
    <img class="background-image" src="{bkg}" alt="" draggable="false">
</div>
<div class="background-overlay">
    {#each { length: 15 } as _, loop}
        <div class="background-overlay__item" style="--animation-order: {getRandomInt(15)};">
            <div class="candle-glow" style="--flicker-order: {getRandomInt(3)}">
            </div>
            <img class="overlay-item__image"  src="{servoSkull}" alt="" draggable="false">
        </div>
    {/each}
</div>