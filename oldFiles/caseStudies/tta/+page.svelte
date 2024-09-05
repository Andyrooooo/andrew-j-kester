<!-- <script lang="ts">
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

//     let images = [
//         {
//             imageSrc: "../../../tta_images/tta-landing.png",
//             description: "Landing Page"
//         },
//         {
//             imageSrc: "../../../tta_images/tta-start.png",
//             description: "Start Time Entry"
//         },
//         {
//             imageSrc: "../../../tta_images/tta-stop.png",
//             description: "Stop Time Entry"
//         },
//         {
//             imageSrc: "../../../tta_images/tta-diagram.png",
//             description: "App Diagram"
//         },
//         {
//             imageSrc: "../../../tta_images/tta-categories-edit.png",
//             description: "Edit Categories Modal"
//         },
//         {
//             imageSrc: "../../../tta_images/tta-projects-edit.png",
//             description: "Edit Projects Modal"
//         },
//         {
//             imageSrc: "../../../tta_images/tta-entry-edit.png",
//             description: "Edit Entries Modal"
//         },
//         {
//             imageSrc: "../../../tta_images/tta-notes.png",
//             description: "Notes Modal"
//         },
//         {
//             imageSrc: "../../../tta_images/tta-notes-add.png",
//             description: "Adding notation to List"
//         },
//   ]

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
</script> -->

<!-- 

<NavigationTwo />

<div class="{screen} lg:h-screen flex justify-center items-center flex-wrap px-4">

    <div class="absolute top-1/4 -z-10 w-full">
        <div class=" flex justify-center items-center h-full">
            <img src="../../../tta_images/tta_logo.svg" alt="Svelte logo" class="opacity-20">
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
        <p class="mb-4 italic text-center">2023</p>
        <h1 class="mb-4 text-4xl text-center">The Time Tracker App</h1>
        <div class="">
            {#if !isExpanded}
                <p class="mb-4">
                The Time tracker app allows the user to keep track of their billable time. The app can be used for many different projects from freelance work to...
                <button class="text-emerald-500  hover:text-emerald-400 pl-1" on:click={toggleExpansion}>Read More</button>
                </p>
            {:else}
                <p class="mb-2">The Time tracker app allows the user to keep track of their billable time. The app can be used for many different projects from freelance work to school projects, the skies the limit.</p>
                <p class="mb-2">The app has many capabilites, firstly being the time tracker. To create an entry and start the time, you will simply press the "start" button. This will track your entries time, while simultaniously tracking your total time for the day and total time for the week.</p>
                <p class="mb-2">The app also has the ability to create and edit categories and projects. This allows the user to keep track of their time in a more organized manner. The user can also add notes to their entries, and edit them as well.
                    <button class="text-emerald-500  hover:text-emerald-400 pl-1" on:click={toggleExpansion}>Read Less</button>
                </p>
            {/if}
        </div>
        
        <p class="pb-2 border-b border-white border-opacity-20"><a class="important">JavaScript</a>, <a class="important">Node</a></p> -->

        <!-- website link button -->
        <!-- <div class="flex justify-center lg:justify-start mt-4 gap-4">
            <a 
            href="https://github.com/Andyrooooo/trackerApp"
            target="_blank"
            class="py-2 px-6 border border-white border-opacity-20 bg-opacity-60 rounded-full text-white bg-zinc-900 transition-all duration-300 cursor-pointer hover:bg-emerald-500">
                View Source Code
                <i class="fa-brands fa-github t ml-2 transition-all duration-300"></i>
            </a>

            <a 
            on:mouseover={moveChevronR} 
            on:mouseleave={moveChevronR} 
            on:focus={moveChevronR}
            href="https://tracker-app-alpha.vercel.app/"
            target="_blank"
            class="py-2 px-6 border border-white border-opacity-20 bg-opacity-60 rounded-full text-white bg-zinc-900 transition-all duration-300 cursor-pointer hover:bg-emerald-500">
                Go to App
                <i class="fa-solid fa-chevron-right ml-2 transition-all duration-300 {moveR}"></i>
            </a>
        </div>
    </div> -->

    <!-- demo scroll button -->
    <!-- <div class="basis-full flex justify-center mt-4">

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
</div> -->

<!-- <div class="px-4 h-screen snap-x scroll-px-4 snap-mandatory scroll-smooth flex gap-4 overflow-x-auto py-8 items-center" bind:this={mockups}> -->
<!-- body -->
<!-- <div class="mb-12" >
    <div bind:this={mockupsS}></div> -->
        <!-- {#each images as image (image)}
        <div class="w-6/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12 snap-start shrink-0">
            <img src={image.imageSrc} alt="Svelte Tutorial App Prototypes" loading="lazy">
            <p class="text-center p-4 text-xs sm:text-sm md:text-md font-bold">{@html image.description}</p>
        </div>
    {/each} -->
    <!-- <div class="relative">
        <img src="../../../tta_images/tta_background.svg" alt="" class="w-full">
        <img src="../../../tta_images/tta_background2.svg" alt="" class="w-full lg:hidden"> -->
        <!-- <img src="../../../uvusa_images/uvu_background.svg" alt="" class="w-full"> -->
        <!-- <div class="absolute z-10 flex justify-center items-center h-full w-full top-0" >
            <div class="px-4 max-w-[1200px] translate-y-[-50px] sm:translate-y-[-65px] md:translate-y-[-80px] lg:translate-y-[-95px] xl:translate-y-[-110px]" bind:this={mockupsL}>
                <video class="rounded-lg shadow-md shadow-zinc-700 border border-zinc-400" autoplay loop >
                    <source src="../../../tta_images/tta_video_desk.mp4" type="video/mp4" class="">
                </video>
            </div>
        </div>

        <div class="absolute z-20 flex items-center justify-center h-full w-full top-0">
            <div class="px-4 w-full max-w-[1200px] flex justify-end" bind:this={mockupsL}>
                <div class="w-[90px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[210px] translate-y-[50px] sm:translate-y-[65px] md:translate-y-[80px] lg:translate-y-[95px] xl:translate-y-[110px]">
                    <video class="rounded-lg shadow-md shadow-zinc-700 border-4 border-black float-right" autoplay loop >
                        <source src="../../../tta_images/tta_video_mobile.mp4" type="video/mp4" class="">
                    </video>
                </div>
            </div>
        </div>
    </div>
</div> -->



<!-- similar works suggestions -->
<!-- <div class="px-4 flex justify-center items-center border-b border-white border-opacity-10">
    <div>
        <h1 class="mb-8 text-4xl text-center">Similar Works</h1>

        <div class="flex flex-wrap text-center justify-center gap-4">
            <button class="md:basis-5/12 p-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 border-white rounded-md hover:hover:translate-y-[-0.5rem] transition-all duration-300 hover:border-emerald-500">
                <a href="../caseStudies/nba">
                    <div class="flex justify-center">
                        <img src="../../../nba_link.svg" alt="React Logo with the words Nonsense Blog App" class="rounded-md">
                    </div>
                    <p class="my-2 italic">2023</p>
                    <p class="text-2xl font-bold text-emerald-400 my-2">The Nonsense Blog App</p>
                    <p class="">The Nonsense Blog App is a application that allows the user to create, edit, and delete blog posts. The user can also search, filter, and get more information from each blog by going to its details page. Th...</p>
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
</style> -->