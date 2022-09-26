<footer class="">
	<div class="text-center mx-10">
		<h2>Don't be a stranger 🤗</h2>
		<p>
			Thanks for having a look at my portfolio! <br /> If you saw something interesting or just want
			to chat about.... well, anything! <br /> I always appreciate being contacted. <br /> <br />
		</p>
		<h2 class="text-xl">Have a nice day!</h2>
	</div>

	<div class="buttons mx-10">
		<div class="">
			<a href="mailto:webmaster@example.com">
				<div class="flex gap-4 knap">
					<svg width="25" height="25" viewBox="0 0 24 24"
						><path
							d="m15.95 22l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4ZM12 11l8-5H4Zm0 2L4 8v10h5.15l2 2H4q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h16q.825 0 1.413.588Q22 5.175 22 6v4.35l-2 2V8Zm0 0Zm0-2Zm0 2Z"
						/></svg
					>Frederik-milland@hotmail.com
				</div>
			</a>
		</div>
		<div class="">
			<a target="blank" href="https://www.linkedin.com/in/frederik-milland-a2b671205/">
				<div class="flex gap-4 knap">
					<svg width="25" height="25" viewBox="0 0 512 512"
						><path
							d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43c0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44c-17.74 0-28.24 12-32.91 23.69c-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44c42.13 0 74 27.77 74 87.64Z"
						/></svg
					>
					Connect with me on LinkedIn
				</div>
			</a>
		</div>
	</div>
</footer>

<style>
	footer {
		overflow-x: hidden;
		margin: 0 auto;
		display: grid;
		place-items: center;
		max-width: 100vw;
		padding-block: 5rem;
		width: 100%;
		border-bottom: solid 2px #42506b;
		border-left: solid 2px #42506b;
		border-right: solid 2px #42506b;
		display: grid;
		text-align: left;
	}

	.buttons {
		margin-top: 3rem;
		display: grid;
		gap: 3rem;
		padding-bottom: 3rem;
	}

	.knap {
		color: #42506b;
		border: solid 3px #42506b;
		padding-block: 1rem;
		font-weight: 900;
		font-size: 0.8rem;
		padding-inline: 2rem;
	}

	.knap svg {
		fill: #42506b;
	}

	.knap:hover {
		background-color: #e45a5a;
		color: white;
		border: solid 3px white;
		transition: ease-in(1s);
	}

	.knap:hover svg {
		fill: white;
	}

	@media (min-width: 600px) {
		.buttons {
			grid-template-columns: 1fr 1fr;
		}

		.knap {
			font-size: 1rem;
		}

		footer {
			max-width: 97vw;
			padding-right: 0rem;
		}
	}
</style>
