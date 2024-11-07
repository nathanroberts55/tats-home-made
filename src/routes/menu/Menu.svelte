<script>
	import menuItems from '$lib/data/menuItems.json';
	import MenuItem from './MenuItem.svelte';
</script>

<section class="mx-8 my-10 mt-24 max-md:mx-8">
	<div class="mx-auto text-center">
		<p class="font-display text-5xl font-bold">Menu</p>
	</div>
	<div class="z-10 my-12 grid grid-cols-3 gap-4 max-md:grid-cols-none">
		{#each menuItems as item}
			<MenuItem {...item} />
		{/each}
	</div>
</section>
