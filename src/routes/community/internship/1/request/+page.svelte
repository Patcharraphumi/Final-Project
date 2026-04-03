<script>
  import { Button, Modal,Card,CloseButton} from "flowbite-svelte";
  
  let {data} = $props()

  let userName = data.user[0].UserName
  let isopen = $state(false);
  const handleCancel = () => {
    alert("Clicked cancel");
  };
  const handleDelete = () => {
    alert("Clicked delete");
  };

</script>



<div class = "flex justify-center">
  <Modal title="" bind:open={isopen} autoclose size="sm" class="w-full">
    <svg class="mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
    <p class="mb-4 text-center text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
    <div class="flex items-center justify-center space-x-4">
      <Button color="light" onclick={handleCancel}>No, cancel</Button>
      <Button color="red" onclick={handleDelete}>Yes, I'm sure</Button>
    </div>
  </Modal>

  <Card  class="p-10 sm:p-6 md:p-8 relative rounded-2xl">
 <div class = "absolute right-0 top-0">


        <CloseButton onclick={() =>  (isopen = true)} class="mt-0"/>
        
        </div>
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">คำขอรอการอนุมัติ</h5>
  <p class="leading-tight font-normal text-gray-700 dark:text-gray-400">รหัสนักศึกษา  {userName}</p>

  <Modal title="" bind:open={isopen} autoclose size="sm" class="w-full">
    <svg class="mx-auto mb-3.5 h-11 w-11 text-gray-400 dark:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>
    <p class="mb-4 text-center text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
    <div class="flex items-center justify-center space-x-4">
      <Button color="light" onclick={handleCancel}>No, cancel</Button>
      <Button color="red" onclick={handleDelete}>Yes, I'm sure</Button>
    </div>
  </Modal>

</Card>
<div class="h-32 w-px bg-gray-300"></div>
</div> 

