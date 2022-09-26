<script context="module">
	export const prerender = true;
	import Header from '$lib/header/Header.svelte';
</script>

<svelte:head>
	<title>Frederik Milland | UI/UX Designer</title>
</svelte:head>

<Header />

<section class="hero">
	<!-- <img src="Group 58.svg" alt="hero" /> -->

	<img class="mobil-hero w-full" src="Group 58.svg" alt="" />

	<div class="hero-text ">
		<div class="md:h-52" />
		<h1 class="mx-4 md:mx-0 md:my-20 my-10 md:-ml-24 md:max-w-[200%] max-w-[90%]">
			Hi there, i'm <span class="font-semibold md:tracking-in-expand-fwd">Frederik Milland!</span>
			<br />

			a UI / UX designer and problem solver 🔧<br />
			who's creating user friendly design solutions 🏵️<br />
			from beautiful Copenhagen🌇
		</h1>
	</div>
	<div class="desktop-hero w-full h-[36rem]">
		<p class="text-[#5F739B]">.</p>
		<!-- <img class="" src="Group 76.svg" alt="" /> -->
	</div>
</section>

<section id="portfolio">
	<a sveltekit:prefetch href="/makeimpact">
		<section class="makeimpact ">
			<div class="md:m-10 mx-4">
				<h4>Fall 2022</h4>
				<h2>The make!mpact app</h2>
				<p>
					How do we make an investments platform for the new generation of investors? And exactly
					how do we make sustainablity data accesible and understanable for people, with no former
					experience in impact investment?
				</p>
			</div>
			<div class="pt-8 md:pt-0">
				<img src="Mask Group 25.webp" alt="m! app" />
			</div>
		</section>
	</a>

	<section class="double-section">
		<a sveltekit:prefetch href="/nb">
			<div class="nb">
				<div class="md:ml-10  mx-4">
					<h4>Summer 2022</h4>
					<h2>Nørrebro bryghus</h2>
					<p>How do we take a very page-heavy website and make it more manageable for the user?</p>
				</div>
				<div class="pt-12">
					<img src="Mask Group 9.webp" alt="nørrebro bryhus øl" />
				</div>
			</div>
		</a>

		<a sveltekit:prefetch href="/Vildskud">
			<div class="vildskud">
				<div class="md:ml-10  mx-4">
					<h4>Spring 2022</h4>
					<h2>Vildskud festival</h2>
					<p>
						Is it possible to make an exciting website for a theater festival, while also keeping
						the websites environmental impact as low as possible?
					</p>
				</div>
				<div class="pt-12">
					<img class="w-56" src="Group 63.svg" alt="vildskud logo" />
				</div>
			</div>
		</a>
	</section>

	<a sveltekit:prefetch href="/Toast">
		<section class="toast ">
			<div class="md:m-10  mx-4 ">
				<h4>Winter 2021</h4>
				<h2>TOAST no.9</h2>
				<p>
					How do you take one of the funniest and craziest cafés in copenhagen, and translate that
					vibe into a webpage, which also has all the functionalities of a modern day webshop?
				</p>
			</div>
			<div>
				<img src="Group 64.svg" alt="Toast logo" />
			</div>
		</section>
	</a>
</section>

<!-- <a sveltekit:prefetch href="/about"> -->
<section id="about-me" class="about">
	<div class="md:m-10 mx-4 ">
		<h2>About me</h2>
		<p>
			Ever since i was a young boy, I always imagined that I would be working with something
			creative. At a very young age I fell in love with drawing. 🖍️ I drew cartoon figures and
			funnny animals. Later on that passion transpired in to a love for playing and making music. 🎸
			These passions still follow me to this day, but now there has just been added one more on top.
			That passion is UI/UX- and graphic design! ❤️ Doing graphic design as well as webpages and
			apps, allows me to be playfull and creative, while also doing something that is really
			helpfull to others! And fot me that is a win/win 🏆
		</p>
	</div>
	<div class="">
		<img src="Mask Group 11.webp" alt="Billede af Frederik Milland" />
	</div>
</section>

