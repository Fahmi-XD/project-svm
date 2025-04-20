<script lang="ts">
	import { Intent } from '$lib/intent';
	import { title, description } from "$store/header";

	$title = "Sign Up";
	$description = "Sign Up dulu untuk mengakses fitur yang ada.";
</script>

<section class="flex flex-col mt-[70px] p-5 items-start w-screen h-auto">
	<h1 class="text-[35px] w-full text-left font-extrabold tracking-widest">Sign Up</h1>
	<form action="#" class="mt-[30px] w-full h-auto">
		<div class="flex flex-col gap-3 w-full">
			<label for="username" class="text-lg font-bold">Username</label>
			<input
				type="text"
				name="username"
				class="border-white/20 outline-none rounded-2xl border py-3 px-5 w-full"
				id="username"
				placeholder="jhondoe@example.com"
				required
			/>
		</div>
		<div class="flex flex-col mt-5 gap-3 w-full">
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
		<div class="flex gap-3 mt-5 w-full">
			<div class="flex flex-col gap-3 w-full">
				<label for="date" class="text-lg font-bold">Birtday</label>
				<input
					type="date"
					name="date"
					class="border-white/20 outline-none rounded-2xl border py-3 px-5 w-full"
					id="date"
					required
				/>
			</div>
			<div class="flex flex-col gap-3 w-full">
				<label for="gender" class="text-lg font-bold">Gender</label>
				<input
					type="text"
					name="gender"
					class="border-white/20 outline-none rounded-2xl border py-3 px-5 w-full"
					id="gender"
					placeholder="Mekanik"
					required
				/>
			</div>
		</div>
		<h3 class="w-full flex justify-between mt-5">Have an account? <button on:click={() => Intent("/signin")} class="bg-gradient-to-r text-transparent cursor-pointer from-blue-500 to-sky-500 !bg-clip-text">Sign In</button></h3>
		<div class="flex mt-5">
			<button
				type="submit"
				class="w-full hover:scale-105 transition-transform py-3 px-4 bg-gradient-to-r from-blue-500 to-sky-500 rounded-2xl font-bold text-lg"
				>Sign Up</button
			>
		</div>
	</form>
</section>