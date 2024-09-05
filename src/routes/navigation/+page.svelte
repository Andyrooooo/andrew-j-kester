<script>
    import { createEventDispatcher } from "svelte"
    const dispatch = createEventDispatcher()
    import { onMount } from 'svelte'

    let position = "transform: translateX(105%);"

    let menuOpen = false

    let iconButton = ""
    let showIcons = "opacity-0"
    let closeSocials = "opacity-0"
    let restructureOne = ""
    let restructureTwo = ""
    let restructureThree = ""
    let hideName = ""


    function toggleMenu() {
        position = position === 'transform: translateX(105%);' ? 'transform: translateX(0);' : 'transform: translateX(105%);'
        menuOpen = !menuOpen
    }

    function scrollHome() {
        dispatch('scrollHome')
        toggleMenu()
    }

    function scrollAbout() {
        dispatch('scrollAbout')
        toggleMenu()
    }

    function scrollWork() {
        dispatch('scrollWork')
        toggleMenu()
    }

    function scrollContact() {
        dispatch('scrollContact')
        toggleMenu()
    }

    let scrollPosition = 0 

    onMount(() => {
        function handleScroll() {
            scrollPosition = window.scrollY
        }

        window.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    function openIcons() {
        iconButton = "translate-x-[-200%] opacity-0"
        closeSocials = "block translate-x-[-7rem] opacity-100"
        restructureOne = "right-20"
        restructureTwo = "right-10"
        restructureThree = "right-0"
        showIcons = "opacity-100"
        hideName = "opacity-0 translate-y-[-100%]"
    }

    function closeIcons() {
        iconButton = "translate-x-0 opacity-100"
        closeSocials = "translate-x-0 opacity-0"
        restructureOne = "right-[1rem]"
        restructureTwo = "right-[1rem]"
        restructureThree = "right-[1rem]"
        showIcons = "opacity-0"
        hideName = "opacity-100"
    }

    
</script>

<div class="lg:hidden">
    
    {#if !menuOpen}
        <div class="w-full fixed top-0 z-30">
            <div class="flex px-2 py-2 mx-4 mt-4 transition-all duration-500 rounded-full bg-black border border-white border-opacity-0 bg-opacity-0" class:sticky={scrollPosition > 5}>
                <!-- border border-emerald-500 rounded-full bg-emerald-900 bg-opacity-80 -->
                <div class="basis-4/12 ">
                    <button on:click={toggleMenu} class="fa-solid fa-bars text-lg hover:text-emerald-400 rounded-full px-3 bg-black bg-opacity-0 transition-all duration-500" class:stickyBTN={scrollPosition > 5}></button>
                </div>

                <div class="basis-4/12">
                    <div class="flex justify-center">
                        <div class="font-bold transform hover:translate-y-[-0.25rem] transition-all duration-500 hover:text-emerald-400 sm:hidden text-xl {hideName} font-test16">
                            <a href="/" class="">AK</a>
                        </div>
                        <div class="font-bold transform hover:translate-y-[-0.25rem] transition-all duration-500 hover:text-emerald-400 hidden sm:block font-test16">
                            <a href="/" class="">Andrew Kester</a>
                        </div>
                    </div>
                </div>

                <!-- icons on extra small screens -->
                <div class="basis-4/12 flex justify-end static pr-2 sm:hidden">
                    <div class={`text-[13px] w-[28px] h-[28px] translate-y-[-5px] cursor-pointer hover:text-emerald-400 transition-all duration-500 absolute z-10 ${iconButton}` } on:click={openIcons}>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-solid fa-envelope translate-y-[-10px] translate-x-[6px]"></i> 
                    </div>

                    <div class={`cursor-pointer hover:text-emerald-400 transition-all duration-500 ${closeSocials} h-full flex items-center px-2` } on:click={closeIcons}>
                        <i class="fa-solid fa-chevron-right"></i> 
                    </div>

                    <div class={`relative transition-all duration-500 ${showIcons} h-full items-center`}>
                        <a class={`fa-brands fa-linkedin text-lg hover:text-emerald-400 transition-all duration-500 absolute right-0 z-0 ${restructureOne}`} href="https://www.linkedin.com/in/andrew-j-kester/" target="_blank"></a>
                        <a class={`fa-brands fa-github text-lg hover:text-emerald-400 transition-all duration-500 absolute right-0 z-0 ${restructureTwo}`} href="https://github.com/Andyrooooo/" target="_blank"></a>
                        <a class={`fa-solid fa-envelope text-lg hover:text-emerald-400 transition-all duration-500 absolute right-0 z-0 ${restructureThree}`} href="mailto:10919987@my.uvu.edu"></a>
                    </div>
                </div>

                <!-- icons on medium and up screens -->
                <div class="hidden sm:flex basis-4/12 justify-end gap-4 pr-2">
                    <a class="fa-brands fa-linkedin text-lg hover:text-emerald-400 transition-all duration-500" href="https://www.linkedin.com/in/andrew-j-kester/" target="_blank"></a>
                    <a class="fa-brands fa-github text-lg hover:text-emerald-400 transition-all duration-500" href="https://github.com/Andyrooooo/" target="_blank"></a>
                    <a class="fa-solid fa-envelope text-lg hover:text-emerald-400 transition-all duration-500" href="mailto:10919987@my.uvu.edu"></a>
                </div>
            </div>
        </div>
    {/if}

        <div class="fixed z-30 transition-all duration-500 h-full w-full top-0 right-0 bg-zinc-950 bg-opacity-80 backdrop-blur" style={position}>

            <div class="flex border-1/2 border-white border-opacity-10 rounded-full px-2 py-2 mx-4 mt-4 bg-zinc-900 bg-opacity-60">
                <div class="basis-4/12">
                    <button on:click={toggleMenu} class="fa-solid fa-x text-lg hover:text-emerald-400 rounded-full px-2 bg-zinc-950 bg-opacity-60 border-1/2 border-white border-opacity-10 transition-all duration-500"></button>
                </div>

                <div class="basis-4/12">
                    <div class="flex justify-center">
                        <div class="font-bold transform hover:translate-y-[-0.25rem] transition-all duration-500 hover:text-emerald-400 sm:hidden text-xl transition-all duration-500 {hideName} font-test16">
                            <a href="/" class="">AK</a>
                        </div>
                        <div class="font-bold transform hover:translate-y-[-0.25rem] transition-all duration-500 hover:text-emerald-400 hidden sm:block transition-all duration-500 font-test16">
                            <a href="/" class="">Andrew Kester</a>
                        </div>
                    </div>
                </div>

                <!-- icons on extra small screens -->
                <div class="basis-4/12 flex justify-end static pr-2 sm:hidden">
                    <div class={`text-[13px] w-[28px] h-[28px] translate-y-[-5px] cursor-pointer hover:text-emerald-400 transition-all duration-500 absolute z-10 ${iconButton}` } on:click={openIcons}>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-solid fa-envelope translate-y-[-10px] translate-x-[6px]"></i> 
                    </div>

                    <div class={`cursor-pointer hover:text-emerald-400 transition-all duration-500 ${closeSocials} h-full flex items-center px-2` } on:click={closeIcons}>
                        <i class="fa-solid fa-chevron-right"></i> 
                    </div>

                    <div class={`relative transition-all duration-500 ${showIcons} h-full items-center`}>
                        <a class={`fa-brands fa-linkedin text-lg hover:text-emerald-400 transition-all duration-500 absolute right-0 z-0 ${restructureOne}`} href="https://www.linkedin.com/in/andrew-j-kester/" target="_blank"></a>
                        <a class={`fa-brands fa-github text-lg hover:text-emerald-400 transition-all duration-500 absolute right-0 z-0 ${restructureTwo}`} href="https://github.com/Andyrooooo/" target="_blank"></a>
                        <a class={`fa-solid fa-envelope text-lg hover:text-emerald-400 transition-all duration-500 absolute right-0 z-0 ${restructureThree}`} href="mailto:10919987@my.uvu.edu"></a>
                    </div>
                </div>

                <!-- icons on medium and up screens -->
                <div class="hidden sm:flex basis-4/12 justify-end gap-4 pr-2">
                    <a class="fa-brands fa-linkedin text-lg hover:text-emerald-400 transition-all duration-500" href="https://www.linkedin.com/in/andrew-j-kester/" target="_blank"></a>
                    <a class="fa-brands fa-github text-lg hover:text-emerald-400 transition-all duration-500" href="https://github.com/Andyrooooo/" target="_blank"></a>
                    <a class="fa-solid fa-envelope text-lg hover:text-emerald-400 transition-all duration-500" href="mailto:10919987@my.uvu.edu"></a>
                </div>
            </div>
            
            <!-- {/if} -->
            <div class="p-4 flex flex-col justify-between mt-4">
                <div class="">
                    <div class="highlight mb-4 font-bold">
                        <button on:click={scrollHome} class="hover:text-emerald-400 transition-all duration-500 w-full text-left font-test16">Home</button>
                        <div class="border-b-2 transition-all duration-500 border-emerald-400 mb-4"></div>
                    </div>
                    
                    <div class="highlight mb-4 font-bold">
                        <button on:click={scrollAbout} class="hover:text-emerald-400 transition-all duration-500 w-full text-left font-test16">About</button>
                        <div class="border-b-2 transition-all duration-500 border-emerald-400"></div>
                    </div>

                    <div class="highlight mb-4 hover:text-emerald-400 font-bold transition-all duration-500 font-test16">
                        <button on:click={scrollWork} class=" w-full text-left">Work</button>
                        <div class="border-b-2 transition-all duration-500 border-emerald-400"></div>
                    </div>

                    <div class="highlight mb-2 pb-2 hover:text-emerald-400 font-bold transition-all duration-500 w-full text-left font-test16">
                        <button on:click={scrollContact} class=" w-full text-left">Contact</button>
                        <div class="border-b-2 transition-all duration-500 border-emerald-400"></div>
                    </div>

                    <div class="highlight mb-4 font-bold transition-all duration-500 font-test16">
                        <a class="hover:text-emerald-400 block w-full text-left" href="Andrew_Kester_Resume.pdf" target="_blank">Resume</a>
                        <div class="border-b-2 transition-all duration-500 border-emerald-400"></div>
                    </div>
                </div>
                
            </div>
        </div>

</div> <!-- End of mobile menu -->



<div class="hidden lg:block mt-4 absolute z-30 top-0 w-full">
    <div class="mx-4">
        <div class="flex justify-between py-2 px-4">

            <nav class="basis-4/12">
                <ul class="flex">
                    <li class="mr-4 highlight hover:text-emerald-400 transition-all duration-500 font-test16">
                        <button  on:click={scrollHome} >Home</button>
                        <div class="border-b-2 transition-all duration-500 border-emerald-400"></div>
                    </li>
        
                    <li class="mr-4 highlight hover:text-emerald-400 transition-all duration-500 font-test16">
                        <button on:click={scrollAbout} >About</button>
                        <div class="border-b-2 transition-all duration-500 border-emerald-400"></div>
                    </li>
                    
                    <li class="mr-4 highlight">
                        <button on:click={scrollWork} class="hover:text-emerald-400 transition-all duration-500 font-test16">Work</button>
                        <div class="border-b-2 transition-all duration-500 border-emerald-400"></div>
                    </li>

                    <li class="mr-4 highlight">
                        <button on:click={scrollContact} class="hover:text-emerald-400 transition-all duration-500 font-test16">Contact</button>
                        <div class="border-b-2 transition-all duration-500 border-emerald-400"></div>
                    </li>

                    <div class=" border-r border-opacity-30 border-white mr-4"></div>

                    <li class="mr-4 highlight hover:text-emerald-400 transition-all duration-500 font-test16">
                        <a href="Andrew_Kester_Resume.pdf" target="_blank">Resume</a>
                        <div class="border-b-2 transition-all duration-500 border-emerald-400"></div>
                    </li>
                </ul>
            </nav>
    
            <div class="basis-4/12">
                <div class="flex justify-center">
                    <a href="/" class="font-bold transform hover:translate-y-[-0.25rem] transition-all duration-500 hover:text-emerald-400 font-test16">Andrew Kester</a>
                </div>
            </div>
        
            <div class="basis-4/12 flex justify-end gap-4">
                <a class="fa-brands fa-linkedin text-lg hover:text-emerald-400 transition-all duration-500" href="https://www.linkedin.com/in/andrew-j-kester/" target="_blank"></a>
                <a class="fa-brands fa-github text-lg hover:text-emerald-400 transition-all duration-500" href="https://github.com/Andyrooooo/" target="_blank"></a>
                <a class="fa-solid fa-envelope text-lg hover:text-emerald-400 transition-all duration-500" href="mailto:10919987@my.uvu.edu"></a>
            </div>
        </div>
    </div>
</div>


<style>
.highlight .border-b-2 {
    width: 0;
    opacity: 0;
}

.highlight:hover .border-b-2 {
    width: 100%; 
    opacity: 1;
}
/*      border border-emerald-500 bg-emerald-900 */
.sticky {
    border: .5px solid rgb(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    background: rgb(24, 24, 27, 0.6);
}
.stickyBTN {
    border: .5px solid rgb(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    background: rgb(24, 24, 27, 0.1);
}
.stickySocial {
    border-left: 4px solid rgb(255, 255, 255);
}
.backblur {
    backdrop-filter: blur(10px);
}
</style>