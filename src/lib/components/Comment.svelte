<script>
  import { Button, Textarea } from "flowbite-svelte";
  import { enhance } from "$app/forms";
  import Comment from "./Comment.svelte";
  import { UserCircleSolid } from "flowbite-svelte-icons";

  // Note: 'indent' is no longer needed for styling as HTML nesting handles it automatically
  let { id, Content, replys = [] } = $props();
  let isReplying = $state(false);

  function toggleReply() {
    isReplying = !isReplying;
  }
</script>

<div class="flex flex-col  ">
  <div class="flex items-start gap-2 ml-10">
   
    <div class="-mt-1">
      <UserCircleSolid class="shrink-0 h-8 w-8 text-gray-400" />
    </div>

    <div class="flex flex-col w-full">
      <div class="flex items-center gap-2 text-xs mb-1">
        <span class="font-bold text-gray-900 dark:text-white">
          Username
        </span>
      </div>

      <div class="text-gray-900 dark:text-gray-200">
        <p>{Content}</p>
      </div>

      <div class="flex items-center gap-1 mt-2 text-xs font-semibold text-gray-500 -ml-4">
     
        
        <Button 
          class="flex items-center gap-1 px-3 py-1 ml-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
          onclick={toggleReply}
        >
         ตอบกลับ
        </Button>
      </div>
    </div>
  </div>



  {#if isReplying}
    <div class="mt-3 ml-10">
      <form 
        method="POST" 
        action="?/comment" 
        class="min-w-2xl" 
        use:enhance 
      >
        <input type="hidden" name="reference_Id" value={id} />
        <Textarea name="content" placeholder="What are your thoughts?" required class="mb-2">
          {#snippet footer()}
            <div class="flex items-center justify-end gap-2">
                          <Button type="submit" size="xs">คอมเมนต์</Button>
              <Button size="xs" color="alternative" onclick={toggleReply}>ยกเลิก</Button>
            </div>
          {/snippet}
        </Textarea>
      </form>
    </div>
  {/if}

  {#if replys && replys.length > 0}
    <div class="mt-2 ml-10  ">
      {#each replys as reply}
        <Comment {...reply} />
      {/each}
    </div>
  {/if}
</div>