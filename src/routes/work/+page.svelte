<script lang="ts">
    import { fly } from 'svelte/transition'

    let works = [
        {
            link: 'uvusa',
            name: 'UVU Scheduling App',
            image: 'uvusa_sm.svg',
            isHovered: false,
            year: '2024',
            type: 'Web App'
        },
        {
            link: 'fssa',
            name: 'Fullstack Svelte App',
            image: 'fssa_sm.svg',
            isHovered: false,
            year: '2024',
            type: 'Web App'
        },
        {
            link: 'sta',
            name: 'Svelte Tutorial App',
            image: 'sta_sm2.svg',
            isHovered: false,
            year: '2023',
            type: 'Web App'
        },
        {
            link: 'tta',
            name: 'Time Tracker App',
            image: 'tta_sm.svg',
            isHovered: false,
            year: '2023',
            type: 'Web App'
        },
        {
            link: 'nba',
            name: 'Nonsense Blog App',
            image: 'nba_sm.svg',
            isHovered: false,
            year: '2023',
            type: 'Web App'
        },
        {
            link: 'vta',
            name: 'Vue Todo App',
            image: 'vta_sm.svg',
            isHovered: false,
            year: '2022',
            type: 'Web App'
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
    
    
    <div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center mx-4 relative">
    
        
         <!-- Button: Left  -->
        <button type="button" class="absolute z-20 left-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 backdrop-blur-sm border-white text-white px-4 h-12 rounded-full hover:bg-emerald-400 transition-all duration-500" on:click={multiColumnLeft}>
            <i class="fa-solid fa-arrow-left" />
        </button>
    
    
         <!-- Carousel  -->
        <div bind:this={elemWorks} class="snap-x snap-mandatory scroll-smooth flex gap-4 overflow-x-hidden">
            {#each works as { name, image, isHovered, link, year, type }, index (image)}
                <div class="shrink-0 w-[65%] sm:w-[45%] md:w-[35%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%] snap-start relative z-10 my-12"
                role="banner" 
                on:mouseenter={() => { 
                works[index].isHovered = true
                }} 
                on:mouseleave={() => {
                    works[index].isHovered = false
                }}>
                        <img
                            src={image}
                            class="rounded-container-token transition-all duration-200 border-2 border-zinc-300 shadow-md shadow-zinc-800 "
                            alt={name}
                            title={name}
                            loading="lazy"
                        />
                    {#if isHovered}
                        <a href="/work/{link}" class="hover:border-2 hover:border-emerald-400 bg-black bg-opacity-60 rounded-lg absolute z-20 inset-0 flex items-center justify-center flex-wrap gap-0 text-2xs sm:text-sm xl:text-4xl hover:backdrop-blur-sm transition-all duration-200" role="button">
                            <div class="mx-2 font-test16">
                                <p in:fly={{ y: -80, duration: 300 }} out:fly={{ y: -80, duration: 200 }} class="text-lg font-semibold text-white text-center">{year}</p>
                                <p in:fly={{ x: -40, duration: 300 }} out:fly={{ x: -40, duration: 200 }} class="text-2xl font-black text-emerald-400 text-center transition-all my-2">{name}</p>
                                <p in:fly={{ y: 80, duration: 300 }} out:fly={{ y: 80, duration: 200 }} class="text-lg font-semibold text-white text-center">{type}</p>
                            </div>
                        </a>
                    {/if}
                </div>
            {/each}
        </div>
    
    
         <!-- Button-Right -->
        <button type="button" class="absolute z-10 right-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 border-white text-white px-4 h-12 rounded-full hover:bg-emerald-500 transition-all duration-500 backdrop-blur-sm" on:click={multiColumnRight}>
            <i class="fa-solid fa-arrow-right" />
        </button>
    </div>
</div>