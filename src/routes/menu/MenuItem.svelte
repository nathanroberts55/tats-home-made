<script>
	let props = $props();
</script>

<div class="card w-96 bg-base-100 shadow-xl max-md:w-80">
	<figure>
		<img src={props.image} alt="Shoes" />
	</figure>
	<div class="card-body">
		<p class="card-title font-display">{props.name}</p>
		<p class="">{props.description}</p>
		<p class="text-right text-lg font-bold">${props.price}</p>
	</div>
</div>
