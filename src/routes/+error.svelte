<script lang="ts">
    import { page } from '$app/stores'
    import NavigationTwo from './navigation/navigationTwo.svelte'
    import { onMount } from 'svelte'
    import { errorModal, message } from './contact/messageModal.js'
    import ErrModal from './errorModal.svelte'

    let status = $page.status

    let fillOutForm = 'hidden'
    let hideError = ''
    let backBut = ''
    let popUpModal = 'top-[110%]'
	let popUpBackground = 'hidden'

    let formData = {
        name: '',
        email: '',
        message: '',
        type: 'error'
    }

    onMount(() => {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('error') === '500') {
            status = 500;
        }
    })

    function openForm() {
        hideError = 'translate-y-[-200%]'
        backBut = 'translate-y-[800%]'
        setTimeout(() => {
            fillOutForm = 'block opacity-0'
        }, 1000)
        setTimeout(() => {
            fillOutForm = 'block opacity-100'
            hideError = 'translate-y-[-200%] hidden'
            backBut = 'translate-y-[800%] hidden'
        }, 1100)
    }

    function cancelForm() {
        fillOutForm = 'block opacity-0'
        setTimeout(() => {
            fillOutForm = 'hidden'
            hideError = 'translate-y-[-200%]'
            backBut = 'translate-y-[800%]'
        }, 1000)
        setTimeout(() => {
            hideError = 'translate-y-0'
            backBut = 'translate-y-0'
        }, 1100)
    }

    async function sendMessage() {
        if (!formData.name || !formData.email || !formData.message) {
            return
        }
        try {
            // const response = await fetch('https://andrew-kester-portfolio-server.vercel.app/send', {
            const response = await fetch('./contact/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                console.error('Server responded with an error:', response.status, await response.text());
                return;
            } else if (response.ok) {
                errorModal.set(true)
                message.set('Thank you for your input. I will look into this and get back to you as soon as possible.')
            }

        } catch (error) {
            console.error('An error occurred while sending the message:', error)
        } 
    

        formData.name = ''
        formData.email = ''
        formData.message = ''
    }

    $: if ($errorModal === true) {
		popUpModal = 'top-0'
		popUpBackground = 'block'
	} else if ($errorModal === false) {
		popUpModal = 'top-[110%]'
		popUpBackground = 'hidden'
	}
</script>

