<script>
    import { onMount } from 'svelte';

    let onMountMe = 'translate-y-[-400%]'
    let onMountDevelop = 'left-[-100%]'
    let onMountDesign = 'right-[-100%]'

    onMount(() => {
        setTimeout(() => {
            onMountMe = 'translate-y-0'
            onMountDevelop = 'left-0'
            onMountDesign = 'right-0'
        }, 200)
    })
</script>


<div class="flex justify-center h-full items-center w-full overflow-x-hidden">
    <div class="">
        <div class="{onMountMe} transition-all duration-1000">
            <div class="flex justify-center my-4 relative">
                <img src="profilePicture.png" class="w-3/12 rounded-full shadow-md shadow-zinc-950 animate-hover" loading="lazy" alt="Andrew Kesters face">
            </div>
        </div>
        
        <div class="flex">
            <div class="px-8 {onMountDevelop} transition-all duration-1000 relative">
                <h1 class="my-4 text-4xl text-center md:text-left text-emerald-400">Developer</h1>
                <p class="text-lg font-light">Frontend developer with a passion for learning new technologies.</p>
            </div>

            <div class="px-8 {onMountDesign} transition-all duration-1000 relative">
                <h1 class="my-4 text-4xl text-center md:text-left text-emerald-400">Designer</h1>
                <p class="text-lg font-light">I have a great eye for creating visually attractive UI</p>
            </div>
        </div>
    </div>
</div>

<!-- Hello, I'm a Developer at Utah Valley University. I have Great determination to get any job done and ensure I learn from every experience to come out better than before. I have a strong understanding of CSS, HTML, and JavaScript with an great understanding of various Web tools, libraries, and frameworks. So, check out my page, stay a while, and see what I have accomplished! -->