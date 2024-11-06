<script>
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Location from './Location.svelte';
	import Title from './Title.svelte';
</script>

<svelte:head>
	<title>Tat's Home Made</title>
	<meta name="description" content="Tat's Home Made - Quality Vegetarian Meals" />
</svelte:head>

<Title />
<div class="container mx-auto">
	<About />
	<Contact />
	<Location />
</div>
