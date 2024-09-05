<script>
    import { createEventDispatcher } from "svelte"
    const dispatch = createEventDispatcher()

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
    <img 
    src="../../portfolio_logo_lg.png" 
    alt="Andrew's first and last inital" 
    width="64" 
    height="64" 
    class="border p-2 rounded-md shadow-md border-emerald-400 animate-hover"
    loading="lazy"
    >
</div>

<div class="relative gap-4 py-8 pt-9 font-test16">

    <div class="absolute flex top-0 bg-gradient-to-r from-emerald-950 via-emerald-400 to-emerald-950 opacity-20 z-0 w-full h-full"></div>

    <div class="absolute top-5 z-10 flex justify-center w-full gap-4">
        <div class=""><!-- border-t border-b border border-cyan-950  -->
            <a href="/" class="text-sm hover:text-emerald-400 transition-all duration-500 ">Home</a>
        </div>

        <button>
            <a href="/" class="text-sm  hover:text-emerald-400 transition-all duration-500 ">About</a>
        </button>

        <div class="">
            <a href="/" class="text-sm hover:text-emerald-400 transition-all duration-500 ">Work</a>
        </div>

        <div class=" border-r border-white border-opacity-20 pr-4">
            <a href="/" class="text-sm hover:text-emerald-400 transition-all duration-500 ">Contact</a>
        </div>

        <div class="">
            <a href="../../Andrew_Kester_Resume.pdf" target="_blank" class="text-sm hover:text-emerald-400 transition-all duration-500 ">Resume</a>
        </div>
        
        
    </div>
    
</div>

<div class="flex justify-center gap-4 pt-4 pb-2">
    <a class="fa-brands fa-linkedin text-lg  hover:text-emerald-400 transition-all duration-500 " href="https://www.linkedin.com/in/andrew-j-kester/" target="_blank"></a>
    <a class="fa-brands fa-github text-lg  hover:text-emerald-400 transition-all duration-500 " href="https://github.com/Andyrooooo/" target="_blank"></a>
    <a class="fa-solid fa-envelope text-lg  hover:text-emerald-400 transition-all duration-500 " href="mailto:10919987@my.uvu.edu"></a>
</div>

<p class="text-center text-sm pb-4 font-test16">&#169; 2024 Andrew Kester</p>
