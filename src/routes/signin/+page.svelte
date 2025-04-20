<script lang="ts">
	import { Facebook, Github, Eye } from '@lucide/svelte';
	import { Intent } from '$lib/intent';
	import { title, description } from "$store/header";

	$title = "Sign In";
	$description = "Login dulu untuk mengakses fitur yang ada.";
</script>

<section class="flex flex-col mt-[70px] p-5 items-start w-screen h-auto overflow-x-hidden">
	<h1 class="text-[35px] w-full text-left font-extrabold tracking-widest">Sign In</h1>
	<form action="#" class="mt-[30px] w-full h-auto">
		<div class="flex flex-col gap-3 w-full">
			<label for="email" class="text-lg font-bold">Email</label>
			<input
				type="email"
				name="email"
				class="border-white/20 outline-none rounded-2xl border py-3 px-5 w-full"
				id="email"
				placeholder="jhondoe@example.com"
				required
			/>
		</div>
		<div class="flex flex-col gap-3 mt-5 w-full">
			<label for="password" class="text-lg font-bold">Password</label>
			<input
				type="password"
				name="password"
				class="border-white/20 outline-none rounded-2xl border py-3 px-5 w-full"
				id="password"
				placeholder="*********"
				required
			/>
		</div>
		<div class="flex justify-between mt-5">
			<div class="flex gap-3 w-auto items-center">
				<label
					for="remember"
					class="text-md font-normal h-auto leading-0 -translate-y-[1.5px] -translate-x-[3px]"
					>Remember me</label
				>
				<input
					type="checkbox"
					name="remember"
					class="text-white w-[15px] h-[15px] -order-1"
					id="remember"
				/>
			</div>
			<a
				href="/"
				class="-translate-y-[1.5px] font-semibold bg-gradient-to-r text-transparent from-blue-500 to-sky-500 !bg-clip-text"
				>Forgot password?</a
			>
		</div>
		<div class="flex mt-5">
			<button
				type="submit"
				class="w-full hover:scale-105 transition-transform py-3 px-4 bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl font-bold text-lg"
				>Sign In</button
			>
		</div>
	</form>
	<h3 class="w-full text-center mt-3">
		Don't have an account? <button
			on:click={() => Intent("/signup")}
			class="bg-gradient-to-r text-transparent cursor-pointer from-blue-500 to-sky-500 !bg-clip-text">Sign Up</button
		>
	</h3>
	<div class="relative mt-10 flex justify-center w-full">
		<h3 class="w-auto mx-auto px-3 bg-[#0D1318] text-center">Or Sign In with</h3>
		<span class="w-full flex h-[1px] bg-white/30 absolute -z-[1] top-0 bottom-0 my-auto"></span>
	</div>
	<div class="flex w-full gap-5 justify-between mt-10">
		<div
			class="flex w-full cursor-pointer hover:scale-110 transition-transform justify-center items-center gap-1 text-[20px] bg-gradient-to-r from-cyan-500/20 to-blue-500/30 rounded-lg p-2"
		>
			<Facebook color="white" />
			<h3>Facebook</h3>
		</div>
		<div
			class="flex w-full cursor-pointer hover:scale-110 transition-transform justify-center items-center gap-1 text-[20px] bg-gradient-to-r from-cyan-500/20 to-blue-500/30 rounded-lg p-2"
		>
			<Github color="white" />
			<h3>Github</h3>
		</div>
	</div>
</section>
