
<script>

  import {Select,Button,Input } from "flowbite-svelte";

  let {data} = $props()

  const communities = data.community
   let selected = "";


const community = new Array(communities.length).fill(null).map(i=>({
  value:null,
  name:null
}))


  for(let i=0;i<communities.length;i++){
    community[i].value = communities[i].id
    community[i].name = communities[i].name
    
  }
  
console.log(community)
  //community = community.sort((a, b) => a.value - b.value)

</script>

<h1>หัวข้อ</h1>


<form method="POST">

  <label for="community-select">เลือกคอมมูนิตี้</label>


  <Select class="mt-2 w-[24em] justify-center-safe mx-auto" name="community"  items={community} required/>


<br>
<br>

  <Input  class="max-w-xl rounded-4xl mx-auto " type="text" id="fname" name="Title" placeholder="Title" required /> <br> <br>
  <Input class=" placeholder:absolute placeholder:left-5 placeholder:top-10  max-w-xl mx-auto h-50 rounded-full" type="text" id="lname" name="Content" placeholder="Content" required />
<br>

<div class="flex justify-center">
<Button class="mx-auto justify-center-safe" color="dark" type="submit">Submit</Button>
</div>
</form>



