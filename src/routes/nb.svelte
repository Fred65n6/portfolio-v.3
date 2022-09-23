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

<Header />

<section class="header">
	<h4>Summer 2022</h4>
	<h2>Nørrebro bryghus</h2>
	<p class="-m-4 font-medium">(unsolicited redesign)</p>
	<img src="Mask Group 27.webp" alt="m! app" />
</section>
<section class="content">
	<div class="">
		<h2>Visual identity</h2>
		<p>
			Working with Nørrebro Bryghus, means working with a successfull company which already has a
			very defined visual identity. So when working with their website, one of the first think we
			thought we could do, was to incorporate this idenity even more in the webdesign, in order to
			make a bigger coherence between the brand and their website. That's why we chose to take the
			flowers from their bottle labels, and make them a main feature of the website. 🌸
		</p>
	</div>
	<img src="Group 66.svg" alt="m! app" />
</section>
<section class="content">
	<img src="kelly-sikkema-0iKjge_aOVo-unsplash.webp" alt="m! app" />
	<div class="">
		<h2>Information architecture</h2>
		<p>
			Nørrebro bryghus' website has a lot of pages, like a lot, and through user surveys, we could
			conclude that the users found it difficult to navigate the website. That's why one of our
			biggest tasks, working with this website, was the information architecture, and trying to
			rearrange the navigation, and the way the website was set up. ✍️
		</p>
	</div>
</section>

<section class="content-2">
	<div class="md:grid grid-cols-2">
		<div class="">
			<h2>Product display</h2>
			<p>
				To finish of this website and the webshop that we build, we wanted to display the products
				(meaning the beers 🍻) really nice. We weren't able to find good picture material for this.
				So that's why i created these mock-ups in photoshop, which could show the simple but very
				beautiful label design of labels. <br />
				In the end we were really satisfied with the website we managed to create for Nørrebro bryghus.
				✨
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

<style>
	.header {
		width: 97vw;
		padding-top: 6rem;
		display: grid;
		place-items: center;

		border: solid 2px #42506b;
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
