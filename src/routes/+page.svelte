<script lang="ts">
  import { Intent } from "$lib/intent";
	import { title, description } from "$store/header";

	$title = "Dashboard";
	$description = "Wellcome to mole";
</script>

<section class="block w-full h-auto p-5">
  <h1 class="text-3xl mt-10">Dashboard</h1>

  <button
			on:click={() => Intent("/signup")}
			class="bg-gradient-to-r text-transparent cursor-pointer from-blue-500 to-sky-500 !bg-clip-text">Sign Up</button
		>
</section>