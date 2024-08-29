<script>
    import NavigationTwo from '../../../navigation/navigationTwo.svelte'
    import FooterTwo from '../../../footer/footerTwo.svelte'
    import {workSection} from '../../../stores.js'
    import { goto } from '$app/navigation'

    let moveL = 'translate-x-0'
    let moveR = 'translate-x-0'
    let mockupsS
    let mockupsL

    function moveChevronL() {
        if (moveL === 'translate-x-0') {
            moveL = 'translate-x-[-0.5rem]'
        } else {
            moveL = 'translate-x-0'
        }
    }

    function moveChevronR() {
        if (moveR === 'translate-x-0') {
            moveR = 'translate-x-[0.5rem]'
        } else {
            moveR = 'translate-x-0'
        }
    }

    // let images = [
    //     {
    //         imageSrc: "../../../vta_images/vta_home.png",
    //         description: "Landing Page"
    //     },
    //     {
    //         imageSrc: "../../../vta_images/vta-input.png",
    //         description: "Todo Input and Todo Deletion"
    //     },
    //     {
    //         imageSrc: "../../../vta_images/vta-complete.png",
    //         description: "Todo Completion"
    //     },
    // ]

    function goToProjectS() {
    mockupsS.scrollIntoView({behavior: 'smooth'})
  }
  function goToProjectL() {
    mockupsL.scrollIntoView({behavior: 'smooth'})
  }

  let isExpanded = false;
  let screen = 'h-screen'

  function toggleExpansion() {
    isExpanded = !isExpanded;

    if (isExpanded) {
        screen = ''
    } else {
        screen = 'h-screen'
    }
  }

  function goBack() {
    workSection.set(true)
    goto('/')
  }


</script>



<NavigationTwo />
    
<div class="{screen} h-screen flex justify-center items-center flex-wrap px-4">
    
    <div class="absolute top-1/4 -z-10 w-full">
        <div class=" flex justify-center items-center h-full">
            <img src="../../../vta_images/vta_logo.svg" alt="Vue logo" class="opacity-20">
        </div>
    </div>

    <div class="basis-full flex justify-start">
        <button class="mt-16 py-2 pl-2 hover:text-emerald-500 text-white transition-all duration-300" 
        on:mouseover={moveChevronL} 
        on:mouseleave={moveChevronL} 
        on:focus={moveChevronL}
        on:click={goBack}
        >
            <i class="fa-solid fa-chevron-left mr-2 {moveL} transition-all duration-300"></i>
            Back to Work
        </button>
    </div>

    

    <div class="basis-full mt-8">
        <p class="mb-4 italic text-center">2022</p>
        <h1 class="mb-4 text-4xl text-center">Vue Todo App</h1>
        <p class="mb-4">The Vue Tutorial App is a basic app that allows users to add items to the list. This also allows for deletion, editing, and completing of todos within a given list. This app came to fruition in an attempt to learn and understand how Vue works.</p>
        
        <p class="pb-2 border-b border-white border-opacity-20"><a class="important">Vue</a></p>

        <!-- website link button -->
        <div class="flex justify-center lg:justify-start mt-4 gap-4">
            <a 
            href="https://github.com/Andyrooooo/Basic-Vue-App"
            target="_blank"
            class="py-2 px-6 border border-white border-opacity-20 bg-opacity-60 rounded-full text-white bg-zinc-900 transition-all duration-300 cursor-pointer hover:bg-emerald-500">
                View Source Code
                <i class="fa-brands fa-github t ml-2 transition-all duration-300"></i>
            </a>

            <a 
            on:mouseover={moveChevronR} 
            on:mouseleave={moveChevronR} 
            on:focus={moveChevronR}
            href="https://basic-vue-app-dgm3780.netlify.app/"
            target="_blank"
            class="py-2 px-6 border border-white border-opacity-20 bg-opacity-60 rounded-full text-white bg-zinc-900 transition-all duration-300 cursor-pointer hover:bg-emerald-500">
                Go to App
                <i class="fa-solid fa-chevron-right ml-2 transition-all duration-300 {moveR}"></i>
            </a>
        </div>
    </div>

    <!-- demo scroll button -->
    <div class="basis-full flex justify-center mt-4">

        <button class="py-2 px-3 hover:bg-emerald-500 border border-white border-opacity-20 bg-opacity-60 bg-zinc-900 rounded-full text-white transition-all duration-300 transition-all duration-300 hover:translate-y-[0.5rem] md:hidden"
        on:click={goToProjectS}
        >
        <i class="fa-solid fa-chevron-down transition-all duration-300"></i>
        </button>

        <button class="py-2 px-3 hover:bg-emerald-500 border border-white border-opacity-20 bg-opacity-60 bg-zinc-900 rounded-full text-white transition-all duration-300 transition-all duration-300 hover:translate-y-[0.5rem] hidden md:block"
        on:click={goToProjectL}
        >
        <i class="fa-solid fa-chevron-down transition-all duration-300"></i>
        </button>

    </div>
