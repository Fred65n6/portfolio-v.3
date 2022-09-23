<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<div class="corner hover:pulsate-fwd ">
			<a sveltekit:prefetch href="/">
				<p class="font-medium text-black">FM</p>
			</a>
		</div>

		<div class="desktop-menu">
			<ul>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">HOME</a>
				</li>
				<li>
					<a href="#portfolio">PORTFOLIO</a>
				</li>
				<li>
					<a href="#about-me">ABOUT ME</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
	/* @media (min-width: 650px) { */
	header {
		max-width: 97vw;
		position: sticky;
		z-index: 1;
		display: flex;
		justify-content: space-evenly;
		top: 0;
		z-index: 3;
		width: 100%;
		/* border: solid 2px #42506b; */
		border-top: solid 2px #42506b;
		border-left: solid 2px #42506b;
		border-right: solid 2px #42506b;
		padding-inline: 30px;
		align-items: center;
		background: #fefefe;
	}

	p {
		font-family: 'recursive';
		color: #42506b;
		color: black;
	}

	nav {
		display: flex;
		justify-content: space-evenly;
	}

	.corner img {
		filter: invert(1);
		height: 1.4rem;
	}

	.conrer:hover {
	}

	a:hover {
		text-decoration: underline;
	}

	nav {
		position: sticky;
		width: 100%;
		display: flex;
	}
	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		align-items: center;
		list-style: none;
		background-size: contain;
		gap: 20px;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		font-weight: 400;
		font-size: 0.7rem;
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	@media (min-width: 650px) {
		nav {
			justify-content: space-between;
		}
	}
</style>
