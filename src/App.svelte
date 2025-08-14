<script>
	export let name;
	export let flavor;
	export let product;
    import Array from './Array.svelte';
    import Calculator from './Calculator.svelte';

	let num = 0;
	let colors = ["red", "orange", "yellow", "yellowgreen", "green", "skyblue", "blue", "purple","violet","black"];
	let idx = 0;
	function btnEvent(){
		idx = (idx+1)%colors.length;
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>I'm {flavor}{product}</p>
	<input bind:value={num}>
	{#if num<10}
	<p style="color: {colors[idx]}">{num} : 10 보다 작은 수</p>
	{:else if num < 20}
	<p style="color: {colors[idx]}">{num} : 20 보다 작은 수</p>
	{:else}
	<p style="color: {colors[idx]}">{num} : 큰 수</p>
	{/if}

	{#each colors as color}
	<div style="color: {color};">{color}</div>
	{/each}

	<button type="button" on:click={btnEvent}>색깔바꾸기</button>

	<Calculator increment={()=>num+=1} drecrement={()=>num-=1}/>
	<h1>점심 메뉴를 골라드려요!</h1>
	<p>원하는 카테고리를 선택하세요!</p>
	<Array/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: rgb(98, 169, 244);
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>