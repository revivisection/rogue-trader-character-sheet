
<style lang="scss">
    .button{
        &__container {
            font-size: 16px;
            background-color: #A8947F;
            color: #424242;
            padding: 4.5px 0;
            width: max-content;
            text-transform: uppercase;
            flex-grow: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: 100%;
            flex: 1;
            text-align: center;
        }
        &__container.active {
            border: 1px dashed #696969;
        }
    }
    @media screen and (max-width: 1024px) {
        .button {
            &__container {
                font-size: 14px;
            }
        }
    }
</style>
<script lang="ts">
    export let customArgs:any="";
    export let buttonType:String="top-bar";
</script>

<button class="no-select button__container alegreya-bold {buttonType} {customArgs}" on:click>
    <div class="button__innerContainer">
        <slot name="buttonContent"></slot>
    </div>
</button>