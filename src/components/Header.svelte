<script>
	import { page } from '$app/stores';
	import Icons from '$components/Icons.svelte';
	import { fly } from 'svelte/transition';
	let menuOpen = false;
	let y = 0;

	/**
	 * Closes the menu if the Escape key is pressed
	 * @param {KeyboardEvent} event
	 */
	function escapeCloseMenu(event) {
		if (event.key === 'Escape') menuOpen = false;
	}
	/**
	 * Scrolls to the specified element
	 * @param {MouseEvent & {currentTarget: EventTarget & HTMLAnchorElement; }} event
	 */

	function handleSmoothScroll(event) {
		const target = event.currentTarget;
		const link = target.getAttribute('href')?.split('/')[1];
		if (window.innerWidth <= 767) {
			menuOpen = !menuOpen;
		}
		if (link) {
			const element = document.querySelector(link);
			element && element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
		}
	}
</script>

<svelte:body on:keydown={escapeCloseMenu} />
<svelte:window bind:scrollY={y} />
<header class="header" class:open={y > 85}>
	<div class="wrapper">
		<a data-sveltekit-prefetch href="/" aria-label="Odigo Home Page" class="header__logo-link">
			<Icons type="logo"></Icons>
		</a>
		<nav class="header__nav" class:open={menuOpen} aria-label="Site Navigation">
			<button
				on:click={() => {
					menuOpen = !menuOpen;
				}}
				aria-expanded={menuOpen ? 'true' : 'false'}
				aria-haspopup="menu"
				aria-controls="mobile-menu"
				type="button"
				aria-label="Navigation menu trigger"
				class="header__nav-trigger"
			>
				{#if menuOpen}
					<Icons className="header__nav-close" type="close"></Icons>
				{:else}
					<Icons type="menu"></Icons>
				{/if}
			</button>
			{#if menuOpen}
				<div
					transition:fly={{ x: '-100%' }}
					class="header__nav-dialog"
					class:open={menuOpen}
					aria-hidden={menuOpen ? 'false' : 'true'}
					role="dialog"
					aria-modal="true"
				>
					<ul
						class="header__list header__list-mobile"
						class:open={menuOpen}
						id="mobile-menu"
						aria-label="Site navigation links"
					>
						<li
							class="header__item"
							aria-current={$page.url.hash === '#tours' ? 'page' : undefined}
						>
							<a class="header__link" href="/#tours" on:click={handleSmoothScroll}>tours</a>
						</li>
						<li
							class="header__item"
							aria-current={$page.url.hash === '#locations' ? 'page' : undefined}
						>
							<a class="header__link" href="/#locations" on:click={handleSmoothScroll}>locations</a>
						</li>
						<li
							class="header__item"
							aria-current={$page.url.hash === '#videos' ? 'page' : undefined}
						>
							<a class="header__link" href="/#videos" on:click={handleSmoothScroll}>videos</a>
						</li>
						<li
							class="header__item"
							aria-current={$page.url.pathname === '/sign-in' ? 'page' : undefined}
						>
							<a class="header__link" href="/sign-in" on:click={handleSmoothScroll}>sign in</a>
						</li>
					</ul>
				</div>
			{/if}
			<ul
				class="header__list header__list-desktop"
				class:open={menuOpen}
				id="desktop-menu"
				aria-label="Site navigation links"
			>
				<li class="header__item" aria-current={$page.url.hash === '#tours' ? 'page' : undefined}>
					<a class="header__link" href="/#tours">tours</a>
				</li>
				<li
					class="header__item"
					aria-current={$page.url.hash === '#locations' ? 'page' : undefined}
				>
					<a class="header__link" href="/#locations">locations</a>
				</li>
				<li class="header__item" aria-current={$page.url.hash === '#videos' ? 'page' : undefined}>
					<a class="header__link" href="/#videos">videos</a>
				</li>
				<li
					class="header__item"
					aria-current={$page.url.pathname === '/sign-in' ? 'page' : undefined}
				>
					<a class="header__link" href="/sign-in">sign in</a>
				</li>
			</ul>
		</nav>
	</div>
</header>

<style lang="scss">
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		transition: background-color 0.3s;
		z-index: 20;

		.wrapper {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-top: 2rem;
			padding-bottom: 1rem;
		}

		&.open {
			background: hsl(var(--color-theme-darkblue));
		}

		&__list {
			display: flex;
			list-style-type: none;
			padding-right: 40px;
			@media screen and (max-width: 767px) {
				flex-direction: column;
				background-color: var(--color-theme-black);
				z-index: 10;
				padding-top: 2.5rem;

				margin: 0;
			}
			&-desktop {
				display: flex;
				@media screen and (max-width: 767px) {
					display: none;
				}
			}
			&-mobile {
				display: none;
				@media screen and (max-width: 767px) {
					display: flex;
					flex-direction: column;
				}
			}
		}

		&__nav.open {
			color: #000;
		}

		&__item {
			margin-right: 82px;
			@media screen and (max-width: 767px) {
				width: 100%;
				margin-right: 0;
				margin-bottom: 30px;
			}

			&:last-child {
				margin-right: 0;
				@media screen and (max-width: 767px) {
					margin-bottom: 0;
				}
			}
			&[aria-current='page'] {
				.header__link {
					text-decoration: underline;
				}
			}
		}

		&__link {
			font-size: 18px;
			line-height: 24px;
			color: white;
			@media screen and (max-width: 767px) {
				font-size: 42px;
				line-height: 48px;
			}

			&:hover,
			&:focus,
			&:active {
				opacity: 0.75;
			}
		}
		.header__nav-trigger {
			cursor: pointer;
			z-index: 11;
			width: 40px;
			height: 40px;
			position: relative;
			display: none;
			background: transparent;
			border: none;
			@media screen and (max-width: 767px) {
				display: block;
			}
		}
		.header__nav-dialog {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			overflow-x: hidden;
			overflow-y: auto;
			&.open {
				background: hsl(var(--color-theme-darkblue));
			}
		}
	}
</style>
