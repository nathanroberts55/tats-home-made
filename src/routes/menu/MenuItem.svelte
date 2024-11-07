<script>
	let props = $props();
</script>

<div class="card w-96 bg-base-100 shadow-xl max-md:w-80">
	<figure>
		<img src={props.image} alt="Shoes" />
	</figure>
	<div class="card-body">
		<p class="card-title">{props.name}</p>
		<p>{props.description}</p>
		<p class="text-right text-lg font-bold">${props.price}</p>
	</div>
</div>
