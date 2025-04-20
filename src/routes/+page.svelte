<script lang="ts">
	import { Bell } from "@lucide/svelte";
	import { title, description } from "$store/header";

	$title = "Dashboard";
	$description = "Wellcome to mole";
</script>

<section class="block w-full h-auto p-5">
	<div class="flex items-center justify-between mt-3">
		<h1 class="text-3xl tracking-wide font-semibold italic">SyntxFlow.</h1>
		<Bell class="bg-neutral-800 border border-white/30 p-[10px] w-[40px] h-[40px] rounded-full" fill="white" />
	</div>
	<h3 class="opacity-70 mt-5">Good work for today, Fahmi🔥</h3>
	<h1 class="text-5xl font-normal tracking-wide leading-[1.1em]">Keep building. Speed is everything 🚀</h1>
</section>