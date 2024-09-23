<script lang="ts">
    import NavigationTwo from '../../navigation/navigationTwo.svelte'
    import FooterTwo from '../../footer/footerTwo.svelte'
    import {workSection} from '../../stores.js'
    import { goto } from '$app/navigation'
    import { onMount } from 'svelte'
    import {works} from '../works.js'

    let isLoading = true

    export let data
    let currentPageData = data.link
    let playTheVideo
    let playBut = ''
    let overviewLimit = 142
    let goalsLimit = 142
    let selectedWorks = []


    $: {
        if (currentPageData !== data.link) {
            currentPageData = data.link
            window.location.reload()
        }
    }

    let moveL = 'translate-x-0'
    let moveR = 'translate-x-0'
    let project

    // variables for the video and images when scrolling
    let scrollAppearCarousel = 'left-full'
    let scrollAppearVideo = 'right-full'
    let scrollAppearMobileVideo = 'left-full'
    let videoSection
    let videoElement
    let mobileVideoElement
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
    let scrollProjDesc = 'right-[-100%]'
    let pDesc
    

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

  function getRandomWorks() {
    let filteredWorks = works.filter(work => work.name !== currentPageData?.link)

    // Shuffle the filtered works array
    for (let i = filteredWorks.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filteredWorks[i], filteredWorks[j]] = [filteredWorks[j], filteredWorks[i]];
        }

    // Select the first two works from the shuffled array
    selectedWorks = filteredWorks.slice(0, 2);
  }

    onMount(() => {

        setTimeout(() => {
            isLoading = false
        }, 800)

        setTimeout(() => {
            onMountButton = 'bottom-4'
            onMountHeaderDetails = 'top-0'
            onMountGoBack = 'left-0'

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
                        } else if (entry.target === pDesc) {
                            scrollProjDesc = 'right-0'
                        }
                    }

                    if (entry.isIntersecting) {
                        if (entry.target === videoSection) {
                        scrollAppearVideo = 'right-0'
                        scrollAppearMobileVideo = 'left-0'
                        videoElement.play()
                            if (mobileVideoElement) {
                                mobileVideoElement.play()
                            }
                        } else if (entry.target === carouselSection) {
                        scrollAppearCarousel = 'left-0'
                        } 
                        // if (entry.target === carouselSection) {
                        // scrollAppearCarousel = 'left-0'
                        // } 
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
            observer.observe(pDesc)

            observer.observe(videoSection)
            observer.observe(carouselSection)

            getRandomWorks()

            return () => {
                observer.disconnect()
            }
        }, 900)
    })

    function changeLimit() {
        overviewLimit = overviewLimit === 142 ? currentPageData.projOver.length : 142;
    }

    function changeGoalsLimit() {
        goalsLimit = goalsLimit === 142 ? currentPageData.projGoals.length : 142;
    }

    function playVideo() {
        if (playTheVideo) {
            playTheVideo.play()
            playBut = 'hidden'
        }
    }
</script>


