<script>
// @ts-nocheck

	/** @type {import('./$types').PageProps} */
	  import { UserCircleSolid } from "flowbite-svelte-icons";
  import { Tabs, TabItem,Card ,CloseButton,Modal,Button} from "flowbite-svelte";
import { invalidateAll } from '$app/navigation';

	let { data } = $props();

	let user = data.user

 

  let topics = $derived(data.topic)

  let comments = $derived(data.comment)

  let isopen = $state(false);

  let deleteType = $state("")

  let itemToDeleteId = $state(null)


  function openDeleteModal(id,type){
    isopen = true
    itemToDeleteId = id
    deleteType = type
  }


async function handleDelete()  {
  if (deleteType === 'topic'){
    await deleteTopic(itemToDeleteId)
  }if (deleteType === 'comment'){
    await deleteComment(itemToDeleteId)
  }  


  isopen = false
  
}


async function deleteTopic(){
    await fetch(`/api/topic/${itemToDeleteId}`,{
      method:'DELETE',
      body: JSON.stringify({ 'id':itemToDeleteId })
    })


}

async function deleteComment(){
    await fetch(`/api/comment/${itemToDeleteId}`,{
      method:'DELETE',
      body: JSON.stringify({ 'id':itemToDeleteId })
    })

    await invalidateAll()

}


  function handleCancel(){
    isopen = false
  }


</script>

   
<div>

    <UserCircleSolid  class="shrink-0 h-40 w-40 ml-50 " />
    <h1 class='relative left-56 '>{user[0].FirstName} {user[0].LastName}</h1>

<div>
  </div> 
</div>
<div class='ml-30'>
<Tabs tabStyle="pill">
  <TabItem open>
    {#snippet titleSlot()}
      <span>โพสต์</span>
    {/snippet}
 
  
{#each topics as topic }


  <div class="flex mr-5">

   

		<Card   class="p-4 sm:p-6 md:p-8 mb-1.5  max-w-3xl h-60 overflow-hidden rounded-2xl relative"  > 
       <div class = "absolute right-0 top-0">
 

        <CloseButton onclick={() =>  openDeleteModal(topic.id,'topic')}/>
        </div>
      <p>C/{topic.community.name}</p>
     
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{topic.Title}</h5>
  <p class='line-clamp-1'>{topic.Content}</p>
</Card>

</div>
{/each}
    
  </TabItem>
  <TabItem>
    {#snippet titleSlot()}
      <span>ความคิดเห็น</span>
    {/snippet}
   {#each comments as comment }
  <div class="flex mr-5">
		<Card size='lg'  class="p-4 sm:p-6 md:p-8 mb-1.5 max-w-2xl max-h-60 relative"  > 
      <div class = "absolute right-0 top-0">
 

        <CloseButton onclick={() =>  openDeleteModal(comment.id,'comment')}/>
        </div>
      <p>C/{comment.community.name}</p>
      <div class='flex items-center mt-1'>
   

            <p class='relative left-0 bottom-0 mr-5'>หัวข้อ </p>
            <p class='font-bold'>{comment.topic.Title} </p>


      </div>
<p class='line-clamp-1 mt-5 ml-0.5'>ความคิดเห็น {comment.Content}</p>
</Card>

</div>
{/each}
  </TabItem>
 

</Tabs>


   <Modal title=""  bind:open={isopen} autoclose size="sm" class="w-full">
    <svg class="mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
    <p class="mb-4 text-center text-gray-500 dark:text-gray-300">คุณต้องการลบรายการนี้?  </p>
    <div class="flex items-center justify-center space-x-4">
         

      <Button color="light"  onclick={handleCancel}>ยกเลิก</Button>
       <Button color="red" onclick={handleDelete} >ยืนยัน</Button>
    </div>
  </Modal>

</div>