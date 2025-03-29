<script>
    import Biography from "../Data/Biography.svelte";
	import { basicData, convictionData, HistoryData } from "../Data/SummaryData";
    import ProgressBar from "../ProgressBar/ProgressBar.svelte";
</script>
<style lang="scss">
	.character__background {

		width: 100%;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		text-transform: uppercase;
		font-size: 14px;
		background-color: #1b261473;
		border: 5px solid #2B4021;
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;		
		box-sizing: border-box;
		&--container {
			width: 100%;
			-moz-box-sizing: border-box;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
		}
		div {

			border-width: 2px;
			border-style: solid;
			border-color: rgba(21, 21, 21, 0.7);
			padding: 10px 15px;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		div:not(:last-child) {
			border-right: 5px solid #2B4021;
		}
		span {
			color: #9D9D9D;
		}
	}

	h2 {
		font-size: 16px;
		text-transform: uppercase;
	}
	.text-container {
		display: flex;
		flex-direction: row;
		gap: 20px;
		// text-align: justify;
		line-height: 150%;
		margin-top: 10px;
		height: 400px;
		overflow-y: scroll;
		padding-right: 10px;
		margin-right: -10px;
		.left-container {
			width: 55%;
		}
		.right-container {
			width: 45%;
		}
	}
	@media screen and (min-width: 768px) and (max-height: 700px) {
		.character__background > div {
			padding: 5px 10px;
		}
	}
	@media screen and (max-width: 1024px){
		.text-container {
			height: initial;
			overflow-y: initial;
			padding-right: initial;
			margin-right: initial;
		}
	}
	h2, p {
		margin-block-start: 10px;
    	margin-block-end: 10px;
	}
	.alignment {
		padding-bottom: 10px;
	}
	ul.reset > li > span {
		display: block;
	}
	@media screen and (max-width: 768px) {
		.character__background {
			grid-template-columns: repeat(2, 1fr);
			div:not(:last-child) {
				border-right: initial;
			}
			div:nth-child(odd) {
    			border-right: 5px solid #2B4021;
			}
			div:nth-child(-n + 2) {
				border-bottom: 5px solid #2B4021;
			}
		}
		
	}
	@media screen and (max-width: 425px) {
		.text-container {
			flex-direction: column;
			.left-container, .right-container {
				width: 100%;
			}
		}
	}
	@media screen and (max-width: 321px) {
		.character__background {
			grid-template-columns: repeat(1, 1fr);
			div:not(:last-child) {
				border-right: initial;
			}
			// div:nth-child(odd) {
    		// 	border-right: 5px solid #2B4021;
			// }
			div:nth-child(-n + 3) {
				border-bottom: 5px solid #2B4021;
			}
		}
	}
	.horizontal_dotted_line{
		width: 100%;
		display: flex;
    } 
    .dot{
      	flex: 1;
		border-bottom: 1.8px dashed ;
		height: 23px;
		margin-left: 5px;
    }
</style>
<div class="character__background--container">
	<div class="character__background cairo-bold">
		<div>Homeworld<br><span>{basicData.homeworld}</span></div>
		<div>Origin<br><span>{basicData.origin}</span></div>
		<div>Triumph<br><span>{basicData.triumph}</span></div>
		<div>Darkest Hour<br><span>{basicData.darkestHour}</span></div>
	</div>
</div>
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div class="text-container" tabindex="0">
	<div class="left-container">
		<div class="horizontal_dotted_line">
			<h2 class="cairo-bold alignment">Alignment: <span class="grey"></h2>
			<span class="dot"></span>		
		</div>
		<ProgressBar level={convictionData.dogmatic} label={"dogmatic"}></ProgressBar>
		<ProgressBar level={convictionData.iconoclast} label={"iconoclast"}></ProgressBar>
		<ProgressBar level={convictionData.heretical} label={"heretical"}></ProgressBar>

		<div class="horizontal_dotted_line">		
			<h2 class="cairo-bold">Biography</h2>
			<span class="dot"></span>
		</div>

		<div class="grey cairo-regular">
			<Biography></Biography>
		</div>
	</div>

	<div class="right-container">
		<div class="horizontal_dotted_line">		
			<h2 class="cairo-bold">History</h2>
			<span class="dot"></span>
		</div>
		<div class='grey cairo-regular'>
			<ul class="reset">
				{#each HistoryData as dataEntry}
					<li>{@html dataEntry.entry} 
						{#if dataEntry.conviction}
						<span class="green">
						{dataEntry.conviction} +{dataEntry.convictionChanges}</span>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>