<script>

	import '../layout.css';
	  import { Button,P } from "flowbite-svelte";
      import { page } from '$app/state';

  
	let { data,children } = $props();

  let communityName = data.communityName


</script>



{#if communityName === 'internship' }
<div class='flex justify-center-safe mt-5'>
  <P size='3xl'>สหกิจศึกษา(สำหรับพูดคุยทั่วไป)</P>
</div>



{:else if communityName === 'firstyear' }
<div class='flex justify-center-safe mt-5'>
  <P size='3xl'>สำหรับนักศึกษาปี 1</P>
</div>

{:else if communityName === 'activity' }
<div class='flex justify-center-safe mt-5'>
  <P size='3xl'>กิจกรรมนักศึกษา</P>
</div>

{:else if communityName === 'scholarship' }
<div class='flex justify-center-safe mt-5'>
  <P size='3xl'>ทุนการศึกษา (สำหรับพูดคุยทั่วไป)</P>
</div>
  
{/if}




 

 
  <div class="text-center mt-5 mb-5 ml-100">
    <Button pill size="xl" class="shadow-lg w-60"  href='/forum'>สร้างโพสต์</Button>
  </div>






{@render children()}




