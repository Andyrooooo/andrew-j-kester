<script>
    import { createEventDispatcher } from "svelte"
    const dispatch = createEventDispatcher()

    function scrollHome() {
        dispatch('scrollHome')
    }

    function scrollAbout() {
        dispatch('scrollAbout')

    }

    function scrollWork() {
        dispatch('scrollWork')

    }

    function scrollContact() {
        dispatch('scrollContact')

    }
</script>

<div class="flex justify-center py-12">
    <img src="../../../portfolio_logo_lg.png" alt="Andrew's first and last inital" width="64" height="64" class="border p-2 rounded-md shadow-md border-emerald-400 animate-hover">
</div>

<div class="relative gap-4 py-8 pt-9">

    <div class="absolute flex top-0 bg-gradient-to-r from-emerald-950 via-emerald-400 to-emerald-950 opacity-20 z-0 w-full h-full"></div>

    <div class="absolute top-5 z-10 flex justify-center w-full gap-4">
        <div class=""><!-- border-t border-b border border-cyan-950  -->
            <button on:click={scrollHome} class="text-sm transition-all duration-500 hover:text-emerald-400">Home</button>
        </div>

        <div class="">
            <button on:click={scrollAbout} class="text-sm transition-all duration-500 hover:text-emerald-400">About</button>
        </div>

        <div class="">
            <button on:click={scrollWork} class="text-sm transition-all duration-500 hover:text-emerald-400">Work</button>
        </div>

        <div class=" border-r border-white border-opacity-20 pr-4">
            <button on:click={scrollContact} class="text-sm transition-all duration-500 hover:text-emerald-400">Contact</button>
        </div>

        <div class="">
            <a href="MyResume2024.pdf" target="_blank" class="text-sm transition-all duration-500 hover:text-emerald-400">Resume</a>
        </div>
        
        
    </div>
    
</div>

<div class="flex justify-center gap-4 pt-4 pb-2">
    <a class="fa-brands fa-linkedin text-lg  hover:text-emerald-400 transition-all duration-500 " href="https://www.linkedin.com/in/andrew-j-kester/" target="_blank"></a>
    <a class="fa-brands fa-github text-lg  hover:text-emerald-400 transition-all duration-500 " href="https://github.com/Andyrooooo/" target="_blank"></a>
    <a class="fa-solid fa-envelope text-lg  hover:text-emerald-400 transition-all duration-500 " href="mailto:10919987@my.uvu.edu"></a>
</div>

<p class="text-center text-sm pb-4">&#169; 2024 Andrew Kester</p>
