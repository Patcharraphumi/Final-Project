<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { Tabs, TabItem } from "flowbite-svelte";
	import {Card} from "flowbite-svelte"
	import {Button} from "flowbite-svelte"
	import { GiftBoxSolid, ArrowUpRightFromSquareOutline } from "flowbite-svelte-icons";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}




