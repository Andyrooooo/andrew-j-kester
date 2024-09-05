<script>
    import { onMount } from 'svelte';
    import {workSection} from '../stores.js'

    let onMountMe = 'translate-y-[-400%]'
    let onMountDevelop = 'left-[-100%]'
    let onMountDesign = 'right-[-100%]'
    let onMountAnd = 'right-[-100%]'
    let onMountWork = 'left-[-100%]'
    let onMountResume = 'right-[-100%]'

    onMount(() => {
        setTimeout(() => {
            onMountMe = 'translate-y-0'
            onMountDevelop = 'left-0'
            onMountDesign = 'right-0'
            onMountAnd = 'right-0'
            onMountWork = 'left-0'
            onMountResume = 'right-0'
        }, 200)
    })

    function scrollToWorkSection() {
        workSection.set(true)
    }
</script>


<div class="flex justify-center h-full items-center w-full overflow-x-hidden">
    <div class="">
        <div class="{onMountMe} transition-all duration-1000">
            <div class="flex justify-center my-4 relative">
                <img src="profilePicture.png" class="w-5/12 rounded-full shadow-sm shadow-zinc-900 animate-hover border border-opacity-20 bg-zinc border-white" loading="lazy" alt="Andrew Kesters face">
            </div>
        </div>
        
        <div class="flex gap-4 px-4 justify-center w-full">
            <div class="{onMountDevelop} transition-all duration-700 relative">
                <h1 class="my-4 text-3xl sm:text-4xl text-emerald-400 font-headers">Developer</h1>
                <!-- <p class="text-sm md:text-lg font-light font-headers">Frontend developer with a passion for learning new technologies.</p> -->
            </div>

            <div class="{onMountAnd} transition-all duration-500 relative">
                <h1 class="my-4 text-3xl sm:text-4xl text-emerald-400 font-headers">&</h1>
            </div>

            <div class=" {onMountDesign} transition-all duration-700 relative">
                <h1 class="my-4 text-3xl sm:text-4xl text-emerald-400 font-headers">Designer</h1>
                <!-- <p class="text-sm md:text-lg font-light font-headers">I have a great eye for creating visually attractive UI</p> -->
            </div>
        </div>

        <div class="w-full flex gap-4 justify-center px-4 mt-4">
            <div class="{onMountWork} relative transition-all duration-1000">
                <button on:click={scrollToWorkSection} class="border border-opacity-20 bg-zinc-900 bg-opacity-60 backdrop-blur-sm border-white text-white px-4 h-12 rounded-full hover:bg-emerald-400 transition-all duration-500">See My Work</button>
            </div>

            <div class="{onMountResume} relative transition-all duration-1000">
                <a href="MyResume2024.pdf" target="_blank">
                    <button class="border border-opacity-20 bg-zinc-900 bg-opacity-60 backdrop-blur-sm border-white text-white px-4 h-12 rounded-full hover:bg-emerald-400 transition-all duration-500">My Resume</button>
                </a>
            </div>
        </div>
    </div>
</div>

<!-- Hello, I'm a Developer at Utah Valley University. I have Great determination to get any job done and ensure I learn from every experience to come out better than before. I have a strong understanding of CSS, HTML, and JavaScript with an great understanding of various Web tools, libraries, and frameworks. So, check out my page, stay a while, and see what I have accomplished! -->