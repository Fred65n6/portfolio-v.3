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
	<h4>Winter 2021</h4>
	<h2>Toast no.9</h2>
	<p class="-m-4 font-medium">(Group project)</p>
	<img src="Mask Group 29.webp" alt="m! app" />
</section>
<section class="content py-10">
	<div class="m-4 md:m-10 ">
		<h2>Designing a logo</h2>
		<p>
			So we a have cool café, we have a great product... what are we missing? a logo! One of the
			first thing I did while working with Toast no.9 was designing a logo which would also set the
			tone for the upcomming webdesign. The owner of Toast no.9 told us that he loves everything
			nineties! And what was huge thing in the nineties? MTV! So inspired by the MTV logo, I came up
			with this logo design for toast no.9. ✏️
		</p>
	</div>
	<img class="py-4" src="Group 64.svg" alt="m! app" />
</section>
<section class="content py-10">
	<img class="md:h-72 py-4" src="SPORTS TOAST.svg" alt="m! app" />
	<div class="m-4 md:m-10">
		<h2>Showing the product <br /> in a new way</h2>
		<p>
			Like the owner of the café, we wanted to do things a little different with this one. So i
			started making these drawings of all the different sandwiches that Toast no.9 has to offer.
			The owner of the café really loved this playfull way, to display his product. ❤️
		</p>
	</div>
</section>

<section class="content-2 py-10">
	<div class="md:grid md:grid-cols-2 m-4 md:m-16 gap-[10rem] place-items-center ">
		<div class=" ">
			<h2>Bringing the café to life</h2>
			<p>
				Inspired by what we already did with the drawings of the toasts, we wanted the webdesign to
				include all the different artifacts, that makes this cafés vibe so special. So I also
				sketched all the different things around the café, and took them in to adobe Illustrator. 📻 <br
				/>
				<br /> Bonus info: The old man who pops up in different places on the site, is actually the owners
				father in law. See if you can find him! 🔍
			</p>
		</div>
		<img class="py-4" src="Group 69.svg" alt="m! app" />
	</div>
	<div class="m-4 md:mt-24 mt-10 grid place-items-center">
		<div class="knap-kasse">
			<div class="knap">
				<a target="blank" href="https://skuret.eu/kea/toastno9/"> Visit the site </a>
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
			max-width: 97vw;
		}

		.header img {
			max-width: 750px;
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