{#if $page.status === 404}
    <NavigationTwo />

    <div class="h-screen relative">
        <img src="../../../error_image2.jpg" alt="Thick forest and moss" class="object-cover w-full h-full opacity-30 relative -z-10" loading="lazy">
        
        <div class="absolute z-10 h-full w-full flex justify-center items-center top-0 font-test16">
            <div>
                <h2 class="text-9xl text-center mb-12 font-test10">404</h2>
                <p class="text-4xl text-center m-4">Oh no! It looks like you lost the path on the trail...</p>
                <p class="text-center mb-4 text-emerald-400">Lets get you back on the right track</p>
                <div class="flex justify-center">
                    <div class="highlight hover:text-emerald-400 text-center transition-all duration-500">
                        <a href="/" class="">Back to Home</a>
                        <div class="border-b-2 transition-all duration-300 border-emerald-400"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

{:else if $page.status === 500}

    <div class="h-full w-full fixed z-40 bg-black bg-opacity-70 {popUpBackground}"></div>

    <NavigationTwo />

    <div class="{popUpModal} fixed z-50 flex justify-center h-full w-full items-center transition-all duration-500">
        <ErrModal on:close={cancelForm} />
    </div>

    <div class="h-screen relative overflow-y-hidden">
        <img src="../../../error_image2.jpg" alt="Think forest and moss" class="object-cover w-full h-full opacity-30 relative -z-10" loading="lazy">
        
        <div class="absolute z-10 h-full w-full flex justify-center items-center top-0 font-test16">
            <div class="w-full lg:w-8/12">
                <div class="{hideError} transition-all duration-1000">
                    <h2 class="text-9xl text-center mb-12 font-test10">500</h2>
                    <p class="text-4xl text-center m-4">Oh no! Something unexpected happend...</p>
                    <p class="text-center mb-4 text-emerald-300 drop-shadow-sm">If you would like to add details to what happened I can look into this for you.</p>
                    <div class="w-full flex justify-center">
                        <button on:click={openForm} class=" py-2 px-6 hover:bg-emerald-500 border border-white rounded-full text-white transition-all duration-500 hover:translate-y-[-0.5rem] border-opacity-20 bg-zinc-900 bg-opacity-60">Fill Out Form</button>
                    </div>
                </div>

                <div class="px-4">
                    <button on:click={cancelForm} class="{fillOutForm} transition-all duration-1000 py-2 px-4 hover:bg-emerald-500 border border-white rounded-full text-white transition-all duration-500 border-opacity-20 bg-zinc-900 bg-opacity-60">Cancel</button>
                </div>

                <form on:submit|preventDefault={sendMessage} class="px-4 mt-4 {fillOutForm} transition-all duration-1000">
                    <div class="hidden lg:flex lg:justify-between w-full gap-4 ">
                        <div class="basis-6/12">
                            <input type="text" id="name" name="name" placeholder="Enter Your Name..." bind:value={formData.name} class="w-full bg-inherit backdrop-blur-sm bg-zinc-900 border-white border-opacity-20 bg-opacity-60 rounded-lg focus:ring-0 focus:border-emerald-400 focus:border-opacity-60 placeholder:text-white placeholder:text-opacity-30 font-thin" required>
                        </div>
                    
                        <div class="basis-6/12">
                            <input type="text" id="email" name="email" placeholder="Enter Your email..." bind:value={formData.email} class="w-full bg-inherit backdrop-blur-sm bg-zinc-900 border-white border-opacity-20 bg-opacity-60 rounded-lg focus:ring-0 focus:border-emerald-400 focus:border-opacity-60 placeholder:text-white placeholder:text-opacity-30 font-thin" required>
                        </div>
                    </div>
        
                    <div class=" lg:hidden ">
                        <div class="">
                            <input type="text" id="name" name="name" placeholder="Enter Your Name..." bind:value={formData.name} class="w-full bg-inherit backdrop-blur-sm bg-zinc-900 border-white border-opacity-20 bg-opacity-60 rounded-lg focus:ring-0 focus:border-emerald-400 focus:border-opacity-60 placeholder:text-white placeholder:text-opacity-30 font-thin" required>
                        </div>
                    
                        <div class="mt-4">
                            <input type="text" id="email" name="email" placeholder="Enter Your email..." bind:value={formData.email} class="w-full bg-inherit backdrop-blur-sm bg-zinc-900 border-white border-opacity-20 bg-opacity-60 rounded-lg focus:ring-0 focus:border-emerald-400 focus:border-opacity-60 placeholder:text-white placeholder:text-opacity-30 font-thin" required>
                        </div>
                    </div>
                
                    <div class="mt-4">
                        <textarea 
                        bind:value={formData.message}
                        class="w-full bg-inherit backdrop-blur-sm bg-zinc-900 border-white border-opacity-20 bg-opacity-60 rounded-lg h-32 focus:ring-0 focus:border-emerald-400 focus:border-opacity-60 placeholder:text-white placeholder:text-opacity-30 font-thin"     
                        placeholder="Describe the issue you encountered..."  
                        required                     
                        ></textarea>
                    </div>
                
                    <div class="flex justify-center mb-12 mt-4">                    
                        <button class=" py-2 px-6 hover:bg-emerald-500 border border-white rounded-full text-white transition-all duration-500 hover:translate-y-[-0.5rem] border-opacity-20 bg-zinc-900 bg-opacity-60">Submit</button>
                    </div>
                </form>

                <div class="flex justify-center mt-12 {backBut} transition-all duration-1000">
                    <div class="highlight hover:text-emerald-400 text-center transition-all duration-500">
                        <a href="/" class="">Back to Home</a>
                        <div class="border-b-2 transition-all duration-300 border-emerald-400"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

{/if}


<style>
    .highlight .border-b-2 {
        width: 0;
        opacity: 0;
    }
    
    .highlight:hover .border-b-2 {
        width: 100%; 
        opacity: 1;
    }
</style>