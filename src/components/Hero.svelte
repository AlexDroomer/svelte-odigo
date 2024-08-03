<script>
	import { base } from "$app/paths";

	let userAction = '';
	let userPlace = '';

	/**  @param  {EventTarget & HTMLFormElement} form */
	function sendRequest(form) {
		const data = new FormData(form);

		for (let [key, value] of data) {
			console.log(`${key} - ${value}`);
		}
	}

	function openModal() {
		/** @type {HTMLDialogElement | null} */
		const dialogElement = document.querySelector('#sendRequestDialog');
		dialogElement?.showModal();
	}

	function closeModal() {
		/** @type {HTMLDialogElement | null} */
		const dialogElement = document.querySelector('#sendRequestDialog');
		dialogElement?.close();
	}
</script>

<section
	class="hero"
	style="background-image: url('/intro-bg-min.jpg');
"
>
	<div class="wrapper">
		<h1 class="hero__title">Discover Amazing places in Japan</h1>
		<p class="hero__subtitle">
			Welcome to the beautiful land of Japan, a country known for its stunning natural landscapes,
			rich cultural heritage, and vibrant cities. Whether you seek the serene beauty of Mount Fuji,
			the historical charm of Kyoto, the bustling streets of Tokyo, or the scenic beauty of Niigata
			and Sapporo, Japan has something to offer for every traveler.
		</p>
		<form
			on:submit|preventDefault={(event) => sendRequest(event.currentTarget)}
			class="search-form"
		>
			<fieldset class="search-form__wrap">
				<div class="search-form__info">
					<input
						style="background-image: url({base}/circle-icon.svg);"
						type="text"
						name="user-like-to-do"
						bind:value={userAction}
						class="search-form__field"
						placeholder="What would you like to do?"
					/>
					<input
						style="background-image: url({base}/circle-icon.svg);"
						type="text"
						name="user-like-to-go"
						bind:value={userPlace}
						class="search-form__field"
						placeholder="Where would you like to go?"
					/>
					<button id="sendRequest" on:click={openModal} type="submit" class="search-form__submit">
						Find places
					</button>
				</div>
			</fieldset>
		</form>
	</div>
	<dialog id="sendRequestDialog">
		<section>
			<p>
				You like to go:
				<span>{userPlace}</span>
			</p>
			<p>
				You like to do:
				<span>{userAction}</span>
			</p>
		</section>
		<menu>
			<button type="button" aria-label="Close modal" id="close" on:click={closeModal}>
				Got it!
			</button>
		</menu>
	</dialog>
</section>

<style lang="scss">
	.hero {
		min-height: 65vh;
		background-size: cover;
		padding-top: 264px;
		padding-bottom: 248px;
		@media screen and (max-width: 767px) {
			padding-top: 124px;
		}

		&__title {
			text-align: left;
			font-size: 3rem;
			line-height: 3.5rem;
			font-weight: 500;
			color: hsl(var(--color-theme-white));
			max-width: 560px;
			margin-bottom: 24px;
			@media screen and (max-width: 767px) {
				font-size: 2rem;
				line-height: 2.5rem;
			}
		}
		&__subtitle {
			color: white;
			font-size: 1rem;
			line-height: 1.5rem;
			max-width: 540px;
			margin-bottom: 59px;
			@media screen and (max-width: 767px) {
				font-size: 0.875rem;
			}
		}
	}

	dialog {
		display: grid;
		background: hsl(var(--color-theme-darkblue));
		color: hsl(var(--color-theme-white));
		max-inline-size: min(90vw, 60ch);
		max-block-size: min(80vh, 100%);
		max-block-size: min(80dvb, 100%);
		overflow: hidden;
		margin: auto;
		padding: 0;
		position: fixed;
		inset: 0;
		padding: 1rem;
		border-color: transparent;
		border-radius: 4px;
		z-index: var(--layer-important);

		&:not([open]) {
			pointer-events: none;
			opacity: 0;
		}

		section {
			width: 320px;
		}
		menu {
			padding: 0;
		}

		button {
			padding: 14px 36px;
			border: 0;
			border-radius: 4px;
			font-weight: 400;
			font-size: 1.5rem;
			color: hsl(var(--color-theme-darkblue));
			background: hsl(var(--color-theme-white));
			cursor: pointer;
			@media screen and (max-width: 767px) {
				width: 100%;
			}
		}
	}

	.search-form {
		&__wrap {
			border: none;
			margin: 0;
			padding: 0;
		}
		&__info {
			display: flex;
			flex-wrap: wrap;
			gap: 1.5rem;

			@media screen and (max-width: 767px) {
				flex-direction: column;
			}
		}
		&__field {
			flex: 1 1 auto;
			background: transparent no-repeat left 18px;
			background-size: 20px;
			border: 0;
			border-bottom: 2px solid hsl(var(--color-theme-blue));
			margin-right: 60px;
			padding-left: 43px;
			font-weight: 500;
			font-size: 1.125rem;
			color: hsl(var(--color-theme-white));
			min-height: 52px;

			&:-internal-autofill-selected {
				background-color: transparent !important;
			}

			&:focus {
				outline: none;
				border-bottom: 2px solid hsl(var(--color-theme-blue));
			}

			@media screen and (max-width: 767px) {
				margin-right: 0;
				width: 100%;
				padding-bottom: 12px;
				background: transparent url({base}/circle-icon.svg) no-repeat left 18px;
			}

			&::placeholder {
				font-weight: 500;
				font-size: 1.125rem;
				color: hsl(var(--color-theme-white) / 0.5);
				@media screen and (max-width: 767px) {
					font-size: 1rem;
				}
			}
		}
		&__submit {
			flex: 1 1 auto;
			display: inline-flex;
			justify-content: center;
			align-items: center;
			white-space: nowrap;
			padding: 8px 12px;
			border-radius: 0.25rem;
			font-weight: 600;
			font-size: 1rem;
			color: hsl(var(--color-theme-white));
			background: hsl(var(--color-theme-blue));
			border: none;
			cursor: pointer;

			@media screen and (max-width: 840px) {
				width: 100%;
				max-width: 297px;
			}

			&:hover,
			&:focus {
				background: hsl(var(--color-theme-blue) / 0.9);
			}

			&:focus-visible {
				outline: none;
				box-shadow:
					0 0 0 2px hsl(var(--color-theme-white)),
					0 0 0 4px hsl(var(--color-theme-black));
			}
			&:disabled {
				opacity: 0.5;
				pointer-events: none;
			}
		}
	}
</style>
