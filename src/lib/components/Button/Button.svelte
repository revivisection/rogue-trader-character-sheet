<style lang="scss">
    .button {
        &__container {
            border-color: transparent;
            border-width: 5px;
            border-style: solid;
            color: #6E9846;
            font-size: 16px;
            text-decoration: none;
            text-transform: uppercase;
            cursor: pointer;
            &.shadow {
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }
            &.slim {
                width: 265px;
                height: 28px;
                background-color: #1b2614;
                border-color: #2B4021;
                .button__innerContainer {
                    border-color: rgba(21, 21, 21, 0.7);
                }
                &.active {
                    > .button__innerContainer {
                        background-color: #36472A;
                    }
                }
            }
            &.ability {
                display: flex;

                max-width: 180px!important;
                min-height: 28px!important;
                font-size: 12px;
                background-color: #1b2614;
                border-color: #2B4021;
                .button__innerContainer {
                    border-color: rgba(21, 21, 21, 0.7);
                    width: 100%;
                    padding-left: 10px;
                    padding-right: 10px;
                    text-align: center;
                }
                &.active {
                    > .button__innerContainer {
                        background-color: #36472A;
                    }
                }
                &.inventory {
                    width: 150px;
                    text-align: left;
                    font-size: 14px;
                    .button__innerContainer {
                        padding: 10px;
                        justify-content: flex-start;
                    }
                }
            }
            &.full-width {
                width: 100%;
                min-height: 28px;
                background-color: #1b2614;
                border-color: #2B4021;
                .button__innerContainer {
                    border-color: rgba(21, 21, 21, 0.7);
                }
                &.active {
                    > .button__innerContainer {
                        background-color: #36472A;
                    }
                }
            }
            &.top-bar {
                width: 120px;
                height: 35px;
                &.active {
                    border-color: #2B4021;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    > .button__innerContainer {
                        border-color: rgba(21, 21, 21, 0.7);
                        background-color: #2B3822;
                    }
                }
            }
            &:hover,&:hover.active {
                color: #CD9B46;
                border-color: #886C34;
                & .button__innerContainer {
                    background-color: #4D4212;
                }

            }
        }
        &__innerContainer {
            border-color: transparent;
            border-width: 2px;
            background-color: transparent;
            border-style: solid;
            padding-left: 15px;
            padding-right: 15px;
            padding-bottom: 5px;
            padding-top: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            height: -webkit-fill-available;
        }
    }
    @media screen and (max-width: 1024px) {
        .button__container.top-bar {
            width: initial;
        }
        .button__container.ability.inventory {
            width: 100%;
            box-sizing: border-box;
        }
    }
    @media screen and (max-width: 375px) {
        // .button__container {
        //     width: 100%;
        // }
        .button__container.top-bar {
            width: 100%;
        }
    }
    @media screen and (max-width: 320px) {
        // .button__container.top-bar {
        //     width: 100px;
        // }
    }
</style>

<script lang="ts">
    export let customArgs:any="";
    export let buttonType:String="top-bar";
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<button type="button" class="no-select button__container cairo-bold {buttonType} {customArgs}"  on:click>
    <div class="button__innerContainer">
        <slot name="buttonContent"></slot>
    </div>
</button>