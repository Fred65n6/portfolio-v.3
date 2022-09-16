<script context="module">
	import { browser, dev } from '$app/env';

	// we don't need any JS on this page, though we'll load
	// it in dev so that we get hot module replacement...
	export const hydrate = dev;

	// ...but if the client-side router is already loaded
	// (i.e. we came here from elsewhere in the app), use it
	export const router = browser;

	// since there's no dynamic data here, we can prerender
	// it so that it gets served as a static asset in prod
	export const prerender = true;
	import Header from '$lib/header/Header_2.svelte';
</script>

<section class="header">
	<h4>Spring 2022</h4>
	<h2>Vildskud festival</h2>
	<img src="Mask Group 28.png" alt="m! app" />
</section>
<section class="content">
	<div class="">
		<h2>Designing for sustainability</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p>
	</div>
	<!-- <img class="" src="earth-leaf-24-filled.svg" alt="m! app" /> -->
</section>
<section class="content">
	<img src="Group 68.png" alt="m! app" />
	<div class="">
		<h2>Redefining the logo</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p>
	</div>
</section>
<section class="content">
	<div class="">
		<h2>Show it don't tell it</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p>
	</div>
	<img src="stk_3.svg" alt="m! app" />
</section>

<Header />

<style>
	.header {
		width: 97vw;
		padding-top: 6rem;
		display: grid;
		place-items: center;
		border-bottom: solid 2px #42506b;
		border-left: solid 2px #42506b;
		border-right: solid 2px #42506b;
	}

	.header img {
		padding: 4rem;
	}

	.content {
		padding: 5rem;
		width: 97vw;
		display: grid;
		justify-items: center;
		border-bottom: solid 2px #42506b;
		border-left: solid 2px #42506b;
		border-right: solid 2px #42506b;
	}

	.content img {
		padding-block: 4rem;
	}

	@media (min-width: 600px) {
		.content {
			grid-template-columns: 1fr 1fr;
			gap: 10rem;
		}

		.header img {
			max-width: 750px;
		}

		.content img {
			max-width: 450px;
			padding-block: 0rem;
		}
	}
</style>
