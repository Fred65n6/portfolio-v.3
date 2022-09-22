<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<div class="corner">
			<!-- <a sveltekit:prefetch href="/">
				<img class="hover:pulsate-fwd" src="./FM.svg" alt="SvelteKit" />
			</a> -->
		</div>

		<div class="desktop-menu">
			<ul>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">HOME</a>
				</li>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">Portfolio</a>
				</li>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">ABOUT ME</a>
				</li>
			</ul>
		</div>
	</nav>
</header>

<style>
	/* @media (min-width: 650px) { */
	header {
		max-width: 97vw;
		position: fixed;
		z-index: 1;
		display: flex;
		justify-content: space-between;
		top: 0;
		z-index: 3;
		width: 100%;
		border: solid 2px #42506b;
		padding-inline: 30px;
		align-items: center;
		background: #fefefe;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	.corner img {
		filter: invert(1);
		height: 1.4rem;
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
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 1em;
		font-weight: 400;
		font-size: 0.7rem;
		font-family: 'Inter', sans-serif;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>