{#if isLoading}
    <div class="flex justify-center items-center h-screen shadow-lg shadow-emerald-400">
        <img src="../../../portfolio_logo_lg.png" 
        alt="Andrew's first and last inital" 
        class="border p-2 rounded-md shadow-md border-emerald-400 animate-pulse w-20 h-20 shadow-loadShad shadow-[0_0_60px_10px_rgba(52,211,153,0.25)]"
        loading="lazy"
        >
    </div>
{:else}
    <!-- navigation -->
    <NavigationTwo />


    <!---------------------------------------- header ------------------------------------>
    <div class="h-screen font-test16">
        <!-- background logo -->
        <div class="absolute -z-10 h-full w-full flex justify-center items-center">
            <div class="">
                <img src={currentPageData?.logoImage} 
                alt="Background Logo for the case study" 
                class="opacity-20 h-80 w-80"
                loading="lazy"
                >
            </div>
        </div>


        <!-- back to main page button -->
        <div class="absolute top-20 w-full px-4 flex justify-start {onMountGoBack} transition-all duration-1000 ">
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
                <p class="mb-4 italic text-center"><a class="mr-1">{currentPageData?.month}</a><a>{currentPageData?.year}</a></p>
                <h1 class="mb-4 text-4xl text-center text-emerald-400">{currentPageData?.name}</h1>
                <p class="mb-4 italic text-center">{currentPageData?.type}</p>

                <div class="text-xl xs:text-2xl mt-12 mx-4 text-center">
                    <p class="">{@html currentPageData?.quickDesc}</p>
                </div>
            </div>
        </div>

        <!-- overview scroll button -->
        <div class="absolute {onMountButton} flex justify-center w-full transition-all duration-1000">
            <div>
                <button class="py-2 px-3 hover:bg-emerald-400 border border-white border-opacity-20 bg-opacity-60 bg-zinc-900 rounded-full text-white transition-all duration-300 transition-all duration-300 hover:translate-y-[0.5rem] animate-bounce"
                on:click={goToProject}
                >
                <i class="fa-solid fa-chevron-down transition-all duration-300"></i>
                </button>
            </div>
        </div>

    </div>


    <!------------------------------------------ overview, goals, technologies --------------------------------->
    <div bind:this={project}></div>
    <div class="mt-12 px-4 font-test16" >
        <div class=" overflow-x-hidden">

            <!-- project description -->
            <div class="border-b border-white border-opacity-5 text-xl pb-8 relative {scrollProjDesc} transition-all duration-1000">
                <p class="">{@html currentPageData?.projDesc}</p>
            </div>
            <div bind:this={pDesc}></div>


            
            <!-- project overview -->
            <div class="border-b border-white border-opacity-5 py-8">
                <div class="lg:flex lg:justify-between gap-4 relative {scrollPOver} transition-all duration-1000">
                    <h2 class="text-emerald-400 block basis-2/12 mb-2 lg:mb-0 text-lg">Project Overview</h2>
                    <div class="basis-10/12">
                        {#if currentPageData?.projOver.length < 142 }
                            {@html currentPageData?.projOver}

                        {:else if currentPageData?.projOver.length >= 142 }
                            {@html currentPageData?.projOver.slice(0, overviewLimit) + (overviewLimit === 142 ? '...' : '')}
                            
                            <button class="text-emerald-600 hover:text-emerald-400 transition-all duration-300" on:click={changeLimit}>
                                {overviewLimit === 142 ? 'Read More' : 'Read Less'}
                            </button>
                        {/if}
                    </div>
                </div>
            </div>
            <div bind:this={pOver}></div>

            
            <!-- project goals -->
            <div class="border-b border-white border-opacity-5 py-8 ">
                <div bind:this={pGoals}></div>
                <div class="lg:flex lg:justify-between gap-4 relative {scrollPGoals} transition-all duration-1000">
                    <h2 class="text-emerald-400 block basis-2/12 mb-2 lg:mb-0 text-lg">Project Goals</h2>
                    <div class="basis-10/12">
                        {@html currentPageData?.projGoals.slice(0, goalsLimit) + (goalsLimit === 142 ? '...' : '')}
                        <button on:click={changeGoalsLimit} class="text-emerald-600 hover:text-emerald-400 transition-all duration-300 translate-y-[-0.5rem]">{goalsLimit === 142 ? 'Read More' : 'Read Less'}</button>
                    </div>
                </div>
            </div>
            

            
            <!-- project technologies -->
            <div bind:this={technologies}></div>
            <div class="border-b border-white border-opacity-5 py-8" >
                <div class="lg:flex lg:justify-between gap-4 relative {tech} transition-all duration-1000">
                    <h2 class="text-emerald-400 block basis-2/12 mb-2 lg:mb-0 text-lg">Technologies</h2>
                    <div class="basis-10/12">{@html currentPageData?.projTech}</div>
                </div>
            </div>


            <!-- website link buttons -->
            <div class="flex justify-center lg:justify-start mt-4 gap-4 relative {urls} transition-all duration-1000">
                <a 
                href={currentPageData?.projSrcCode}
                target="_blank"
                class="py-2 px-6 border border-white border-opacity-20 bg-opacity-60 rounded-full text-white bg-zinc-900 transition-all duration-300 cursor-pointer hover:bg-emerald-400">
                    View Source Code
                    <i class="fa-brands fa-github t ml-2 transition-all duration-300 hidden sm:inline-block"></i>
                </a>

                <a 
                on:mouseover={moveChevronR} 
                on:mouseleave={moveChevronR} 
                on:focus={moveChevronR}
                href={currentPageData?.projApp}
                target="_blank"
                class="py-2 px-6 border border-white border-opacity-20 bg-opacity-60 rounded-full text-white bg-zinc-900 transition-all duration-300 cursor-pointer hover:bg-emerald-400">
                    Go to App
                    <i class="fa-solid fa-chevron-right ml-2 transition-all duration-300 hidden sm:inline-block {moveR}"></i>
                </a>
            </div>
            <div bind:this={urlButtons}></div>

        </div>
        
    </div>



    <!----------------------------------------- mockups ---------------------------------------------->
    <div class="my-24" >

        {#if currentPageData?.mobileAndDesk}
            <!--------------------------- videos including mobile ---------------------------->
            <div class="relative overflow-x-hidden">
                <img 
                src={currentPageData?.backOne} loading="lazy" alt="background color for the video mockup" class="w-full">

                <div class="absolute z-10 flex w-full top-1/2" bind:this={videoSection}></div>
                
                <div class="absolute z-10 flex items-center justify-center h-full w-full top-0 {scrollAppearVideo} transition-all duration-1000 ">
                    <div class="lg:px-4 max-w-[1200px] lg:translate-y-[-95px] xl:translate-y-[-110px] backdrop-blur-sm bg-zinc-900 lg:bg-inherit">

                        <video class="lg:rounded-lg shadow-md shadow-zinc-700 border border-zinc-400 " loop playsinline bind:this={videoElement}>
                            <source src={currentPageData?.mockVid} type="video/mp4" class="">
                        </video>

                    </div>
                </div>

                <div class="hidden lg:flex absolute z-20 items-center justify-center h-full w-full top-0 {scrollAppearMobileVideo} transition-all duration-1000">
                    <div class="px-4 w-full max-w-[1200px] flex justify-end" >
                        <div class=" lg:w-[180px] xl:w-[210px] lg:translate-y-[95px] xl:translate-y-[110px]">

                            <video class="rounded-lg shadow-md shadow-zinc-700 border-4 border-black float-right" loop playsinline bind:this={mobileVideoElement} >
                                <source src={currentPageData?.mockMobileVid} type="video/mp4" class="">
                            </video>

                        </div>
                    </div>
                </div>
            </div>

        {:else}
            <!-------------------------- just the desktop video ----------------------------->
            <div class="relative overflow-x-hidden">
                <img src={currentPageData?.backOne} alt="background for the video mockup" class="w-full lg:hidden" loading="lazy">
                <img src={currentPageData?.backThree} alt="background for the video mockup" class="w-full hidden lg:block" loading="lazy">

                <div class="absolute z-10 flex w-full top-1/2" bind:this={videoSection}></div>

                <div class="absolute z-10 flex justify-center items-center h-full w-full top-0 {scrollAppearVideo}  transition-all duration-1000 " >
                    <div class="basis-full lg:px-4 max-w-[1300px] ">

                        <!--------------------- large screen mockup video for desktop ------------------------->
                        <video class="lg:rounded-lg shadow-md shadow-zinc-700 border border-zinc-400 " loop playsinline bind:this={videoElement} >
                            <source src={currentPageData?.mockVid} type="video/mp4" class="">
                        </video>

                    </div>
                </div>
            </div>
        {/if}

        <div class="relative w-full h-full flex justify-center items-center overflow-x-hidden font-test16">
            <img src={currentPageData?.backTwo} alt="background color for the carousel of images" class="w-full lg:hidden" loading="lazy">
            <img src={currentPageData?.backFour} alt="background color for the carousel of images" class="w-full hidden lg:block" loading="lazy">
            
            <div class="absolute z-10 top-0 flex justify-center items-center h-full w-full {scrollAppearCarousel} transition-all duration-1000">

                <!-- carousel on small screens -->
                <div class="lg:hidden">
                    <!-- <p class="text-center text-emerald-200 text-lg mb-4 animate-bounce">View Mockups <i class="fa-solid fa-left-right pt-3"></i></p> -->

                    <div class="max-w-[1268px] snap-x scroll-px-0 snap-mandatory scroll-smooth flex gap-4 overflow-x-scroll pb-2">
                        {#each currentPageData?.images ?? [] as image (image)}
                            <img src={image.imageSrc} loading="lazy" class="snap-start shrink-0 shadow-sm shadow-zinc-700 border border-zinc-400" alt="images of the app" >
                        {/each}
                    </div>
                </div>

                <!-- carousel on large screens -->
                <div class="hidden lg:block">
                    <p class="text-center text-emerald-200 text-lg mb-4 animate-bounce">View Mockups <i class="fa-solid fa-left-right pt-3"></i></p>

                    <div class="flex max-w-[1268px] snap-x scroll-px-0 snap-mandatory scroll-smooth gap-4 overflow-x-scroll mx-4 pb-2">
                        {#each currentPageData?.images ?? [] as image (image)}
                            <img src={image.imageSrc} loading="lazy" class="snap-start shrink-0 card shadow-sm shadow-zinc-700 border border-zinc-400" alt="images of the app" >
                        {/each}
                    </div>
                </div>
            </div>

            <div bind:this={carouselSection}></div>
        </div>

    </div>


    <!---------------------------- similar works suggestions -------------------------------->
    <div class="px-4 flex justify-center items-center border-b border-white border-opacity-5 pb-24 font-test16">
        <div>
            <h1 class="mb-8 text-4xl text-center">Similar Works</h1>

            <div class="flex flex-wrap text-center justify-center gap-4">
                {#each selectedWorks as work}
                    <button class="md:basis-5/12 p-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 border-white rounded-md hover:hover:translate-y-[-0.5rem] transition-all duration-300 hover:border-emerald-400">
                        <a href={work.link}>
                            <div class="flex justify-center">
                                <img src={work.projLink} alt="case study graphic" class="rounded-md">
                            </div>
                            <p class="mt-2 mb-1 italic">{work.year}</p>
                            <p class="text-2xl font-bold text-emerald-400">{work.name}</p>
                            <p class="mt-1 mb-2 italic">{work.type}</p>
                            <p class="line-clamp-2">{@html work.projDesc}</p>
                        </a>
                    </button>
                {/each}
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

{/if}


<style>
    .important {
        color: rgb(16 185 129);
    }
    .wrapper {
        overflow: hidden;
        transition: height 0.3s ease;
    }
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>