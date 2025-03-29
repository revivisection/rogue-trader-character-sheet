<script lang="ts">
    import Accordion from "../Accordion/Accordion.svelte";
    import Classified from "../Decor/Classified.svelte";
    import { RelationsData } from "../Data/RelationData"
</script>
<style lang="scss">
.details {
    display: flex;
    flex-direction: row;
    gap: 20px;
    line-height: 150%;
    height: 100%;
    .portrait__container {
        width: 25%;
        img {
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }
    .text__container {
        width: 75%;
    }
}
</style>
{#each RelationsData as entry}
    <Accordion open={entry.accordionOpen}>
        <span slot="head">{entry.name}</span>
        <div slot="details" class="details">
            <div class="portrait__container">
                <img draggable="false" class="no-select" src="{entry.pic}" alt="">
            </div>
            <div class="text__container cairo-regular grey">
                {#if entry.quote && entry.quote.length > 0}
                    <blockquote>{@html entry.quote}</blockquote>
                {/if}
                {#if entry.body && entry.body.length > 0}
                    {@html entry.body}
                {:else if entry.classified = true}
                    <Classified></Classified>
                {:else}
                    <Classified></Classified>
                {/if}
            </div>
        </div>
    </Accordion>
{/each}