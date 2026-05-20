







<script>
// @ts-nocheck


 import { Card, Button, Toggle,Spinner,Indicator,CloseButton,Hr,P } from "flowbite-svelte";
 import {UserCircleSolid}  from 'flowbite-svelte-icons'
 
 let { data } = $props();

  let topics = $derived(data.topics)



</script>


<div class='flex justify-center mt-5 mb-5'>

<P size='2xl'>ผลการค้นหา</P>

</div>
{#if topics.length > 0 }
	{#each topics as topic}


  <div class="flex justify-center-safe">
		<Card size='lg' href='./comments/{topic.id}'  class="p-4 sm:p-6 md:p-8 mb-1.5 max-w-2xl max-h-60"  > 
      <p>C/{topic.Community.name}</p>
<div>
      <UserCircleSolid class="left-0 top-0 mt-2xs shrink-0 overflow-hidden relative  w-[2rem] h-[2rem]" />
<p class='relative left-10 bottom-7'>UserName</p>
</div>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white relative bottom-5">{topic.Title}</h5>
  <p class='relative bottom-5'>{topic.Content}</p>
</Card>


</div>



	{/each}

 
{/if}



{#if topics.length === 0 }
<div class='flex justify-center mt-5 mb-5'>

<P size='2xl'>ขออภัยไม่พบผลการค้นหา</P>

</div>
{/if}







 


