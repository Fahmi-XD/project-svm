<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import Splash from '../components/Splash.svelte';
	import { title, description } from "$store/header"
	
	let { children, data } = $props();
	let done = $state(false);

	onMount(() => {
		setTimeout(() => {
			done = true;
		}, 4500)
	})
</script>

<svelte:head>
	<title>{ $title == "Wellcome ..." ? $title : $title + " | Syntx" }</title>
	<meta name="description" content={ $description } />
</svelte:head>

<Splash {done} {data} />

{#if (done)}
	{@render children()}
{/if}
