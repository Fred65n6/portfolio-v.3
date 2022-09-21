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
	<h4>Summer 2022</h4>
	<h2>Nørrebro bryghus</h2>
	<img src="Mask Group 27.webp" alt="m! app" />
</section>
<section class="content">
	<div class="">
		<h2>Visual identity</h2>

		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p>
	</div>
	<img src="Group 66.svg" alt="m! app" />
</section>
<section class="content">
	<img src="kelly-sikkema-0iKjge_aOVo-unsplash.webp" alt="m! app" />
	<div class="">
		<h2>Information architecture</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
			autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus, voluptatum.
			Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem temporibus sit
			quaerat impedit exercitationem animi labore unde eveniet architecto ratione, tempora magni
			inventore. Culpa.
		</p>
	</div>
</section>

<section class="content-2">
	<div class="md:grid grid-cols-2">
		<div class="">
			<h2>Product display</h2>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod totam in alias aliquam
				autem tempore est voluptatum modi mollitia saepe exercitationem quis? Temporibus,
				voluptatum. Suscipit debitis, soluta a quos accusamus tempora. Velit voluptas, autem
				temporibus sit quaerat impedit exercitationem animi labore unde eveniet architecto ratione,
				tempora magni inventore. Culpa.
			</p>
		</div>
		<div class="">
			<img src="Mask Group 9.webp" alt="m! app" />
		</div>
	</div>

	<div class="grid place-items-center m-8 mt-24 ">
		<div class="knap-kasse">
			<div class="knap">
				<a target="blank" href="https://nb-bryghus.netlify.app/"> Visit the site </a>
			</div>
		</div>
	</div>
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
		padding: 3rem;
		width: 38rem;
	}

	.knap-kasse {
		display: grid;
		place-content: center;
		margin: 0 auto;
	}

	a {
		color: #42506b;
		border: solid 3px #42506b;
		padding-block: 1rem;
		font-weight: 900;
		padding-inline: 2rem;
	}

	a:hover {
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

	.content-2 {
		padding: 3rem;
		width: 97vw;
		display: grid;
		justify-items: center;
		place-items: center;
		border-bottom: solid 2px #42506b;
		border-left: solid 2px #42506b;
		border-right: solid 2px #42506b;
	}

	.content-2 img {
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

		.content-2 img {
			max-width: 450px;
			padding-block: 0rem;
			margin-left: 8rem;
		}
	}
</style>
