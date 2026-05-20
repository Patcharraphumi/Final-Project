<script>

// @ts-nocheck



import {UserCircleSolid,PaperClipOutline, MapPinAltSolid, ImageOutline} from 'flowbite-svelte-icons'

import {page} from '$app/state'

import { enhance } from '$app/forms';

import {Card,Input,Textarea,Toolbar, ToolbarButton, Button,P} from 'flowbite-svelte'



import Comment from '$lib/components/Comment.svelte';

/** @type {import('./$types').PageProps} */

let { data } = $props();

    let topics = data.Topic

   let comments = $derived(data.comments)

   let replys = $derived(data.replys)

   let community_name = data.community[0].name

   let userName = data.user[0].FirstName

    let visible = $state('none')

    let parent_id = $state(null)





function buildCommentThread(comments, replies) {

  let Thread = [];



   Thread = [...comments ?? [], ...replies ??[]];



   for(let i =0;i<Thread.length;i++){

  Thread[i].replys = []

}



for (let i=0;i<Thread.length;i++){

  let parent 

  if(Thread[i].reference_Id != null){

     parent = Thread.find(c => c.id === Thread[i].reference_Id )  

    parent.replys.push(Thread[i])

  }

}



 return Thread.filter(c => c.reference_Id == null);

}



let nestedData = $derived(buildCommentThread(comments, replys));



</script>



<div class="flex flex-col relative">



 

<Card   class="max-w-2xl h-auto mt-5 mb-1.5  border-0 relative mx-auto min-h-64 overflow-auto">

       <P class='ml-5 mt-1.5'>C/{community_name}</P>



       

    <div class="absolute left-5 top-5">

    <div class='flex items-center-safe mt-2 mb-2'>

      <UserCircleSolid class="shrink-0 h-6 w-6 text-gray-400" />



  <P class=' mt-1.5'>{userName}</P>   

    </div>

         

    



  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{topics[0].Title}</h5>

  <p >{topics[0].Content}</p>

</div>

</Card>

<div class='relative'>

<form method="POST" action='?/comment' class="max-w-2xl mx-auto " use:enhance >

  <Textarea class="mb-4 "name='content'   placeholder="Write a comment" required>

    {#snippet footer()}

      <div class="flex items-center justify-between">

        <Button type="submit">เเสดงความคิดเห็น</Button>

      </div>

    {/snippet}

  </Textarea>

  <div class=' mt-1'>

<P size="2xl" class="font-bold mb-4">ความคิดเห็น</P>

</div>
</form>



{#if nestedData.length >0} 



{#each nestedData as comment}
<div class="max-w-2xl mx-auto mt-6">
      <div class="flex flex-col gap-4 -ml-10">
        {#each nestedData as comment}
          <Comment {...comment} />
        {/each}
      </div>
    </div>
 {/each}

{/if}



</div>

</div>