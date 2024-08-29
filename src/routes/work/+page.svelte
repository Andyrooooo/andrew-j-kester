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

<div class="flex justify-start">
    <p class="font-bold border-r border-b border-opacity-30 bg-emerald-400 bg-opacity-10 border-emerald-400 py-1 px-6 pr-8 rounded-br-full uppercase text-emerald-400">Work</p>
</div>


<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center my-8 mx-4 relative">

    
	 <!-- Button: Left  -->
	<button type="button" class="absolute z-20 left-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 backdrop-blur-sm border-white text-white px-4 h-12 rounded-full hover:bg-emerald-400 transition-all duration-500" on:click={multiColumnLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>


	 <!-- Carousel  -->
	<div bind:this={elemWorks} class="snap-x snap-mandatory scroll-smooth flex gap-4 overflow-x-hidden">
		{#each works as { name, image, isHovered, link, year, type }, index (image)}
            <div class="shrink-0 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[33%] xl:w-[25%] 2xl:w-[15%] snap-start relative z-10 my-12"
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
                    <a href="/work/{link}" class="hover:border-2 hover:border-emerald-400 bg-black bg-opacity-40 rounded-lg absolute z-20 inset-0 flex items-center justify-center flex-wrap gap-0 text-2xs sm:text-sm xl:text-4xl hover:backdrop-blur-sm transition-all duration-200" role="button">
                        <div class="mx-2">
                            <p in:fly={{ y: -80, duration: 300 }} out:fly={{ y: -80, duration: 200 }} class="text-lg font-semibold text-white text-center">{year}</p>
                            <p in:fly={{ x: -40, duration: 300 }} out:fly={{ x: -40, duration: 200 }} class="text-2xl font-bold text-emerald-400 text-center transition-all duration-300 my-2">{name}</p>
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




<!-- 
<script lang="ts">
    import { fly } from 'svelte/transition'

    let elemMovies: HTMLDivElement;

    function multiColumnLeft(): void {
        let x = elemMovies.scrollWidth;
        if (elemMovies.scrollLeft !== 0) x = elemMovies.scrollLeft - elemMovies.clientWidth;
        elemMovies.scroll(x, 0);
    }

    function multiColumnRight(): void {
        let x = 0;
        // -1 is used because different browsers use different methods to round scrollWidth pixels.
        if (elemMovies.scrollLeft < elemMovies.scrollWidth - elemMovies.clientWidth - 1) x = elemMovies.scrollLeft + elemMovies.clientWidth;
        elemMovies.scroll(x, 0);
    }
</script>

<div class="flex justify-start">
    <p class="font-bold border-r border-b border-opacity-30 bg-emerald-400 bg-opacity-10 border-emerald-400 py-1 px-6 pr-8 rounded-br-full uppercase text-emerald-400">Work</p>
</div>


<div class="grid grid-cols-[auto_1fr_auto] gap-4 items-center my-8 mx-4 relative">
	  Button: Left 
     <button type="button" class="absolute z-20 left-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 backdrop-blur-sm border-white text-white px-4 h-12 rounded-full hover:bg-emerald-400 transition-all duration-500" on:click={multiColumnLeft}>
		<i class="fa-solid fa-arrow-left" />
	</button>
	  Carousel 
	<div bind:this={elemMovies} class="snap-x snap-mandatory scroll-smooth flex gap-4 overflow-x-hidden">
		{#each moviesData.movies as { name, image, isHovered, isBlurred, isTinted, link, year, type }, index (image)}
            <div class="shrink-0 w-[75%] sm:w-[60%] md:w-[45%] lg:w-[33%] xl:w-[25%] 2xl:w-[15%] snap-start relative z-10 my-12"
            role="banner" 
            on:mouseenter={() => { 
            moviesData.movies[index].isHovered = true
             moviesData.movies[index].isBlurred = true
             moviesData.movies[index].isTinted = true
            }} 
            on:mouseleave={() => {
                moviesData.movies[index].isHovered = false
                 moviesData.movies[index].isBlurred = false
                 moviesData.movies[index].isTinted = false
            }}>
				 {#if isBlurred && isTinted}
                    <img
                        src={image}
                        class="rounded-container-token transition-all duration-100 blur-sm relative z-0 p-[2px]"
                        alt={name}
                        title={name}
                        loading="lazy"
                        style="makeTint"
                    />
                {:else if !isBlurred && !isTinted} 
                    <img
                        src={image}
                        class="rounded-container-token transition-all duration-200 border-2 border-zinc-300 shadow-md shadow-zinc-800 "
                        alt={name}
                        title={name}
                        loading="lazy"
                        style="makeTint"
                    />
               {/if}
                {#if isHovered}
                    <a href={link} class="hover:border-2 hover:border-emerald-400 bg-black bg-opacity-40 rounded-lg absolute z-20 inset-0 flex items-center justify-center flex-wrap gap-0 text-2xs sm:text-sm xl:text-4xl hover:backdrop-blur-sm transition-all duration-200" role="button">
                        <div class="mx-2">
                            <p in:fly={{ y: -80, duration: 300 }} out:fly={{ y: -80, duration: 200 }} class="text-lg font-semibold text-white text-center">{year}</p>
                            <p in:fly={{ x: -40, duration: 300 }} out:fly={{ x: -40, duration: 200 }} class="text-2xl font-bold text-emerald-400 text-center transition-all duration-300 my-2">{name}</p>
                            <p in:fly={{ y: 80, duration: 300 }} out:fly={{ y: 80, duration: 200 }} class="text-lg font-semibold text-white text-center">{type}</p>
                        </div>
                    </a>
                {/if}
            </div>
		{/each}
	</div>

	<button type="button" class="absolute z-10 right-4 border border-opacity-20 bg-zinc-900 bg-opacity-60 border-white text-white px-4 h-12 rounded-full hover:bg-emerald-500 transition-all duration-500 backdrop-blur-sm" on:click={multiColumnRight}>
		<i class="fa-solid fa-arrow-right" />
	</button>
</div>
-->

<!-- 
    let moviesData = {
        movies: [
            {
                name: 'UVU Scheduling App',
                image: 'uvusa_sm.svg',
                isHovered: false,
                // isBlurred: false,
                // isTinted: false,
                link: 'work/caseStudies/uvusa',
                year: '2024',
                type: 'Web App'
            },
            {
                name: 'Fullstack Svelte App',
                image: 'fssa_sm.svg',
                isHovered: false,
                // isBlurred: false,
                // isTinted: false,
                link: 'work/caseStudies/fssa',
                year: '2024',
                type: 'Web App'
            },
            {
                name: 'Svelte Tutorial App',
                image: 'sta_sm2.svg',
                isHovered: false,
                // isBlurred: false,
                // isTinted: false,
                link: 'work/caseStudies/sta',
                year: '2023',
                type: 'Web App'
            },
            {
                name: 'Time Tracker App',
                image: 'tta_sm.svg',
                isHovered: false,
                // isBlurred: false,
                // isTinted: false,
                link: 'work/caseStudies/tta',
                year: '2023',
                type: 'Web App'
            },
            {
                name: 'Nonsense Blog App',
                image: 'nba_sm.svg',
                isHovered: false,
                // isBlurred: false,
                // isTinted: false,
                link: 'work/caseStudies/nba',
                year: '2023',
                type: 'Web App'
            },
            {
                name: 'Vue Todo App',
                image: 'vta_sm.svg',
                isHovered: false,
                // isBlurred: false,
                // isTinted: false,
                link: 'work/caseStudies/vta',
                year: '2022',
                type: 'Web App'
            }
        ]
    }
-->