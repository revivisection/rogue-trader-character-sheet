<script lang="ts">
import Button from "../Button/Button.svelte";

	export let showModal:boolean; // boolean

	let dialog:HTMLDialogElement; // HTMLDialogElement

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" class="header"/>
		<hr />
		<slot />
		<hr />
		
		<Button buttonType="ability" on:click={() => dialog.close()}>
            <div slot="buttonContent" class="buttonContent">
                close
            </div>
        </Button>
	</div>
</dialog>

<style>
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
        /* margin-left: 10px;
        margin-right: 10px; */
        background-color: #232A1A;
        border: 5px solid #293123;
        border-radius: 5px;
        color: #6E9846;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.5);
	}
	dialog > div {
		padding: 10px;
        /* margin-left: 10px;
        margin-right: 10px; */
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
    hr {
        display: block;
        height: 1px;
        border: 0;
        border-top: 3px solid #2B4021;
        margin: 1em 0;
        padding: 0;
    }
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
    .header {
        font-size: 16px;
    }
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
