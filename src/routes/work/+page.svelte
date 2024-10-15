<script lang="ts">
    import { fly } from 'svelte/transition'

    let works = [
        {
            link: 'uvusa',
            name: 'UVU Scheduling App',
            image: 'uvusa_sm_test.png',
            isHovered: false,
            year: '2024',
            type: 'Web App',
            logo: 'uvusa_images/uvu_logo.png'
        },
        {
            link: 'fssa',
            name: 'Fullstack Svelte App',
            image: 'fssa_sm_test.png',
            isHovered: false,
            year: '2024',
            type: 'Web App',
            logo: 'fssa_images/fssa_logo4.svg'
        },
        {
            link: 'sta',
            name: 'Svelte Tutorial App',
            image: 'sta_sm_test.png',
            isHovered: false,
            year: '2023',
            type: 'Web App',
            logo: 'sta_images/sta_logo.svg'
        },
        {
            link: 'tta',
            name: 'Time Tracker App',
            image: 'tta_sm_test.png',
            isHovered: false,
            year: '2023',
            type: 'Web App',
            logo: 'tta_images/tta_logo2.svg'
        },
        {
            link: 'nba',
            name: 'Nonsense Blog App',
            image: 'nba_sm_test.png',
            isHovered: false,
            year: '2023',
            type: 'Web App',
            logo: 'nba_images/nba_logo.svg'
        },
        {
            link: 'vta',
            name: 'Vue Todo App',
            image: 'vta_sm_test.png',
            isHovered: false,
            year: '2022',
            type: 'Web App',
            logo: 'vta_images/vta_logo.svg'
        },
    ]

    let elemWorks: HTMLDivElement;

    function multiColumnLeft(): void {
        let x = elemWorks.scrollWidth;
        if (elemWorks.scrollLeft !== 0) x = elemWorks.scrollLeft - elemWorks.clientWidth;
        elemWorks.scroll(x, 0);
    }

    function multiColumnRight(): void {
        let x = 0;
        // -1 is used because different browsers use different methods to round scrollWidth pixels.
        if (elemWorks.scrollLeft < elemWorks.scrollWidth - elemWorks.clientWidth - 1) x = elemWorks.scrollLeft + elemWorks.clientWidth;
        elemWorks.scroll(x, 0);
    }
</script>

<div class="h-screen relative flex items-center">
    <div class="flex justify-start absolute top-0">
        <p class="font-bold border-r border-b border-opacity-30 bg-emerald-400 bg-opacity-10 border-emerald-400 py-1 px-6 pr-8 rounded-br-full uppercase text-emerald-400 font-test10">Work</p>
    </div>
    
    
    <div class="grid grid-cols-[auto_1fr_auto] items-center relative px-4">
    
        
         <!-- Button: Left  -->
        <button type="button" class="absolute z-20 left-8 border border-opacity-20 bg-zinc-900 bg-opacity-60 backdrop-blur-sm border-white text-white px-4 h-12 rounded-full hover:bg-emerald-400 transition-all duration-500 mt-20" on:click={multiColumnLeft}>
            <i class="fa-solid fa-arrow-left" />
        </button>
    
    
         <!-- Carousel  -->
        <div bind:this={elemWorks} class="snap-x snap-mandatory scroll-smooth flex overflow-x-hidden gap-4">
            {#each works as { name, image, isHovered, link, year, type, logo }, index (image)}
                <div class="shrink-0 w-[100%] 2xs:w-[80%] xs:w-[60%] sm:w-[50%] md:w-[35%] lg:w-[30%] xl:w-[25%] snap-start relative z-10 my-12  rounded-lg "
                role="banner" 
                on:mouseenter={() => { 
                works[index].isHovered = true
                }} 
                on:mouseleave={() => {
                    works[index].isHovered = false
                }}>
                    <div class="{isHovered ? 'scale-[.95]' : ''} overflow-x-hidden overflow-y-hidden rounded-lg transition-all duration-700">

                        <div class="w-16 h-16 p-2 absolute z-10 top-0 right-0 border border-white border-opacity-40 bg-zinc-900 bg-opacity-20 backdrop-blur-sm rounded-tr-lg rounded-bl-lg flex justify-center items-center">
                            <img src={logo} alt="app logo" class="w-12 h-12"/>
                        </div>

                        <img
                        src={image}
                        class="rounded-container-token transition-all duration-700 border border-zinc-300 {isHovered ? 'scale-[1.2]' : ''}"
                        alt={name}
                        title={name}
                        loading="lazy"
                        />
                        {#if isHovered}
                            <a href="/work/{link}" class=" bg-black bg-opacity-60 absolute z-20 inset-0 flex items-center justify-center flex-wrap gap-0 text-2xs sm:text-sm xl:text-4xl hover:backdrop-blur-sm transition-all duration-700" role="button">
                                <div class="mx-2 font-test16">
                                    <p in:fly={{ y: -80, duration: 300 }} out:fly={{ y: -80, duration: 200 }} class="text-lg font-semibold text-white text-center">{year}</p>
                                    <p in:fly={{ x: -40, duration: 300 }} out:fly={{ x: -40, duration: 200 }} class="text-2xl font-black text-emerald-400 text-center transition-all my-4">{name}</p>
                                    <p in:fly={{ y: 80, duration: 300 }} out:fly={{ y: 80, duration: 200 }} class="text-lg font-semibold text-white text-center">{type}</p>
                                </div>
                            </a>
                        {/if}
                    </div>
                </div>
            {/each}
        </div>
    
    
         <!-- Button-Right -->
        <button type="button" class="absolute z-10 right-8 border border-opacity-20 bg-zinc-900 bg-opacity-60 border-white text-white px-4 h-12 rounded-full hover:bg-emerald-500 transition-all duration-500 backdrop-blur-sm mt-20" on:click={multiColumnRight}>
            <i class="fa-solid fa-arrow-right" />
        </button>
    </div>
</div>

<!-- <style>
    .hovered {
        transform: scale(1.1);
        object-fit: cover;
    }
</style> -->