<!-- </a> -->
<style>
	.hero {
		width: 100%;
		display: grid;
		place-items: center;
		text-align: left;
		border: solid 2px #42506b;
		padding-bottom: 3rem;
	}

	.hero img {
		max-width: 130vw;
	}

	.desktop-hero {
		display: none;
	}

	/* .hero img {
		max-width: 110%;
	} */

	/* .hero-text {
		padding-block: 6rem;
		padding-top: 8rem;
	} */

	.makeimpact {
		padding-block: 4rem;
		width: 100%;
		border-bottom: solid 2px #42506b;
		border-left: solid 2px #42506b;
		border-right: solid 2px #42506b;
		display: grid;
		place-items: center;
	}

	.makeimpact:hover {
		background-color: #e45a5a;
	}
	.makeimpact:hover h2 {
		color: #f6f5f3;
	}
	.makeimpact:hover p {
		color: #f6f5f3;
	}
	.makeimpact:hover h4 {
		color: #f6f5f3;
	}

	.double-section {
		display: grid;
	}

	.nb {
		display: grid;
		padding-block: 2rem;
		place-items: center;
		width: 100%;
		border-bottom: solid 2px #42506b;
		border-left: solid 2px #42506b;
		border-right: solid 2px #42506b;
	}

	.vildskud {
		display: grid;
		padding-block: 4rem;
		place-items: center;
		width: 100%;
		border-bottom: solid 2px #42506b;
		border-right: solid 2px #42506b;
		border-left: solid 2px #42506b;
	}

	.nb:hover {
		background-color: #5f739b;
	}
	.nb:hover h2 {
		color: #f6f5f3;
	}
	.nb:hover p {
		color: #f6f5f3;
	}
	.nb:hover h4 {
		color: #f6f5f3;
	}

	.vildskud:hover {
		background-color: #4bbea7;
	}
	.vildskud:hover h2 {
		color: #f6f5f3;
	}
	.vildskud:hover p {
		color: #f6f5f3;
	}
	.vildskud:hover h4 {
		color: #f6f5f3;
	}

	.toast {
		padding-block: 4rem;
		width: 100%;
		border-bottom: solid 2px #42506b;
		border-left: solid 2px #42506b;
		border-right: solid 2px #42506b;
		display: grid;
		place-items: center;
	}

	.toast:hover {
		background-color: #e9ac44;
	}
	.toast:hover h2 {
		color: #f6f5f3;
	}
	.toast:hover p {
		color: #f6f5f3;
	}
	.toast:hover h4 {
		color: #f6f5f3;
	}

	.about {
		padding-block: 4rem;
		width: 100%;
		border-bottom: solid 2px #42506b;
		border-left: solid 2px #42506b;
		border-right: solid 2px #42506b;
		display: grid;
		place-items: center;
	}

	.about:hover {
		background-color: #42506b;
	}
	.about:hover h2 {
		color: #f6f5f3;
	}
	.about:hover p {
		color: #f6f5f3;
	}

	img {
		max-width: 85vw;
	}

	@media (min-width: 600px) {
		.hero {
			grid-template-columns: 1fr 1fr;
			text-align: left;
			padding-bottom: 0rem;
		}

		.mobil-hero {
			display: none;
		}

		.desktop-hero {
			display: block;
			background-image: url('../../static/Group 76.svg');
			/* background-image: url('Group 77.svg'); */
			background-size: cover;
		}

		.hero-text {
			margin-top: -11rem;
		}

		img {
			max-width: 350px;
		}

		img {
			max-width: 450px;
		}

		.hero img {
			max-width: 100%;
			max-height: 100%;
		}

		.makeimpact {
			grid-template-columns: 1fr 1fr;
		}

		.double-section {
			grid-template-columns: 1fr 1fr;
		}

		.double-section img {
			max-width: 350px;
		}

		.nb {
			height: 450px;
			grid-template-columns: 1fr 1fr;
		}

		.vildskud {
			height: 450px;
			border-left: none;
			grid-template-columns: 1fr 1fr;
		}

		.toast {
			grid-template-columns: 1fr 1fr;
		}

		.about {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
