<script lang="ts">
    import classified from "../../assets/images/classified.png"
</script>
<style lang="scss">
    .classified__container {
        width: 100%;
        height: 100%;
        > img {
            object-fit: cover;
            width: 100%;
        }
    }
</style>
<div class="classified__container">
    <img draggable="false" class="no-select" src="{classified}" alt="">
</div>