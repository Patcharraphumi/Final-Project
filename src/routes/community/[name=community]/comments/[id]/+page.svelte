
<script>
// @ts-nocheck


import {UserCircleSolid,PaperClipOutline, MapPinAltSolid, ImageOutline} from 'flowbite-svelte-icons'
import {page} from '$app/state'
import {Card,Input,Textarea,Toolbar, ToolbarButton, Button} from 'flowbite-svelte'
/** @type {import('./$types').PageProps} */
	let { data } = $props();
    let topics = data.Topic
    let comments = data.comments


</script>

<div class="flex justify-center">
		<Card size="lg" class="h-64 mb-1.5 border-0 relative">
    <div class="absolute left-5 top-5">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{topics[0].Title}</h5>
  <p>{topics[0].Content}</p>
</div>
</Card>

</div>
<form class="max-w-2xl mx-auto">
  <Textarea class="mb-4 " placeholder="Write a comment">
    {#snippet footer()}
      <div class="flex items-center justify-between">
        <Button type="submit">Post comment</Button>
        <Toolbar embedded>
          <ToolbarButton name="Attach file"><PaperClipOutline class="h-6 w-6" /></ToolbarButton>
          <ToolbarButton name="Set location"><MapPinAltSolid class="h-6 w-6" /></ToolbarButton>
          <ToolbarButton name="Upload image"><ImageOutline class="h-6 w-6" /></ToolbarButton>
        </Toolbar>
      </div>
    {/snippet}
  </Textarea>
</form>

{#if comments.length > 0}




<div class="flex flex-col mx-auto max-w-2xl   items-center mt-5 relative">

<UserCircleSolid class="left-0 top-0 mt-2xs shrink-0 overflow-hidden absolute  w-[2rem] h-[2rem]" />

<p class="mt-10 ml-10">{comments[0].Content}</p>

  <div class="h-24 w-px bg-gray-400 absolute left-4 top-10">
 
  </div>

</div>

<div class="flex flex-col mx-100 max-w-2xl   items-center mt-5 relative">

<UserCircleSolid class="left-0 top-0 mt-2xs shrink-0 overflow-hidden absolute  w-[2rem] h-[2rem]" />

<p class="mt-10 ml-10">{comments[0].Content}</p>

 <div class="h-24 w-px bg-gray-400 absolute left-4 top-10">
 
  </div>
</div>
<div class="flex flex-col mx-110 max-w-2xl   items-center mt-5 relative">

<UserCircleSolid class="left-0 top-0 mt-2xs shrink-0 overflow-hidden absolute  w-[2rem] h-[2rem]" />

<p class="mt-10">{comments[0].Content}</p>


</div>
<div class="flex flex-col mx-120 max-w-2xl   items-center mt-5 relative">

<UserCircleSolid class="left-0 top-0 mt-2xs shrink-0 overflow-hidden absolute  w-[2rem] h-[2rem]" />

<p class="mt-10">{comments[0].Content}</p>


</div>




{/if}
