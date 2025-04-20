<script lang="ts">
	import { fade } from 'svelte/transition';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	import type { AnimationItem } from 'lottie-web';
	import type { IQuotes } from '../types/quotes-type';

	let container: HTMLDivElement;
	let animation: AnimationItem;
	let mount = false;
	let time = getTime();
	let inter: NodeJS.Timeout;

	onMount(() => {
		if (browser) {
			import('lottie-web').then((lottie) => {
				setTimeout(() => {
					mount = true;
				}, 50);

				animation = lottie.default.loadAnimation({
					container,
					renderer: 'svg',
					loop: false,
					autoplay: true,
					path: '/splash-animation.json'
				});

				animation.setSpeed(1.5);
			});
		}

		return () => animation.destroy();
	});

	export let done = false;
	export let data;

	function rnd(arr: IQuotes[]): string[] {
		const stsr = arr[Math.floor(Math.random() * arr.length)];

		return [stsr.quote, stsr.author];
	}

	function getTime(): string {
		const now = new Date();

		const hours = now.getHours().toString().padStart(2, '0');
		const minutes = now.getMinutes().toString().padStart(2, '0');
		const seconds = now.getSeconds().toString().padStart(2, '0');

		return `${hours}:${minutes}:${seconds}`;
	}

	function truncateString(str: string, maxLength = 10): string {
		return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
	}

	onMount(() => {
		inter = setInterval(() => {
			time = getTime();
		}, 1000);

		return () => clearInterval(inter);
	});
</script>

{#if !done}
	<section
		class="fixed bg-[#0D1318] z-50 flex-col top-0 left-0 w-screen h-screen flex justify-center items-center"
		transition:fade
	>
		{#if mount}
			<h1 class="w-full px-5 text-[5rem] text-center opacity-60 mt-3">{time}</h1>
      <h1 class="opacity-50">Minggu, 20 April 2025</h1>
		{/if}
		<div bind:this={container} class="w-[300px] h-auto"></div>
		{#if mount}
			<h1 class="text-4xl">Wellcome, Fahmi!</h1>
			<h1 class="w-full px-5 text-center opacity-60 mt-3">
				{truncateString(rnd(data.quotes)[0], 100)}
			</h1>
			<h1 class="opacity-50">~ {rnd(data.quotes)[1]} ~</h1>
		{/if}
	</section>
{/if}

<!-- 
<style>
	.animation {
		animation: animation 1s linear forwards;
	}

	@keyframes animation {
		0% {
			opacity: 1;
		}
		30% {
      opacity: 1;
		}
		35% {
      opacity: 1;
		}
		40% {
      opacity: 0;
		}
		50% {
      opacity: 1;
		}
		60% {
      opacity: 0;
		}
		65%, 100% {
      opacity: 1;
		}
	}
</style> -->
