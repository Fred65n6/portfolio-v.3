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
	<h4>Fall 2022</h4>

	<h2>The make!mpact app</h2>
	<img src="Mask Group 26.webp" alt="m! app" />
</section>

<section class="content py-10">
	<div class="m-4 md:m-10">
		<h2>Where we started</h2>
		<p>
			So when I first started at make!impact, there already was an app. The app had most of the
			functionalities it has today, but it really missed some of the "make!mpact vibe". The app was
			very black on white, and without much to treat the users. So the first part of this task was
			to start prototyping, and coming up with new design ideas. 🤔
		</p>
	</div>
	<img class="py-4" src="Group 58.webp" alt="m! app" />
</section>

<section class="content py-10">
	<img class="py-4" src="Group 13.webp" alt="m! app" />
	<div class="m-4 md:m-10">
		<h2>Keeping track</h2>
		<p>
			Working with a complicated investment app, there is a lot of different screens and
			functionalities to keep track with. 😅 Everything has to be connected somehow, and most
			importantly of all, it HAS to make sense for even the most unexperienced user. In this app we
			also have a lot of information on how the companies are performing when it comes to
			sustainablity and social impact. All this data had to somehow be condensed and made
			understandable in the app.
		</p>
	</div>
</section>
<section class="content-2 py-10">
	<div class=" md:grid md:grid-cols-2 m-4 md:m-16 gap-[10rem] place-items-center">
		<div class="">
			<h2>The make!mpact app</h2>
			<p>
				After a lot of protoyping and feedback sessions, we ended up with a slick new look app for
				make!mpact. The design and the app itself caters to young people, who wants to get into
				investing, and most importantly wants to do sustainable innvestments. <br />
				The black and pink look gives the app a more fresh and interesting vibe, compared to most conventional
				investing apps, which are often just black and white and filled with a lot of heavy data as soon
				as you open the app. Have a look at the protoype and see how you feel about the app. 😊
			</p>
		</div>
		<img class="py-4" src="Mask Group 25.webp" alt="m! app" />
	</div>
	<div class="pb-4 m-4 md:m-10 md:mt-24 mt-10 grid place-items-center">
		<div class="knap-kasse">
			<div class="knap">
				<a
					target="blank"
					href="https://xd.adobe.com/view/572d0309-dcd9-4511-85c2-6fbbb30237f8-027e/?fullscreen"
				>
					Explore the prototype
				</a>
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
