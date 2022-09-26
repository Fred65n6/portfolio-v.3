<script>
	import Footer from './Footer.svelte';
	import '../app.css';
</script>

<main>
	<slot />
</main>

<div class="footer">
	<Footer class="" />
</div>

<style>
	.footer {
		display: grid;
		place-items: center;
	}
</style>
