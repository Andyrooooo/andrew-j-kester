<script>
    import { fly } from 'svelte/transition'
    import { messages } from './messages.js'
    import { onMount } from 'svelte'

    let i = -1;

	onMount(() => {
		const interval = setInterval(() => {
			i += 1;
			i %= messages.length;
		}, 2500);

		return () => {
			clearInterval(interval);
		};
	});
</script>


<div class="h-screen lg:w-full lg:flex">
    <div class="h-1/2 lg:hidden">
        <img src="aboutme_sideview2.jpg" alt="me at the national park" loading="lazy" class="object-cover w-full h-full" >
    </div>

    <div class="hidden lg:block lg:basis-1/2">
        <img src="aboutme_sideview2.jpg" alt="me at the national park" loading="lazy" class="object-cover w-full h-full" >
    </div>
        

    <div class="h-1/2 lg:h-full lg:basis-1/2">

        <div class="flex items-center h-full relative">

            <div class="flex justify-start absolute top-0">
                <p class="font-bold border-r border-b border-opacity-30 bg-emerald-400 bg-opacity-10 border-emerald-400 py-1 px-6 pr-8 rounded-br-full uppercase text-emerald-400">about</p>
            </div>

            <div class="mt-10">
                <div class="h-12 overflow-x-hidden sm:hidden">
                    {#key i}
                        <h1 class="text-xl mb-2 px-4 absolute z-10 text-emerald-400" transition:fly={{ x: 100, duration: 2000 }}>
                            {messages[i] || ''}
                        </h1>
                    {/key}
                </div>
        
                <div class="h-12 overflow-x-hidden hidden sm:block md:hidden">
                    {#key i}
                        <h1 class="text-xl mb-2 px-4 absolute z-10 text-emerald-400" transition:fly={{ x: 200, duration: 2000 }}>
                            {messages[i] || ''}
                        </h1>
                    {/key}
                </div>
            
                <div class="h-12 overflow-x-hidden hidden md:block">
                    {#key i}
                        <h1 class="text-xl mb-2 px-4 absolute z-10 text-emerald-400" transition:fly={{ x: 300, duration: 2000 }}>
                            {messages[i] || ''}
                        </h1>
                    {/key}
                </div>
            
                <p class="pb-4 px-4 font-thin">I'm Andrew, a determined and dedicated developer from Utah, I am currently working to finish a degree in Web and App Development at the 
                    Utah Valley University. I also have a great understanding of design methods and principles in addition to having intrigue in backend development. I am very eager to
                        apply my skills to a great team and develop amazing websites and applications.
                </p>
            </div>
        </div>
    </div>

</div>
<!-- 

LARGE SCREENS
<div class="hidden lg:block xl:hidden">
    <div class="">
        <div class="flex flex-wrap">
            <div class="basis-6/12">
                <img src="aboutme-xl-3.jpg" alt="Andrew standing next to a canyon" class="w-full" loading="lazy">
            </div>
    
            <div class="basis-6/12">
                <img src="aboutme-xl-1.jpg" alt="Andrew standing next to a canyon" class="w-full" loading="lazy">
            </div>
    
            <div class="basis-6/12">
                <img src="aboutme-xl-5.jpg" alt="Andrew standing next to a canyon" class="w-full" loading="lazy">
            </div>
    
            <div class="basis-6/12">
                <img src="aboutme-xl-4.jpg" alt="Andrew standing next to a canyon" class="w-full" loading="lazy">
            </div>
        </div>

        <div class="flex justify-start">
            <p class="font-bold border-r border-b border-opacity-30 bg-emerald-400 bg-opacity-10 border-emerald-400 py-1 px-6 pr-8 rounded-br-full uppercase text-emerald-400 mb-6">about</p>
        </div>
    </div>
        
    <div class="mb-10">

        <div>
            <div class="h-12 overflow-x-hidden hidden lg:block mt-6">
                {#key i}
                    <h1 class="text-xl mb-2 px-4 absolute z-10 text-emerald-400" transition:fly={{ x: 200, duration: 2000 }}>
                        {messages[i] || ''}
                    </h1>
                {/key}
            </div>
        
            <p class="pb-4 px-4 font-thin">I'm Andrew, a determined and dedicated developer from Utah, I am currently working to finish a degree in Web and App Development at the Utah Valley University. I also have a great understanding of design methods and principles in addition to having intrigue in backend development. I am very eager to apply my skills to a great team and develop amazing websites and applications.</p>
        </div>
    </div>
</div> -->


<!-- EXTRA LARGE SCREENS -->
<!-- <div class="hidden xl:block">
    <div class="flex flex-wrap">

        <div class="basis-1/2">
            <img src="aboutme-xl-3.jpg" alt="Andrew standing next to a canyon" class="w-full" loading="lazy">
        </div>

        <div class="basis-1/2">
            <img src="aboutme-xl-1.jpg" alt="Andrew standing next to a canyon" class="w-full" loading="lazy">
        </div>



        <div class="basis-1/2 flex flex-wrap">
            <div class="basis-1/2">
                <img src="aboutme-xl-2.jpg" alt="Andrew standing next to a canyon" class="w-full" loading="lazy">
            </div>
            <div class="basis-1/2">
                <img src="aboutme-xl-4.jpg" alt="Andrew standing next to a canyon" class="w-full" loading="lazy">
            </div>
            <div class="basis-1/2">
                <img src="aboutme-xl-5.jpg" alt="Andrew standing next to a canyon" class="w-full" loading="lazy">
            </div>
            <div class="basis-1/2">
                <img src="aboutme-xl-6.jpg" alt="Andrew standing next to a canyon" class="w-full" loading="lazy">
            </div>
        </div>

        <div class="basis-1/2 static">
            <div class="flex justify-start absolute">
                <p class="font-bold border-r border-b border-opacity-30 bg-emerald-400 bg-opacity-10 border-emerald-400 py-1 px-6 pr-8 rounded-br-full uppercase text-emerald-400 mb-6">about</p>
            </div>
    
            <div class="h-full flex items-center">
                <div>
                    <div class="h-12 overflow-x-hidden">
                        {#key i}
                            <h1 class="text-xl mb-2 px-4 absolute z-10 text-emerald-400" transition:fly={{ x: 300, duration: 2000 }}>
                                {messages[i] || ''}
                            </h1>
                        {/key}
                    </div>
                
                    <p class="pb-4 px-4 font-thin">I'm Andrew, a determined and dedicated developer from Utah, I am currently working to finish a degree in Web and App Development at the 
                        Utah Valley University. I also have a great understanding of design methods and principles in addition to having intrigue in backend development. I am very eager to 
                        apply my skills to a great team and develop amazing websites and applications.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div> -->

<!-- 
                    <div class="h-12 overflow-x-hidden">
                        {#key i}
                            <h1 class="text-xl mb-2 px-4 absolute z-10 text-emerald-400" transition:fly={{ x: 300, duration: 2000 }}>
                                {messages[i] || ''}
                            </h1>
                        {/key}
                    </div>
 -->