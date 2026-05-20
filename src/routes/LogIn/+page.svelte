

<script>
  import {Button,Input,Card,Checkbox,Label} from 'flowbite-svelte'
</script>


<div class="flex justify-center mt-10">
<Card class="p-4 sm:p-6 md:p-8 rounded-2xl">
  <form class="flex flex-col space-y-6" method="POST" action="?/login">
    <h3 class="text-heading text-xl font-medium">ลงชื่อเข้าใช้</h3>
    <Label class="space-y-2">
      <span>Username</span>
      <Input  type="username" name="username" placeholder="ชื่อผู้ใช้..." required />
    </Label>
    <Label class="space-y-2">
      <span>Password</span>
      <Input type="password" name="password" placeholder="รหัสผ่าน..." required />
    </Label>
    <div class="flex items-start">
      <Checkbox>Remember me</Checkbox>
    </div>
    <Button type="submit" class="w-full">เข้าสู่ระบบ</Button>
    <div class="text-body text-sm font-medium">
    </div>
  </form>
</Card>
</div>
