<h1>Internship</h1>
<div class="creation">
  <a href="/forum">สร้าง</a>
</div>




<script>

 import { Card, Button, Toggle,Spinner,Indicator,CloseButton } from "flowbite-svelte";

  
 let { data } = $props();

  let topics = data.Topic

  let request = data.request

  let role = data.user.role

</script>



<!-- 

	{#each topics as topic}
  <div class="flex justify-center">
		<Card  class="p-4 sm:p-6 md:p-8 mb-1.5">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{topic.Title}</h5>
  <p>{topic.Content}</p>
</Card>
</div>
	{/each}

-->


{#if topics.length > 0 && role === 'student' && request.status === 'approved' }
	{#each topics as topic}
  <div class="flex justify-center">
		<Card  href='./comments/{topic.id}'  class="p-4 sm:p-6 md:p-8 mb-1.5"  > 
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{topic.Title}</h5>
  <p>{topic.Content}</p>
</Card>

</div>
	{/each}

{:else if request.status === null}
 <form method="POST">
<Button color="orange" type="submit">เข้าร่วม</Button>
</form>
<h1>นักศึกษาต้องได้รับการอนุมัติจากเจ้าหน้าที่จึงจะสามารถเข้าร่วมได้</h1> 

{:else if request.status === 'pending'}
<Button color="alternative">
  <Spinner class="me-3" size="4" />Loading ...
</Button>
<h1>คำขอรอการอนุมัติ</h1>

{/if}



{#if role === 'admin'}

<Button class="gap-2" href='./1/request'>
  คำขอรอการอนุมัติ
  <Indicator class="bg-primary-200 text-primary-800 text-xs font-semibold" size="lg">{request.length}</Indicator>
</Button>

{#each topics as topic}
  <div class="flex justify-center">
		<Card href='./comments/{topic.id}' class="p-4 sm:p-6 md:p-8 mb-1.5">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{topic.Title}</h5>
  <p>{topic.Content}</p>
</Card>
</div>
	{/each}
{/if}




