<!-- <script>
    import NavigationTwo from '../../../navigation/navigationTwo.svelte'
    import FooterTwo from '../../../footer/footerTwo.svelte'
    import {workSection} from '../../../stores.js'
    import { goto } from '$app/navigation'
    import { onMount } from 'svelte'

    let moveL = 'translate-x-0'
    let moveR = 'translate-x-0'
    let project

    // variables for the video and images when scrolling
    let scrollAppearCarousel = 'left-full'
    let scrollAppearVideo = 'right-full'
    let videoSection
    let videoElement
    let carouselSection

    // header for when the page loads
    let onMountButton = 'bottom-[-20%]'
    let onMountHeaderDetails = 'top-[-100%]'
    let onMountGoBack = 'left-[-20%]'

    // variables for the project overview, goals, technologies, and urls
    let scrollPOver = 'left-[-100%]'
    let pOver
    let scrollPGoals = 'right-[-110%]'
    let pGoals
    let tech = 'left-[-100%]'
    let technologies
    let urls = 'right-[-120%]'
    let urlButtons
    

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

    let images = [
        {
            imageSrc: "../../../uvusa_images/filter.jpg",
            description: "Landing Page"
        },
        {
            imageSrc: "../../../uvusa_images/import.jpg",
            description: "Landing Page"
        },
        {
            imageSrc: "../../../uvusa_images/add.jpg",
            description: "Landing Page"
        },
        {
            imageSrc: "../../../uvusa_images/editDelete.jpg",
            description: "Landing Page"
        },
    ]

  function goToProject() {
    project.scrollIntoView({behavior: 'smooth'})
  }

  let isExpanded = false;

  function toggleExpansion() {
    isExpanded = !isExpanded;
  }

  function goBack() {
    workSection.set(true)
    goto('/')
  }

    onMount(() => {
        setTimeout(() => {
            onMountButton = 'bottom-4'
            onMountHeaderDetails = 'top-0'
            onMountGoBack = 'left-0'
        }, 200)

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target === pOver) {
                        scrollPOver = 'left-0'
                    } else if (entry.target === pGoals) {
                        scrollPGoals = 'right-0'
                    } else if (entry.target === technologies) {
                        tech = 'left-0'
                    } else if (entry.target === urlButtons) {
                        urls = 'right-0'
                    }
                }

                if (entry.isIntersecting) {
                    if (entry.target === videoSection) {
                    scrollAppearVideo = 'right-0'
                    videoElement.play()
                    } else if (entry.target === carouselSection) {
                    scrollAppearCarousel = 'left-0'
                    } 
                }
            })
        }, {
            rootMargin: '0px',
            threshold: 0.1 // Adjust this value based on when you want the animation to trigger
        })

        observer.observe(pOver)
        observer.observe(pGoals)
        observer.observe(technologies)
        observer.observe(urlButtons)

        observer.observe(videoSection)
        observer.observe(carouselSection)
        observer.observe(videoSection)

        return () => {
            observer.disconnect()
        }
    })
</script> -->


<!-- navigation -->
<!-- <NavigationTwo /> -->


<!-- header -->
<!-- <div class="h-screen"> -->
    <!-- background logo -->
    <!-- <div class="absolute -z-10 h-full w-full flex justify-center items-center">
        <div class="">
            <img src="../../../uvusa_images/uvu_logo.png" alt="Utah Valley University watermark" class="opacity-20 h-80 w-80">
        </div>
    </div> -->

    <!-- back to main page button -->
    <!-- <div class="absolute top-20 w-full px-4 flex justify-start {onMountGoBack} transition-all duration-1000 ">
        <button class="py-2 pl-2 text-white hover:text-emerald-400 transition-all duration-300" 
        on:mouseover={moveChevronL} 
        on:mouseleave={moveChevronL} 
        on:focus={moveChevronL}
        on:click={goBack}
        >
            <i class="fa-solid fa-chevron-left mr-2 {moveL} transition-all duration-300"></i>
            Back to Work
        </button>
    </div>

    <div class=" h-full flex justify-center items-center">
        <div class="relative {onMountHeaderDetails} transition-all duration-1000">
            <p class="mb-4 italic text-center">2024</p>
            <h1 class="mb-4 text-4xl text-center">UVU Scheduling App</h1>
            <p class="mb-4 italic text-center">Web App</p>

            <div class="px-4 md:px-32 lg:px-64 xl:px-96 pt-12 text-xl">
                <p class="">The UVU Scheduling App is a pre-scheduling tool which allows the Utah Valley University instructors to plan, schedule, change, and distribute upcoming courses for a more streamlined process.</p>
            </div>
        </div>
    </div> -->

    <!-- overview scroll button -->
    <!-- <div class="absolute {onMountButton} flex justify-center w-full transition-all duration-1000">
        <div>
            <button class="py-2 px-3 hover:bg-emerald-400 border border-white border-opacity-20 bg-opacity-60 bg-zinc-900 rounded-full text-white transition-all duration-300 transition-all duration-300 hover:translate-y-[0.5rem] animate-bounce"
            on:click={goToProject}
            >
            <i class="fa-solid fa-chevron-down transition-all duration-300"></i>
            </button>
        </div>
    </div>

