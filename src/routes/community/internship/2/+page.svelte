




<script>
// @ts-nocheck


 import { Card, Button, Toggle,Spinner,Indicator,CloseButton,Hr,P } from "flowbite-svelte";
 import {UserCircleSolid}  from 'flowbite-svelte-icons'
 
 let { data } = $props();

 let community = data.community[0]


 let description =  data.community[0].description

  let topics = $derived(data.topic)

  topics = topics.sort((a, b) => b.id - a.id);




</script>






{#if topics.length > 0 }
	{#each topics as topic}


  <div class="flex flex-col items-center relative">
		<Card size='lg' href='./2/comments/{topic.id}'  class="p-4 sm:p-6 md:p-8 mb-1.5 max-w-2xl max-h-[15rem] rounded-3xl overflow-hidden "  > 
<div class="flex items-center gap-1 mb-2">
            <UserCircleSolid class="w-8 h-8 shrink-0 text-gray-500" />
            <p class="text-gray-900 dark:text-white font-medium">{topic.User.FirstName}</p>
        </div>
      
  <h5 class=" text-2xl font-bold tracking-tight text-gray-90 ">{topic.Title}</h5>

  <P class='line-clamp-2'>{topic.Content}</P>


  <P size='lg'>ความคิดเห็น {topic.comments.length}</P>


</Card>

</div>



	{/each}

 
{/if}











<div class="fixed right-[1.5rem] top-[16rem] ">
  <Card class="p-4 sm:p-6 md:p-8 w-80 h-[25rem] overflow-hidden rounded-3xl shadow-2xl"> 
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">คำอธิบาย</h5>
    <p>{community.description}</p>
  </Card>
</div>