</div>

<!-- <div class="px-4 h-screen snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto py-8 items-center lg:justify-center" bind:this={mockups}> -->
  <!-- body -->
<div class="mb-12" >
    <div bind:this={mockupsS}></div>
    <!-- {#each images as image (image)}
        <div class="w-6/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12 snap-start shrink-0">
            <img src={image.imageSrc} alt="Svelte Tutorial App Prototypes" loading="lazy">
            <p class="text-center p-4 text-xs sm:text-sm md:text-md font-bold">{@html image.description}</p>
        </div>
    {/each} -->

    <div class="relative">
        <img src="../../../vta_images/vta_background.svg" alt="" class="w-full">
        <img src="../../../vta_images/vta_background2.svg" alt="" class="w-full lg:hidden">
        <!-- <img src="../../../uvusa_images/uvu_background.svg" alt="" class="w-full"> -->
        <div class="absolute z-10 flex justify-center items-center h-full w-full top-0" >
            <div class="px-4 max-w-[1200px] translate-y-[-50px] sm:translate-y-[-65px] md:translate-y-[-80px] lg:translate-y-[-95px] xl:translate-y-[-110px]" bind:this={mockupsL}>
                <video class="rounded-lg shadow-md shadow-zinc-700 border border-zinc-400 " autoplay loop >
                    <source src="../../../vta_images/vta_video_desk.mp4" type="video/mp4" class="">
                </video>
            </div>
        </div>

        <div class="absolute z-20 flex items-center justify-center h-full w-full top-0">
            <div class="px-4 w-full max-w-[1200px] flex justify-end" bind:this={mockupsL}>
                <div class="w-[90px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[210px] translate-y-[50px] sm:translate-y-[65px] md:translate-y-[80px] lg:translate-y-[95px] xl:translate-y-[110px]">
                    <video class="rounded-lg shadow-md shadow-zinc-700 border-4 border-black float-right" autoplay loop >
                        <source src="../../../vta_images/vta_video_mobile.mp4" type="video/mp4" class="">
                    </video>
                </div>
            </div>
        </div>
    </div>
</div>



<!-- similar works suggestions -->
<div class="px-4 flex justify-center items-center border-b border-white border-opacity-10">
    <div>
        <h1 class="mb-8 text-4xl text-center">Similar Works</h1>

        <div class="flex flex-wrap text-center justify-center gap-4">
            <button class="md:basis-5/12 p-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 border-white rounded-md hover:hover:translate-y-[-0.5rem] transition-all duration-300 hover:border-emerald-500">
                <a href="../caseStudies/tta">
                    <div class="flex justify-center">
                        <img src="../../../tta_link.svg" alt="javascript logo with words Time Tracker App" class="rounded-md">
                    </div>
                    <p class="my-2 italic">2023</p>
                    <p class="text-2xl font-bold text-emerald-400 my-2">The Time Tracker App</p>
                    <p class="">The Time tracker app allows the user to keep track of their billable time. The app can be used for many different projects from freelance work to school projects, the skies the limit. The app has many capabilites...</p>
                </a>
            </button>

            <button class="md:basis-5/12 p-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 border-white rounded-md hover:hover:translate-y-[-0.5rem] transition-all duration-300 hover:border-emerald-500">
                <a href="../caseStudies/sta">
                    <div class="flex justify-center">
                        <img src="../../../sta_link2.svg" alt="Svelte logo with words Svelte Tutorial App" class="rounded-md">
                    </div>
                    <p class="my-2 italic">2023</p>
                    <p class="text-2xl font-bold text-emerald-400 my-2">Svelte Tutorial App</p>
                    <p class="">The Svelte Tutorial App is a product of the svelte.dev tutorial. It uses many of the features and methods engrained into the power that is Svelte. The app will take you to a login page using OAuth authentication, ...</p>
                </a>
            </button>
        </div>

        <div class="mt-4 mb-12 flex justify-center">
            <button class="py-2 pl-2 hover:text-emerald-500 text-white transition-all duration-300" 
            on:mouseover={moveChevronL} 
            on:mouseleave={moveChevronL} 
            on:focus={moveChevronL}
            on:click={goBack}
            >
                <i class="fa-solid fa-chevron-left mr-2 {moveL} transition-all duration-300"></i>
                Back to Work
            </button>
        </div>
    </div>
</div>

<FooterTwo />

<style>
    .important {
        color: rgb(16 185 129);
    }
    .shadow {
        filter: drop-shadow(0px 0px 50px rgb(255, 62, 0));
    }
</style>