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

<a href="https://xd.adobe.com/view/517c9b01-fdac-4f02-90d8-4c3ff1f828ff-042f/?fullscreen">
	<section class="header">
		<h4>Fall 2022</h4>

		<h2>The make!mpact app</h2>
		<img src="Mask Group 26.webp" alt="m! app" />
	</section>
</a>

<section class="content">
	<div class="">
		<h2>Where we started</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p>
	</div>
	<img src="Group 58.webp" alt="m! app" />
</section>

<section class="content">
	<img src="Group 13.webp" alt="m! app" />
	<div class="">
		<h2>Keeping track</h2>
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
		<h2>The make!mpact app</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p>
	</div>
	<img src="Mask Group 25.webp" alt="m! app" />
</section>

<!-- <div class="knap-kasse">
	<div class="knap">
		<a
			target="blank"
			href="https://xd.adobe.com/view/517c9b01-fdac-4f02-90d8-4c3ff1f828ff-042f/?fullscreen"
		>
			Explore the prototype
		</a>
	</div>
</div> -->

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
		padding: 3rem;
		width: 38rem;
	}

	a:hover {
		background-color: #e45a5a;
	}

	.knap-kasse {
		display: grid;
		place-content: center;
		margin: 0 auto;
	}

	.knap {
		color: #42506b;
		border: solid 3px #42506b;
		padding-block: 1rem;
		font-weight: 900;
		padding-inline: 2rem;
	}

	.knap:hover {
		background-color: #e45a5a;
		color: white;
		border: solid 3px white;
		transition: ease-in(1s);
	}

	.content {
		padding: 3rem;
		width: 97vw;
		display: grid;
		justify-items: center;
		place-items: center;
		border-bottom: solid 2px #42506b;
		border-left: solid 2px #42506b;
		border-right: solid 2px #42506b;
	}

	.content img {
		padding-block: 4rem;
		max-width: 350px;
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
