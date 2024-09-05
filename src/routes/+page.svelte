<script>
    import Modal from './contact/messageModal.svelte'
	import Home from './home/+page.svelte'
	import About from './about/+page.svelte'
	import Work from './work/+page.svelte'
	import Navigation from './navigation/+page.svelte'
	import Footer from './footer/+page.svelte'
	import { onMount, tick } from 'svelte'
	import Contact from './contact/+page.svelte'
	// import { createEventDispatcher } from "svelte"
    // const dispatch = createEventDispatcher()
	import {messageModal, message} from './contact/messageModal.js'
	import {workSection, aboutSection, contactSection} from './stores.js'

	let isLoading = true

	let home
	let about
	let work
	let smNAV = false
	let contact
	let scrollPosition
	let popUpModal = 'top-[110%]'
	let popUpBackground = 'hidden'

	function scrollToHome() {
		home.scrollIntoView({behavior: 'smooth'})
	}

	async function scrollToAbout() {
		await tick()
		if (about) {
			about.scrollIntoView({behavior: 'smooth'})
			aboutSection.set(false)
		}
	}

	async function scrollToWork() {
		await tick()
		if (work) {
			work.scrollIntoView({behavior: 'smooth'})
			workSection.set(false)
		}
	}

	async function scrollToContact() {
		await tick()
		if (contact) {
			contact.scrollIntoView({behavior: 'smooth'})
			contactSection.set(false)
		}
	}

	function handleScroll() {
		scrollPosition = window.scrollY;
        if (about) {
            smNAV = window.scrollY > about.offsetTop;
        }
	}

	

	let activeSection = '';

    $: {
		if (home && about && work && contact) {
			if (scrollPosition < about.offsetTop){
				activeSection = 'home';
			} else if (scrollPosition < work.offsetTop) {
				activeSection = 'about';
			} else if (scrollPosition < contact.offsetTop){
				activeSection = 'work';
			} else {
				activeSection = 'contact';
			}
		}
    }

	onMount(() => {
		setTimeout(() => {
            isLoading = false
        }, 800)

		setTimeout(() => {
			// checks when the page is mounted and looks if the store is true or false and will scroll accordingly
			tick().then(() => {
				if ($workSection === true) {
					scrollToWork()
				}
				else if ($aboutSection === true) {
					scrollToAbout()
				}
				else if ($contactSection === true) {
					scrollToContact()
				}
			})
			

			window.addEventListener('scroll', handleScroll)
			handleScroll()
			return () => {
				window.removeEventListener('scroll', handleScroll)
			}
		}, 900)
	})

	// reactive statement will also check if the store is true or false
	$: if ($workSection && work) {
		scrollToWork()
	} else if ($aboutSection && about) {
		scrollToAbout()
	} else if ($contactSection && contact) {
		scrollToContact()
	}

	$: if ($messageModal === true) {
		popUpModal = 'top-0'
		popUpBackground = 'block'
	} else if ($messageModal === false) {
		popUpModal = 'top-[110%]'
		popUpBackground = 'hidden'
	}

</script>

{#if isLoading}
    <div class="flex justify-center items-center h-screen shadow-lg shadow-emerald-400">
        <img src="../../../portfolio_logo_lg.png" alt="Andrew's first and last inital" class="border p-2 rounded-md shadow-md border-emerald-400 animate-pulse w-20 h-20 shadow-2xl shadow-loadShad shadow-[0_0_75px_25px_rgba(52,211,153,0.25)]">
    </div>
{:else}

	<div class="">
		{#if smNAV}
			<div class="fixed right-4 top-1/2 z-30 h-full hidden lg:block">
				<nav class="bg-zinc-900 rounded-full py-4 border border-white border-opacity-20 bg-opacity-60 backdrop-blur-sm shadow-md">
					<ul class="px-4">
						<li class="text-center hover:text-emerald-600 pb-2" class:currentPage={activeSection === 'home'}>
							<button class=" transition-all duration-500" on:click={scrollToHome}>H</button>
						</li>
						<li class="text-center hover:text-emerald-600 pb-2" class:currentPage={activeSection === 'about'}>
							<button class=" transition-all duration-500" on:click={scrollToAbout}>A</button>
						</li>
						<li class="text-center hover:text-emerald-600 pb-2" class:currentPage={activeSection === 'work'}>
							<button class=" transition-all duration-500" on:click={scrollToWork}>W</button>
						</li>
						<li class="text-center hover:text-emerald-600 pb-2 mb-2 border-b border-opacity-30 border-white" class:currentPage={activeSection === 'contact'}>
							<button class=" transition-all duration-500" on:click={scrollToContact}>C</button>
						</li>
						<li class="text-center hover:text-emerald-600">
							<a href="MyResume2024.pdf" target="_blank">R</a>
						</li>
					</ul>
				</nav>
			</div>
		{/if}

		<div class="h-full w-full fixed z-40 bg-black bg-opacity-70 {popUpBackground}"></div>

		<Navigation on:scrollHome={scrollToHome} on:scrollAbout={scrollToAbout} on:scrollWork={scrollToWork} on:scrollContact={scrollToContact}/>

		<div class="{popUpModal} fixed z-50 flex justify-center h-full w-full items-center transition-all duration-500">
			<Modal />
		</div>

		<div class="h-screen relative" bind:this={home}>
				<!-- <video class="object-cover w-full h-full opacity-40" loop autoplay muted>
					<source src="home_video2.mp4" type="video/mp4" class="">
				</video> -->
			<div class="absolute z-10 top-0 flex justify-center h-full w-full items-center">
				<Home />
			</div>
		</div>

		<div class="bg-black border-y border-white border-opacity-10" bind:this={about}>
			<About />
		</div>

		<div class="bg-black border-b border-white border-opacity-10 pb-4" bind:this={work} id="workSection">
			<Work />
		</div>

		<div class="bg-black border-b border-white border-opacity-10" bind:this={contact}>
			<Contact />
		</div>

		<div class="bg-black" >
			<Footer on:scrollHome={scrollToHome} on:scrollAbout={scrollToAbout} on:scrollWork={scrollToWork} on:scrollContact={scrollToContact}/>
		</div>
	</div>

{/if}

<style>
	.currentPage {
		color: rgb(16 185 129);
	}
</style>