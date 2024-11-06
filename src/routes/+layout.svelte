<script>
	import '../app.css';
	import Footer from './Footer.svelte';
	import Navbar from './Navbar.svelte';
	let { children } = $props();
</script>

<!-- <Navbar /> -->
<main class="mx-auto flex w-full grow flex-col">
	{@render children()}
</main>
<Footer />
