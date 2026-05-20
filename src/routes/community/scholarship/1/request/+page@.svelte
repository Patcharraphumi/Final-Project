<script>
// @ts-nocheck

  import { Button, Modal,Card,CloseButton,P} from "flowbite-svelte";
  import { invalidateAll } from '$app/navigation';
  
  let {data} = $props()

  let requests = $derived(data.request)

  let selectedrequest = $state(null)
  let isopen = $derived(false);

  const handleCancel = () => {
    alert("Clicked cancel");
    
  };
  
   async function handleAccept(req) {

    selectedrequest = req

    await fetch(`/api/request/${selectedrequest.id}`,{
      method:'POST',
      body: JSON.stringify({ 'user_id':selectedrequest.user_id,'community_id':selectedrequest.community_id })
    })

    await invalidateAll()

  } 

  async function handleDelete() {

    await fetch(`/api/request/${selectedrequest.id}`,{
      method:'DELETE'
    })

  }
  
function openDeleteModal(req){
  selectedrequest = req
  isopen = true
}





</script>


<div class='flex justify-center-safe mt-5'>
  <P size='3xl'>คำขอเข้าร่วม</P>
</div>
  <Modal title=""  bind:open={isopen} autoclose size="sm" class="w-full">
    <svg class="mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
    <p class="mb-4 text-center text-gray-500 dark:text-gray-300">คุณต้องการปฏิเสธคำขอนี้ ?  </p>
    <div class="flex items-center justify-center space-x-4">
          <Button color="red" onclick={handleDelete} >ยืนยัน</Button>

      <Button color="light" onclick={handleCancel}>ยกเลิก</Button>
    </div>
  </Modal>

{#each requests as request}
<form >
<div class = "flex justify-center gap-2 mt-5">

  <Card  class="p-10 sm:p-6 md:p-8 relative rounded-2xl h-40" >
  
 <div class = "absolute right-0 top-0">
 

        <CloseButton onclick={() =>  (isopen = true)} class="mt-0"/>
        </div>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">คำขอรอการอนุมัติ</h5>
  <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">รหัสนักศึกษา  {request.userInfo.UserName}</p>


  <div class='absolute bottom-4 right-3 '>

      <Button color="red" onclick={() => handleAccept(request)}>อนุมัติ</Button>
      <Button color="light" onclick={() => openDeleteModal(request)}>ปฏิเสธ</Button>

</div>
</Card>

</div> 
</form>
{/each}


{#if requests.length === 0}

<div class="flex justify-center mt-50">
  <P size='2xl'>ยังไม่มีคำขอเข้าร่วมในขณะนี้</P>
</div>

{/if}