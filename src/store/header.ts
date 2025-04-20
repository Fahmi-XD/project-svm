import { writable } from "svelte/store";

export let title = writable<string>("Wellcome ...");
export let description = writable<string>("Singkat saja...");