<script lang="ts">
    import scrollServo from "../../assets/images/servo skull rolls.png"
    import gridDecor from "../../assets/images/green grid.png"
</script>
<style lang="scss">
    @media screen and (max-width: 831px) {
        .mobile {
            display: block;
            overflow: visible;
            position: relative;
            width: calc(100vw - 450px);

        }
        .servoContainer {
            position: relative;
            width: 100%;
            height: 100%;
            animation: MoveUpDown 5s linear infinite;
        }
        .gridDecor {
            position: absolute;
            z-index: 1;
            height: 100%;
            left: -12px;
            img {
                object-fit: cover;
                height: 100%;
            }
        }
    }
    @media screen and (max-width: 609px) {
        .mobile {
            display: none;
        }
    }
    .scrollServo {
        max-width: 250px;
        position: absolute;
        top: 50%;
        right: -20%;
    }
    @keyframes MoveUpDown {
        0%, 100% {
            bottom: 0;
        }
        50% {
            bottom: 20px;
        }
    }

</style>

<div class="mobile">
    <div class="gridDecor">
        <img src="{gridDecor}" alt="">
    </div>
    <div class="servoContainer">
        <img class="scrollServo no-select" draggable="false" src="{scrollServo}" alt="" srcset="">
    </div>
</div>