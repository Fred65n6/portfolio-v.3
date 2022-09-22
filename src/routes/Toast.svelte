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
	<h4>Winter 2021</h4>
	<h2>Toast no.9</h2>
	<p class="-m-4 font-medium">(Group project)</p>
	<img src="Mask Group 29.webp" alt="m! app" />
</section>
<section class="content">
	<div class="">
		<h2>Designing a logo</h2>
		<p>
			So we a have cool café, we have a great product... what are we missing? a logo! One of the
			first thing I did while working with Toast no.9 was designing a logo which would also set the
			tone for the upcomming webdesign. The owner of Toast no.9 told us that he loves everything
			nineties! And what was huge thing in the nineties? MTV! So inspired by the MTV logo, I came up
			with this logo design for toast no.9. ✏️
		</p>
	</div>
	<img src="Group 64.svg" alt="m! app" />
</section>
<section class="content">
	<img class="md:h-72" src="SPORTS TOAST.svg" alt="m! app" />
	<div class="">
		<h2>Showing the product <br /> in a new way</h2>
		<p>
			Like the owner of the café, we wanted to do things a little different with this one. So i
			started making this drawings of all the different toasts that Toast no.9 has to offer. The
			owener of the café really loved this playfull way, to display his product. ❤️
		</p>
	</div>
</section>

<section class="content-2">
	<div class="md:grid md:grid-cols-2">
		<div class="">
			<h2>Bringing the café to life</h2>
			<p>
				Inspired by what we already did with the drawings of the toasts, we wanted to include the
				all the different artifacts, that makes this cafés vibe so special, in the webdesign. So I
				also sketched all the different things around the café, in adobe Illustrator. 📻 <br />
				<br /> Bonus info: The old man who pops up different places on the site, is actually the owners
				father in law. See if you can find him! 🔍
			</p>
		</div>
		<img src="Group 69.svg" alt="m! app" />
	</div>
	<div class="m-8 mt-24 grid place-items-center">
		<div class="knap-kasse">
			<div class="knap">
				<a target="blank" href="https://skuret.eu/kea/toastno9/"> Visit the site </a>
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