</div> -->


<!-- overview, goals, technologies -->
<!-- <div bind:this={project}></div>
<div class="mt-12 px-4" >
    <div class=" overflow-x-hidden">

        <div class="border-b border-white border-opacity-10 pb-8">
            <div class="lg:flex lg:justify-between gap-4 relative {scrollPOver} transition-all duration-1000">
                <h2 class="text-emerald-400 block basis-2/12 mb-2 lg:mb-0 text-lg">Project Overview</h2>
                <div class="basis-10/12">
                    {#if !isExpanded}
                        <p class="">The UVU Scheduling App is a rebuild of the current scheduling software used by the UVU instructors. The current software has been in dire need of an upgrade to allow for a better experience for the instructors. The result has left many 
                            instructors to rely on alternatives like Microsoft Excel and Google Sheets which are then distributed out in the form of spreadsheets... <button class="text-emerald-600 hover:text-emerald-400 transition-all duration-300" on:click={toggleExpansion}>Read More</button>
                        </p>
                        {:else}
                        <p class="">The UVU Scheduling App is a rebuild of the current scheduling software used by the UVU instructors. The current software has been in dire need of an upgrade to allow for a better experience for the instructors. The result has left many 
                            instructors to rely on alternatives like Microsoft Excel and Google Sheets which are then distributed out in the form of spreadsheets. Those spreadsheets are created by the "scheduler" who is given schedules on a "requested basis" by the instructors 
                            via email or in person request. This method is frought with issues that cause many headaches and conflicts. Once I met with the instructor in charge of the scheduling, the design team and I came up with curated solutions that would tackle the needs and 
                            wants of the instructors while also including features and components that go beyond their expectations. <button class="text-emerald-600 hover:text-emerald-400 pl-1 transition-all duration-300" on:click={toggleExpansion}>Read Less</button>
                        </p>
                    {/if}
                </div>
            </div>
        </div>
        <div bind:this={pOver}></div>


        <div class="border-b border-white border-opacity-10 py-8 ">
            <div class="lg:flex lg:justify-between gap-4 relative {scrollPGoals} transition-all duration-1000">
                <h2 class="text-emerald-400 block basis-2/12 mb-2 lg:mb-0 text-lg">Project Goals</h2>
                <div class="basis-10/12">
                    <ul class="list-disc pl-4">
                        <li class="mb-1">Develop a new app and system allowing instructors to schedule and maintain their classes</li>
                        <li class="mb-1">Achieve a design that is visually straightforward and easy to navigate</li>
                        <li class="mb-1">Create filtering options for ease of use </li>
                        <li class="mb-1">Create a component to allow CSV imports for pre-scheduled classes</li>
                        <li class="mb-1">Allow instructors the ability to edit, remove, and/or add existing data into the schedule builds</li>
                        <li class="mb-1">Completed schedules should be able to be distributed by digital or physical copies</li>
                    </ul>
                </div>
            </div>
        </div>
        <div  bind:this={pGoals}></div>
        
        <div class="border-b border-white border-opacity-10 py-8" >
            <div class="lg:flex lg:justify-between gap-4 relative {tech} transition-all duration-1000">
                <h2 class="text-emerald-400 block basis-2/12 mb-2 lg:mb-0 text-lg">Technologies</h2>
                <div class="basis-10/12">
                    <p>Sveltekit</p> 
                    <p>TypeScript</p> 
                    <p>Node</p> 
                    <p>Skeleton UI</p> 
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
        <div bind:this={technologies}></div> -->


        <!-- website link buttons -->
        <!-- <div class="flex justify-center lg:justify-start mt-4 gap-4 relative {urls} transition-all duration-1000">
            <a 
            href="https://github.com/Andyrooooo/test_uvu_app"
            target="_blank"
            class="py-2 px-6 border border-white border-opacity-20 bg-opacity-60 rounded-full text-white bg-zinc-900 transition-all duration-300 cursor-pointer hover:bg-emerald-400">
                View Source Code
                <i class="fa-brands fa-github t ml-2 transition-all duration-300"></i>
            </a>

            <a 
            on:mouseover={moveChevronR} 
            on:mouseleave={moveChevronR} 
            on:focus={moveChevronR}
            href="https://test-uvu-app.vercel.app/"
            target="_blank"
            class="py-2 px-6 border border-white border-opacity-20 bg-opacity-60 rounded-full text-white bg-zinc-900 transition-all duration-300 cursor-pointer hover:bg-emerald-400">
                Go to App
                <i class="fa-solid fa-chevron-right ml-2 transition-all duration-300 {moveR}"></i>
            </a>
        </div>
        <div bind:this={urlButtons}></div>

    </div>
    
</div> -->


<!-- mockups -->
<!-- <div class="my-24" >

    <div class="relative overflow-x-hidden">
        <img src="../../../uvusa_images/uvu_background2.svg" alt="" class="w-full">

        <div class="absolute z-10 flex w-full top-1/2" bind:this={videoSection}></div>

        <div class="absolute z-10 flex justify-center items-center h-full w-full top-0 {scrollAppearVideo}  transition-all duration-1000 " >
            <div class="basis-full px-4 max-w-[1300px] ">
                <video class="rounded-lg shadow-md shadow-zinc-700 border border-zinc-400 " loop bind:this={videoElement} >
                    <source src="../../../uvusa_images/uvusaVid2.mp4" type="video/mp4" class="">
                </video>
            </div>
        </div>
    </div>

    <div class="relative w-full h-full flex justify-center items-center overflow-x-hidden" >
        <img src="../../../uvusa_images/uvu_background3.svg" alt="" class="w-full">
        
        <div class="absolute z-10 top-0 flex justify-center items-center h-full w-full {scrollAppearCarousel} transition-all duration-1000 ">
            <div class="max-w-[1268px] snap-x scroll-px-0 snap-mandatory scroll-smooth flex gap-4 overflow-x-scroll mx-4 pb-2">
                {#each images as image (image)}
                    <img src={image.imageSrc} loading="lazy" class="snap-start shrink-0 card" >
                {/each}
            </div>
        </div>

        <div bind:this={carouselSection}></div>
    </div>

</div> -->


<!-- similar works suggestions -->
<!-- <div class="px-4 flex justify-center items-center border-b border-white border-opacity-10 pb-24">
    <div>
        <h1 class="mb-8 text-4xl text-center">Similar Works</h1>

        <div class="flex flex-wrap text-center justify-center gap-4">
            <button class="md:basis-5/12 p-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 border-white rounded-md hover:hover:translate-y-[-0.5rem] transition-all duration-300 hover:border-emerald-400">
                <a href="../caseStudies/fssa">
                    <div class="flex justify-center">
                        <img src="../../../fssa_link.svg" alt="javascript logo with words Time Tracker App" class="rounded-md">
                    </div>
                    <p class="mt-2 mb-1 italic">2024</p>
                    <p class="text-2xl font-bold text-emerald-400">Fullstack Svelte App</p>
                    <p class="mt-1 mb-2 italic">Web App</p>
                    <p class="">Here is where we will put the quick description</p>
                </a>
            </button>

            <button class="md:basis-5/12 p-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 border-white rounded-md hover:hover:translate-y-[-0.5rem] transition-all duration-300 hover:border-emerald-400">
                <a href="../caseStudies/sta">
                    <div class="flex justify-center">
                        <img src="../../../sta_link2.svg" alt="Svelte logo with words Svelte Tutorial App" class="rounded-md">
                    </div>
                    <p class="mt-2 mb-1 italic">2023</p>
                    <p class="text-2xl font-bold text-emerald-400">Svelte Tutorial App</p>
                    <p class="mt-1 mb-2 italic">Web App</p>
                    <p class="">The Svelte Tutorial App is a product of the svelte.dev tutorial. It uses many of the features and methods engrained into the power that is Svelte. The app will take you to a login page using OAuth authentication...</p>
                </a>
            </button>
        </div>

        <div class="mt-4 flex justify-center">
            <button class="py-2 pl-2 hover:text-emerald-400 text-white transition-all duration-300" 
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