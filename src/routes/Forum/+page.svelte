
<script>

  import {Select,Button,Input } from "flowbite-svelte";

  let {data} = $props()

  let community = data.community

  community = community.map( c => ({value :c.id,name:c.name}))



</script>

<div class='flex flex-col text-center mt-5 '>


<form method="POST">

  <label for="community-select" class='text-2xl mt-10'>เลือกคอมมูนิตี้</label>


  <Select class="mt-2 w-xl justify-center-safe mx-auto mb-5" name="community" placeholder='คอมมูนิตี้...'  items={community} required/>

  <label for="community-select" class='text-2xl'>หัวข้อ</label>

  <Input  class="max-w-xl rounded-4xl mx-auto mb-5" type="text" id="fname" name="Title" placeholder="Title"  /> 
    <label for="community-select" class='text-2xl mb-5'>เนื้อหา</label>

  <Input class=" placeholder:absolute placeholder:left-5 placeholder:top-10  max-w-xl mx-auto h-50 rounded-full mb-5" type="text" id="lname" name="Content" placeholder="Content" required />

<div class="flex justify-center">
<Button class="mx-auto justify-center-safe rounded-4xl w-140 " size='xl' color="orange"  type="submit">สร้างโพสต์</Button>
</div>
</form>



</div>