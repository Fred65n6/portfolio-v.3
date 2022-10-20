<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<div class="corner hover:pulsate-fwd ">
			<a sveltekit:prefetch href="/">
				<img src="signatur.svg" alt="" />
			</a>
		</div>
		<div class="desktop-menu">
			<ul>
				<li class:active={$page.url.pathname === '/'}>
					<a class="home" sveltekit:prefetch href="/"></a>
						<svg width="17" height="17" viewBox="0 0 16 16"
							><g fill="#99999" fill-rule="evenodd"
								><path
									d="m8 3.293l6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
								/><path
									d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207L1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
								/></g
							></svg
						>GO BACK HOME
					</a>
				</li>
				<!-- <li>
					<a href="#portfolio">PORTFOLIO</a>
				</li>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">PORTFOLIO</a>
				</li>
				<li class:active={$page.url.pathname === '/'}>
					<a sveltekit:prefetch href="/">ABOUT ME</a>
				</li> -->
			</ul>
		</div>
	</nav>
</header>

<style>
	/* @media (min-width: 650px) { */
	header {
		max-width: 100vw;
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

	.corner {
		width: 100px;
	}

	.home {
		display: flex;
		gap: 10px;
		justify-items: center;
	}

	nav {
		display: flex;
		justify-content: space-between;
	}

	nav img {
		width: 40%;
	}

	ul a:hover {
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
		font-weight: 400;
		font-size: 0.5rem;
		font-family: 'Inter', sans-serif;
		font-weight: 400;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	@media (min-width: 650px) {
		header {
			max-width: 97vw;
		}

		nav img {
			width: 70%;
		}

		nav a {
			padding: 0 1em;
			font-weight: 400;
			font-size: 0.7rem;
			font-family: 'Inter', sans-serif;

			letter-spacing: 0.1em;
		}
	}
</style>
