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
    let scrollAppearMobileVideo = 'left-full'
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
        {imageSrc: "../../../fssa_images/login.jpg",},
        {imageSrc: "../../../fssa_images/home.jpg",},
        {imageSrc: "../../../fssa_images/food.jpg",},
        {imageSrc: "../../../fssa_images/listings.jpg",},
        {imageSrc: "../../../fssa_images/listing_closer_look.jpg",},
        {imageSrc: "../../../fssa_images/listing_closer_look2.jpg",},
        {imageSrc: "../../../fssa_images/reviews.jpg",},
        {imageSrc: "../../../fssa_images/write_review.jpg",},
        {imageSrc: "../../../fssa_images/user_profile.jpg",},
        {imageSrc: "../../../fssa_images/reservations.jpg",},
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
                    scrollAppearMobileVideo = 'left-0'
                    videoElement.play()
                    } else if (entry.target === carouselSection) {
                    scrollAppearCarousel = 'left-0'
                    } 
                }
            })
        }, {
            rootMargin: '0px',
            // threshold: 0.1 // Adjust this value based on when you want the animation to trigger
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



<!-- <NavigationTwo /> -->

<!-- header -->
<!-- <div class="h-screen"> -->

    <!-- background logo -->
    <!-- <div class="absolute -z-10 h-full w-full flex justify-center items-center">
        <div class="">
            <img src="../../../fssa_images/fssa_logo4.svg" alt="mongoDB logo" class="opacity-20 h-80 w-80">
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

    

    <div class="h-full flex justify-center items-center">
        <div class="relative {onMountHeaderDetails} transition-all duration-1000">
            <p class="mb-4 italic text-center">2024</p>
            <h1 class="mb-4 text-4xl text-center">Fullstack Svelte App</h1>
            <p class="mb-4 italic text-center">Web App</p>

            <div class="px-4 md:px-32 lg:px-64 xl:px-96 pt-12 text-xl">
                <p class="">This will be the app description</p>
            </div>
        </div>
    </div>

     overview scroll button
    <div class="absolute {onMountButton} flex justify-center w-full transition-all duration-1000">
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
    <div class="overflow-x-hidden">
        

        <div class="border-b border-white border-opacity-10 pb-8">
            <div class="lg:flex lg:justify-between gap-4 relative {scrollPOver} transition-all duration-1000">
                <h2 class="text-emerald-400 block basis-2/12 mb-2 lg:mb-0 text-lg">Project Overview</h2>
                <div class="basis-10/12">
                    {#if !isExpanded}
                        <p class="mb-4">As this project is still in progress, the models displayed may change and display different content and features. The fullstack svelte app builds...
                        <button class="text-emerald-600 hover:text-emerald-400 pl-1" on:click={toggleExpansion}>Read More</button>
                        </p>
                    {:else}
                        <p class="mb-2">As this project is still in progress, the models displayed may change and display different content and features.</p>
                        <p class="mb-4">The fullstack svelte app builds upon a previous project the <a class="important">Svelte Tutorial App</a>. Currently, the app utilizes a MongoDB database cluster to store user data and project information with Node. The app also uses OAuth authentication to allow the user to login and access their data however, for the time being you may only login with a GitHub account. The app also uses the SvelteKit framework to create a smooth and responsive user interface.
                            <button class="text-emerald-600 hover:text-emerald-400 pl-1" on:click={toggleExpansion}>Read Less</button>
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
                        <li class="mb-1">D</li>
                        <li class="mb-1">A</li>
                        <li class="mb-1">C</li>
                        <li class="mb-1">Cs</li>
                        <li class="mb-1">Als</li>
                        <li class="mb-1">C</li>
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
                    <p>node</p> 
                    <p>OAuth</p> 
                    <p>MongoDB</p> 
                </div>
            </div>
        </div>
        <div bind:this={technologies}></div> -->
    

        <!-- website link buttons -->
        <!-- <div class="flex justify-center lg:justify-start mt-4 gap-4 relative {urls} transition-all duration-1000">
            <a 
            href="https://github.com/Andyrooooo/fullstack_svelte_app"
            target="_blank"
            class="py-2 px-6 border border-white border-opacity-20 bg-opacity-60 rounded-full text-white bg-zinc-900 transition-all duration-300 cursor-pointer hover:bg-emerald-400"
            >
                View Source Code
                <i class="fa-brands fa-github t ml-2 transition-all duration-300"></i>
            </a>
    
            <a 
            on:mouseover={moveChevronR} 
            on:mouseleave={moveChevronR} 
            on:focus={moveChevronR}
            href="https://fullstack-svelte-app.vercel.app/"
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
<!-- <div class="my-24" > -->
    <!-- {#each images as image (image)}
            <div class="w-6/12 sm:w-5/12 md:w-4/12 lg:w-3/12 xl:w-2/12 snap-start shrink-0">
        <div class="w-6/12 snap-start shrink-0">
            <img src={image.imageSrc}  alt="Svelte Tutorial App Prototypes" loading="lazy">
            <p class="text-center p-4 text-xs sm:text-sm md:text-md font-bold">{@html image.description}</p>
        </div>
    {/each} -->
    
    <!-- videos -->
<!--     <div class="relative overflow-x-hidden">
        <img src="../../../fssa_images/background.jpg" alt="" class="w-full">

        <div class="absolute z-10 flex w-full top-1/2" bind:this={videoSection}></div>
        
        <div class="absolute z-10 flex justify-center items-center h-full w-full top-0 {scrollAppearVideo}  transition-all duration-1000 ">
            <div class="px-4 max-w-[1200px] translate-y-[-50px] sm:translate-y-[-65px] md:translate-y-[-80px] lg:translate-y-[-95px] xl:translate-y-[-110px]">
                <video class="rounded-lg shadow-md shadow-zinc-700 border border-zinc-400 " loop bind:this={videoElement}>
                    <source src="../../../fssa_images/fssa_video_desk.mp4" type="video/mp4" class="">
                </video>
            </div>
        </div>

        <div class="absolute z-20 flex items-center justify-center h-full w-full top-0 {scrollAppearMobileVideo} transition-all duration-1000">
            <div class="px-4 w-full max-w-[1200px] flex justify-end" >
                <div class="w-[90px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[210px] translate-y-[50px] sm:translate-y-[65px] md:translate-y-[80px] lg:translate-y-[95px] xl:translate-y-[110px]">
                    <video class="rounded-lg shadow-md shadow-zinc-700 border-4 border-black float-right" autoplay bind:this={videoElement} >
                        <source src="../../../fssa_images/fssa_video_mobile.mp4" type="video/mp4" class="">
                    </video>
                </div>
            </div>
        </div>
    </div> -->

    <!------------------------------------ carousel --------------------------->
<!--     <div class="relative w-full h-full flex justify-center items-center overflow-x-hidden" >
        <img src="../../../fssa_images/background2.svg" alt="" class="w-full">
        
        <div class="absolute z-10 top-0 flex justify-center items-center h-full w-full {scrollAppearCarousel} transition-all duration-1000 ">
            <div class="max-w-[1268px] snap-x scroll-px-0 snap-mandatory scroll-smooth flex gap-4 overflow-x-scroll mx-4 pb-2">
                {#each images as image (image)}
                    <img src={image.imageSrc} loading="lazy" class="snap-start shrink-0 card" >
                {/each}
            </div>
        </div>

        <div bind:this={carouselSection}></div>
    </div>

</div>


<div class="px-4 flex justify-center items-center border-b border-white border-opacity-10 pb-24">
    <div>
        <h1 class="mb-8 text-4xl text-center">Similar Works</h1>

        <div class="flex flex-wrap text-center justify-center gap-4">
            <button class="md:basis-5/12 p-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 border-white rounded-md hover:hover:translate-y-[-0.5rem] transition-all duration-300 hover:border-emerald-500">
                <a href="../caseStudies/uvusa">
                    <div class="flex justify-center">
                        <img src="../../../uvusa_link.svg" alt="React Logo with the words Nonsense Blog App" class="rounded-md">
                    </div>
                    <p class="mt-2 mb-1 italic">2024</p>
                    <p class="text-2xl font-bold text-emerald-400">UVU Scheduling App</p>
                    <p class="mt-1 mb-2 italic">Web App</p> -->
                    <!-- <p class="">The Nonsense Blog App is a application that allows the user to create, edit, and delete blog posts. The user can also search, filter, and get more information from each blog by going to its details page. Th...</p> -->
<!--                     <p class="">The UVU Scheduling App is a pre-scheduling tool which allows the Utah Valley University instructors to plan, schedule, change, and distribute upcoming courses for a more streamlined process.</p>
                </a>
            </button>

            <button class="md:basis-5/12 p-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 border-white rounded-md hover:hover:translate-y-[-0.5rem] transition-all duration-300 hover:border-emerald-500">
                <a href="../caseStudies/sta">
                    <div class="flex justify-center">
                        <img src="../../../sta_link2.svg" alt="Svelte logo with words Svelte Tutorial App" class="rounded-md">
                    </div>
                    <p class="my-2 italic">2023</p>
                    <p class="text-2xl font-bold text-emerald-400">Svelte Tutorial App</p>
                    <p class="mt-1 mb-2 italic">Web App</p>
                    <p class="">The Svelte Tutorial App is a product of the svelte.dev tutorial. It uses many of the features and methods engrained into the power that is Svelte. The app will take you to a login page using OAuth authentication...</p>
                </a>
            </button>
        </div>

        <div class="mt-4 flex justify-center">
            <button class="py-2 pl-2 hover:text-emerald-500 text-white transition-all duration-300 transition-all duration-300" 
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