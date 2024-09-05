<script>
    import {messageModal, message} from './messageModal.js'

    let formData = {
        name: '',
        email: '',
        message: ''
    }

    async function sendMessage() {
        if (!formData.name || !formData.email || !formData.message) {
            return
        }
        try {
            // const response = await fetch('https://andrew-kester-portfolio-server.vercel.app/send', {
            const response = await fetch('contact/sendMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })

            if (!response.ok) {
                console.error('Server responded with an error:', response.status, await response.text());
                return;
            } else if (response.ok) {
                messageModal.set(true)
                message.set('Awesome! Your message has been sent! I will get back to you as soon as possible.')
            }

        } catch (error) {
            console.error('An error occurred while sending the message:', error)
        } 
    

        formData.name = ''
        formData.email = ''
        formData.message = ''
    }
    
</script>


<div class="md:h-screen">

    <div class="md:h-1/6">
        <div class="flex justify-start" >
            <p class="font-bold border-b border-r border-opacity-30 bg-emerald-400 bg-opacity-10 border-emerald-400 py-1 px-6 pr-8 rounded-br-full uppercase text-emerald-400">Contact</p>
        </div>
    </div>
    
    <div class="md:h-5/6 flex items-center justify-center w-full">
        <div class="mx-4 w-8/12">
            <h2 class="text-center text-2xl text-emerald-400 mb-4">Send me a message!</h2>
            <p class="text-center mb-12">If you have any questions, a problem to solve or even just want to say hi.</p>
            
            <form on:submit|preventDefault={sendMessage}>
                <div class="hidden lg:flex lg:justify-between">
                    <div class="basis-5/12">
                        <label for="name focus:text-emerald-400">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter Your Name..." bind:value={formData.name} class="font-thin bg-inherit border-b border-white border-opacity-20 border-t-0 border-l-0 border-r-0 pl-0 w-full placeholder:text-white placeholder:text-opacity-30 focus:ring-0 focus:border-emerald-400 focus:border-opacity-60" required>
                    </div>
                
                    <div class="basis-5/12">
                        <label for="email">Your Email</label>
                        <input type="text" id="email" name="email" placeholder="Enter Your email..." bind:value={formData.email} class="font-thin bg-inherit border-b border-white border-opacity-20 border-t-0 border-l-0 border-r-0 pl-0 w-full placeholder:text-white placeholder:text-opacity-30 focus:ring-0 focus:border-emerald-400 focus:border-opacity-60" required>
                    </div>
                </div>
    
                <div class=" lg:hidden ">
                    <div class="">
                        <label for="name focus:text-emerald-400">Your Name</label>
                        <input type="text" id="name" name="name" placeholder="Enter Your Name..." bind:value={formData.name} class="font-thin bg-inherit border-b border-white border-opacity-20 border-t-0 border-l-0 border-r-0 pl-0 w-full placeholder:text-white placeholder:text-opacity-30 focus:ring-0 focus:border-emerald-400 focus:border-opacity-60" required>
                    </div>
                
                    <div class="mt-12">
                        <label for="email">Your Email</label>
                        <input type="text" id="email" name="email" placeholder="Enter Your email..." bind:value={formData.email} class="font-thin bg-inherit border-b border-white border-opacity-20 border-t-0 border-l-0 border-r-0 pl-0 w-full placeholder:text-white placeholder:text-opacity-30 focus:ring-0 focus:border-emerald-400 focus:border-opacity-60" required>
                    </div>
                </div>
            
                <div class="mt-12">
                    <label for="message">Your Message</label>
                    <textarea id="message" name="message" placeholder="Write something..." style="height:40px" bind:value={formData.message} class="font-thin w-full bg-inherit border-b border-white border-opacity-20 border-t-0 border-l-0 border-r-0 pl-0 placeholder:text-white placeholder:text-opacity-30 focus:ring-0 focus:border-emerald-400 focus:border-opacity-60" required></textarea>
                </div>
            
                <div class="flex justify-center my-12">                    
                    <button class=" py-2 px-6 hover:bg-emerald-500 border border-white rounded-full text-white transition-all duration-500 hover:translate-y-[-0.5rem] border-opacity-20 bg-zinc-900 bg-opacity-60">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>