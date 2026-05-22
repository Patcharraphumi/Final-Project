




<script>
// @ts-nocheck


 import { Card, Button, Toggle,Spinner,Indicator,CloseButton,P } from "flowbite-svelte";
 import {UserCircleSolid}  from 'flowbite-svelte-icons'
 
 let { data } = $props();

 let community = data.community[0]

  let topics = $derived(data.Topic)

  let request = data.request

  let role = data.user.role

  
  topics = topics.sort((a, b) => b.id - a.id);

</script>

<div class='flex justify-center-safe mt-5'>
  <P size='3xl'>ทุนการศึกษา
(สำหรับผู้ได้รับคัดการเลือก)</P>
</div>

<div class="fixed right-[1.5rem] top-[16rem] ">
  <Card class="p-4 sm:p-6 md:p-8 w-80 h-[25rem] overflow-hidden rounded-3xl shadow-2xl"> 
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">คำอธิบาย</h5>
    <p>{community.description}</p>
  </Card>
</div>



{#if topics.length > 0 && role === 'student' && request.status === 'approved' }
<div class="text-center mt-5 mb-5 ml-100">

    <Button size='xl'   pill href='/forum'class='w-60'>สร้างโพสต์</Button>

</div>

	{#each topics as topic}
  <div class="flex flex-col items-center relative">
		<Card size='lg' href='./comments/{topic.id}'  class="p-4 sm:p-6 md:p-8 mb-1.5 max-w-2xl max-h-[15rem] rounded-3xl overflow-hidden "  > 
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

{:else if request.status === null}

<div class='flex  items-center mt-10 mb-5 w-70 mx-auto'>
<P size='2xl' class='bold' >คอมมูนิตี้นี้จำกัดการเข้าร่วม นักศึกษาต้องส่งคำขอเข้าร่วมเเละรอการ
อนุมัติจากเเอดมินจึงจะสามารถเข้าร่วมได้
</P>
</div> 
<div class='flex justify-center mt-1'>
 <form method="POST" >
<Button color="orange" pill  size='xl' class='' type="submit">ส่งคำขอเข้าร่วม</Button>
</form>
</div>
{:else if request.status === 'pending'}
<div class='text-center mt-5'>
<Button color="alternative" size='xl'>
  <Spinner class="me-3" size="4" />Loading ...
</Button>
</div> 
<div class='text-center mt-5'>
<h1>คำขอรอการอนุมัติ</h1>
</div>
{/if}



{#if role === 'admin'}
<div class="flex justify-center mt-5 mb-5 gap-2 ml-80">
<Button class='gap-2' size='xl'  href='./1/request'>
  คำขอรอการอนุมัติ
  <Indicator class="bg-primary-200 text-primary-800 text-xs font-semibold" size="lg">{request.length}</Indicator>
</Button>
  <Button class='w-40'  size='xl'  pill href='/forum'>สร้างโพสต์</Button>

</div>
{#each topics as topic}
  <div class="flex flex-col items-center relative">
		<Card size='lg' href='./comments/{topic.id}'  class="p-4 sm:p-6 md:p-8 mb-1.5 max-w-2xl max-h-[15rem] rounded-3xl overflow-hidden "  > 
<div class="flex items-center gap-1 mb-2">
            <UserCircleSolid class="w-8 h-8 shrink-0 text-gray-500" />
            <p class="text-gray-900 dark:text-white font-medium">{topic.User[0].FirstName}</p>
        </div>
      
  <h5 class=" text-2xl font-bold tracking-tight text-gray-90 ">{topic.Title}</h5>

  <P class='line-clamp-2'>{topic.Content}</P>


  <P size='lg'>ความคิดเห็น {topic.comments.length}</P>


</Card>

</div>

	{/each}
{/if}




