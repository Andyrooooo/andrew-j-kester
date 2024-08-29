<script lang="ts">
    import { page } from '$app/stores'
    import NavigationTwo from './navigation/navigationTwo.svelte'

    console.log($page)
</script>

{#if $page.status === 404}
    <NavigationTwo />

    <div class="h-screen relative">
        <img src="../../../error_image2.jpg" alt="" class="object-cover w-full h-full opacity-40 relative -z-10">
        
        <div class="absolute z-10 h-full w-full flex justify-center items-center top-0">
            <div>
                <h2 class="text-9xl text-center mb-12">404</h2>
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
    <NavigationTwo />

    <div class="h-screen relative">
        <img src="../../../error_image2.jpg" alt="" class="object-cover w-full h-full opacity-40 relative -z-10">
        
        <div class="absolute z-10 h-full w-full flex justify-center items-center top-0">
            <div>
                <h2 class="text-9xl text-center mb-12">500</h2>
                <p class="text-4xl text-center m-4">Oh no! Something unexpected happend...</p>
                <p class="text-center mb-4 text-emerald-400">We'll look into this and get back to you</p>
                <div class="flex justify-center">
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