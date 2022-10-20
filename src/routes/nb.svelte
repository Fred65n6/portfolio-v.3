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

<section class="header" id="top">
	<h4>Summer 2022</h4>
	<h2>Nørrebro bryghus</h2>
	<p class="-m-4 font-medium">(unsolicited redesign)</p>
	<img src="Mask Group 27.webp" alt="m! app" />
</section>
<section class="content py-10">
	<div class="m-4 md:m-10">
		<h2>Visual identity</h2>
		<p>
			Working with Nørrebro Bryghus, means working with a successfull company which already has a
			very defined visual identity. So when working with their website, one of the first think we
			thought we could do, was to incorporate their idenity even more in the webdesign, in order to
			make a bigger coherence between the brand and their website. That's why we chose to take the
			flower design from their bottle labels, and make them a main feature on the website. 🌸
		</p>
	</div>
	<img class="py-4" src="Group 66.svg" alt="m! app" />
</section>
<section class="content py-10">
	<img class="py-4" src="kelly-sikkema-0iKjge_aOVo-unsplash.webp" alt="m! app" />
	<div class="m-4  md:m-10">
		<h2>Information architecture</h2>
		<p>
			Nørrebro bryghus' website has a lot of pages... like a lot, and through user surveys, we could
			conclude that the users found it difficult to navigate the website. That's why one of our
			biggest tasks, working with this website, was creating a better information architecture, by
			rearranging the navigation, and the way the website was set up. ✍️
		</p>
	</div>
</section>

<section class="content-2 py-10">
	<div class="md:grid md:grid-cols-2 m-4 md:m-16 gap-[10rem] place-items-center">
		<div class="">
			<h2>Product display</h2>
			<p>
				To finish of this website and the webshop that we build, we wanted to display the products
				(meaning the beers 🍻) in a really nice way but we weren't able to find good picture
				material for this. So that's why I created these mock-ups in photoshop, which could show the
				simple but very beautiful label designs. <br />
				In the end we were really satisfied with the website we managed to create for Nørrebro bryghus.
				✨
			</p>
		</div>
		<div class="">
			<img class="py-4 md:py-4" src="Mask Group 9.webp" alt="m! app" />
		</div>
	</div>

	<div class="grid place-items-center m-4 md:m-10 md:mt-24 mt-10 ">
		<div class="knap-kasse">
			<div class="knap">
				<a target="blank" href="https://nb-bryghus.netlify.app/"> Visit the site </a>
			</div>
			<a class="top" href="#top">Back to top</a>
		</div>
	</div>
</section>

<style>
	.header {
		width: 100vw;
		padding-top: 3rem;
		display: grid;
		place-items: center;
		border: solid 2px #42506b;
	}

	.top {
		border: none;
		text-decoration: underline;
	}

	.top:hover {
		background-color: #fefefe;
		border: none;
		color: rgb(49, 138, 194);
	}

	.header img {
		padding-inline: 1.5rem;
		padding-block: 3rem;
	}

	.knap-kasse {
		display: grid;
		place-content: center;
		margin: 0 auto;
		justify-items: center;
		gap: 25px;
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
		display: grid;
		justify-items: center;
		place-items: center;
		border-bottom: solid 2px #42506b;
		border-left: solid 2px #42506b;
		border-right: solid 2px #42506b;
	}

	.content-2 {
		justify-items: center;
		place-items: center;
		border-bottom: solid 2px #42506b;
		border-left: solid 2px #42506b;
		border-right: solid 2px #42506b;
	}

	img {
		max-width: 90%;
	}

	@media (min-width: 600px) {
		.content {
			grid-template-columns: 1fr 1fr;
			gap: 10rem;
		}

		.header img {
			max-width: 750px;
		}

		.content {
			max-width: 97vw;
		}

		.content-2 {
			max-width: 97vw;
		}

		.header {
			width: 97vw;
			padding-top: 6rem;
		}

		.header img {
			padding: 3rem;
			width: 38rem;
		}
	}
</style>
