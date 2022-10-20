<script>
	import { page } from '$app/stores';
</script>

<header id="top">
	<nav>
		<div class="corner hover:pulsate-fwd ">
			<a sveltekit:prefetch href="/">
				<img src="signatur.svg" alt="" />
			</a>
		</div>
		<div class="desktop-menu">
			<ul>
				<li class:active={$page.url.pathname === '/'}>
					<a class="home" sveltekit:prefetch href="/">
						<svg width="17" height="17" viewBox="0 0 24 24"
							><path
								fill="#99999"
								d="m10.875 19.3l-6.6-6.6q-.15-.15-.213-.325Q4 12.2 4 12t.062-.375q.063-.175.213-.325l6.6-6.6q.275-.275.687-.288q.413-.012.713.288q.3.275.313.687q.012.413-.288.713L7.4 11h11.175q.425 0 .713.287q.287.288.287.713t-.287.712Q19 13 18.575 13H7.4l4.9 4.9q.275.275.288.7q.012.425-.288.7q-.275.3-.7.3q-.425 0-.725-.3Z"
							/></svg
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
