<script>
    import { message, errorModal } from './contact/messageModal.js'
    import { createEventDispatcher } from 'svelte'

    const dispatch = createEventDispatcher()

    function toggleModal() {
        errorModal.set(false)

        dispatch('close')
    }

</script>

<div class="backdrop-blur-md bg-black bg-opacity-60 flex mx-4 max-w-1/4 shadow-md shadow-zinc-950 rounded-lg font-test16">
    <div class="h-auto flex items-center bg-emerald-400 rounded-l-lg px-4 bg-opacity-50">
        <i class="fa-solid fa-wrench text-xl text-white"></i>
    </div>

    <div class="p-4 border border-white border-opacity-10 rounded-r-lg">
        <h1 class="mb-2 text-emerald-400 text-xl">Error Reported</h1>
    
        <p class="font-light">{$message}</p>
    
        <div class="flex justify-end pt-4 ">
            <button on:click={toggleModal} class="py-2 px-6 hover:bg-emerald-500 border border-white rounded-full text-white transition-all duration-300 hover:translate-y-[-0.5rem] border-opacity-20 bg-zinc-900 bg-opacity-60">Okay</button>
        </div>
    </div>
</div>