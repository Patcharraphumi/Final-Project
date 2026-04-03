
<script>

import {Input} from 'flowbite-svelte'
import {page} from '$app/state'
/** @type {import('./$types').PageProps} */
	let { data } = $props();
    let user = data.user
    let id = $state('')
console.log(page.url)

</script>



<Input type="text" id="first_name" placeholder="John" required bind:value={id} />


<a href='./comments/{id}'>link</a>


<h1>{user[0]}</h1>


