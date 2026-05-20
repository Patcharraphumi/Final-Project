<script>

	import './layout.css';	
	  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger,Search ,Button} from "flowbite-svelte";
import { goto } from '$app/navigation';
  import { page } from '$app/state';

import Cookies from  'js-cookie'
    import { derived } from 'svelte/store';

	let { data,children } = $props();

  let userid = data.user.UserName

  function logOut(){
    Cookies.remove('session_id')

    goto('/login')

  }

  let currentRoute = $derived('page.url.pathname')


</script>

<div>


<Navbar class=" text-white  bg-primary-600 shadow-lg">
  <NavBrand href="/"  class='mt-2'>
    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CSTU ONLINE FORUM</span>
  </NavBrand>
  <div class="mt-2 ml-10  w-120" >
  <form action="/search">
        <Search name='params'  placeholder="Search..." />
        <Button class='hidden' type="submit">Search</Button>
        </form>
      </div>
  <NavHamburger />
  <NavUl class='mt-2 text-white'>
    <NavLi href="/"
    nonActiveClass='text-white'
    >หน้าหลัก</NavLi>
    {#if userid}
    <NavLi href="/profile/{userid}"    nonActiveClass='text-white'
>โปรไฟล์</NavLi>
    {/if}
    {#if userid === null || userid === undefined}
    <NavLi href="/login"
        nonActiveClass='text-white'
>โปรไฟล์</NavLi>
    {/if}
    <NavLi href="/forum"
        nonActiveClass='text-white'
>โพสต์</NavLi>
 {#if userid && currentRoute != '/login'}
    <NavLi 
        nonActiveClass='text-white' onclick={logOut}
>ออกจากระบบ</NavLi>
    {/if}
  </NavUl>
</Navbar>
</div>



{@render children()}




