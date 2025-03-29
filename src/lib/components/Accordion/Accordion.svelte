<script>
  export let open = false;
	import { slide } from 'svelte/transition';
	const handleClick = () => { open = !open }
    import Button from '../Button/Button.svelte';
</script>

<div class="accordion">
	<div class="header">
        <Button buttonType={"full-width shadow"} customArgs={open ? 'active' : ''} on:click={handleClick}>
            <div slot="buttonContent">
                <slot name="head"></slot>	
            </div>
        </Button>
	</div>
	
	{#if open}
	<div class="details" transition:slide>
		<slot name="details">
		</slot>
	</div>
	{/if}
</div>

<style>
	div.accordion {
		margin: 1rem 0;
	}
	
	div.header {
		display:flex;
		width:100%;
	}
	@media screen and (max-width: 320px) {
		.header :global(.button__innerContainer) {
			justify-content: flex-start;
		}
	}
	
	/* div.header .text {
		flex: 1;
		margin-right: 5px;
	} */
	
	div.details {
		/* background-color: #cecece; */
		padding-top:1rem;
	}
</style>
