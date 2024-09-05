<script>
    import { onMount } from 'svelte';
    import {workSection} from '../stores.js'

    let onMountMe = 'translate-y-[-400%]'
    let onMountDevelop = 'left-[-400%]'
    let onMountDesign = 'right-[-400%]'
    let onMountAnd = 'right-[-400%]'
    let onMountWork = 'left-[-400%]'
    let onMountResume = 'right-[-400%]'
    let onMountWebDec = 'left-[-100%]'

    onMount(() => {
        setTimeout(() => {
            onMountMe = 'translate-y-0'
            onMountDevelop = 'left-0'
            onMountDesign = 'right-0'
            onMountAnd = 'right-0'
            onMountWork = 'left-0'
            onMountResume = 'right-0'
            onMountWebDec = 'left-8'
        }, 200)
    })

    function scrollToWorkSection() {
        workSection.set(true)
    }
</script>


<div class="flex justify-center h-full items-center w-full overflow-x-hidden relative">
    <div class="">
        <div class="{onMountMe} transition-all duration-1000">
            <div class="flex justify-center my-4 relative">
                <img 
                src="profilePicture2.png" 
                class="w-5/12 rounded-full animate-hover border border-opacity-20 border-white bg-emerald-400" 
                loading="lazy" 
                alt="Andrew Kesters face">
            </div>
        </div>
        
        <div class="flex gap-4 px-4 justify-center w-full">
            <div class="{onMountDevelop} transition-all duration-700 relative">
                <h1 class="my-4 text-xl sm:text-4xl text-emerald-400 font-test10">Developer</h1>
                <!-- <p class="text-sm md:text-lg font-light font-headers">Frontend developer with a passion for learning new technologies.</p> -->
            </div>

            <div class="{onMountAnd} transition-all duration-500 relative">
                <h1 class="my-4 text-xl sm:text-4xl text-emerald-400 font-test10">&</h1>
            </div>

            <div class=" {onMountDesign} transition-all duration-700 relative">
                <h1 class="my-4 text-xl sm:text-4xl text-emerald-400 font-test10">Designer</h1>
                <!-- <p class="text-sm md:text-lg font-light font-headers">I have a great eye for creating visually attractive UI</p> -->
            </div>
        </div>

        <div class="w-full flex gap-4 justify-center px-4 mt-4">
            <div class="{onMountWork} relative transition-all duration-1000 flex items-center gap-2">
                <button on:click={scrollToWorkSection} class="border border-opacity-20 bg-zinc-900 bg-opacity-60 backdrop-blur-sm border-white text-white px-4 h-12 rounded-full hover:bg-emerald-400 transition-all duration-500 font-test16">See My Work
                    <a class="fa-solid fa-code ml-1"></a>
                </button>
            </div>

            <div class="{onMountResume} relative transition-all duration-1000">
                <a href="Andrew_Kester_Resume.pdf" target="_blank">
                    <button class="border border-opacity-20 bg-zinc-900 bg-opacity-60 backdrop-blur-sm border-white text-white px-4 h-12 rounded-full hover:bg-emerald-400 transition-all duration-500 font-test16">My Resume
                        <a class="fa-solid fa-image-portrait ml-1"></a>
                    </button>
                </a>
            </div>
        </div>
    </div>

    <div class="absolute left-8 bottom-8">
        <img src="../../../portfolio_logo_lg.png" 
        alt="Andrew's first and last inital" 
        class="border p-1.5 rounded-lg shadow-md border-emerald-400 animate-pulse w-8 h-8 shadow-2xl shadow-loadShad shadow-[0_0_20px_6px_rgba(52,211,153,0.25)]"
        loading="lazy"
        >
    </div>

    <div class="absolute right-8 bottom-8 drop-shadow-[0_0_15px_rgba(52,211,153,0.9)]">
        <!-- <i class="shadow-md animate-pulse text-xl fa-solid fa-tree text-emerald-400 translate-x-[50px]"></i>-->
        <i class="shadow-md animate-pulse text-sm fa-solid fa-compass text-emerald-400 translate-x-[20px] translate-y-[-15px]"></i>
        <i class="shadow-md animate-pulse text-sm fa-solid fa-map text-emerald-400 translate-x-[20px] translate-y-[-15px]"></i> 
        <i class="shadow-md animate-pulse text-sm fa-solid fa-tree text-emerald-400 translate-x-[-8px] "></i>
    </div>

    
</div>

<!-- Hello, I'm a Developer at Utah Valley University. I have Great determination to get any job done and ensure I learn from every experience to come out better than before. I have a strong understanding of CSS, HTML, and JavaScript with an great understanding of various Web tools, libraries, and frameworks. So, check out my page, stay a while, and see what I have accomplished! -->