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
	<h4>Spring 2022</h4>
	<h2>Vildskud festival</h2>
	<p class="-m-4 font-medium">(Group project)</p>
	<img src="Mask Group 28.webp" alt="m! app" />
</section>
<section class="content py-10">
	<div class="m-4 md:m-10">
		<h2>Designing for sustainability</h2>
		<p>
			The big obstacle in this project, was keeping the amount of energy needed to display this
			website, as low as possible, while also promoting a theatre festival. In our group we decided
			to go all out on the sustanability part, so we decided not to use any .jpg, .png, animations
			or videos. 🤨
		</p>
	</div>
	<img class="w-52 py-4" src="earth-leaf-24-filled.svg" alt="m! app" />
</section>
<section class="content py-10">
	<img class="py-4" src="Group 68.webp" alt="m! app" />
	<div class="m-4 md:m-10">
		<h2>Redefining the logo</h2>
		<p>
			the exsisting logo for the festival, only existed in a .png format, which of course didn't
			allign with our vision for this website. So i started sketching a new logo for the festival. I
			tried to keep the main features of the original logo, while also simplifying the logo, so it
			would be easier to use in all sizes and platforms. ❣️
		</p>
	</div>
</section>

<section class="content-2 py-10">
	<div class="md:grid md:grid-cols-2 m-4 md:m-16 gap-[10rem] place-items-center">
		<div class="">
			<h2>Working around the posters</h2>
			<p>
				So we're promoting a theatre festival, and all the different plays have some great posters
				made, but again that doesn't really allign with the purpose of this website, so what can we
				do? What we did was to outline the posters, and then use that graphic to display the
				different plays posters. Maybe not the most telling way to display what a play is about, but
				again, sustainability was the main focus of this project. 🌿
			</p>
		</div>
		<img class="py-4" src="stk_3.svg" alt="m! app" />
	</div>
	<div class="m-4 md:mt-24  mt-10 grid place-items-center">
		<div class="knap-kasse">
			<div class="knap">
				<a target="blank" href="https://vildskud.netlify.app/"> Visit the site </a>
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
