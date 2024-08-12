<script>
	import Video from './Video.svelte';

	let slides = [
		{
			id: 'Et7O5-CzJZg',
			alt: 'Walking in the Rain Tokyo, Japan',
			title: 'Walking in the Rain Tokyo, Japan Video'
		},
		{
			id: '9-dOVxyaHSw',
			alt: 'Cherry Blossom in Kyoto, Japan',
			title: 'Cherry Blossom in Kyoto, Japan Video'
		},
		{
			id: 'nGJMwixogyk',
			alt: "Japan's Winter Wonderland",
			title: "Japan's Winter Wonderland"
		}
	];
	let activeSlide = slides[0].id;

	function nextSlide() {
		let index = slides.findIndex((slide) => slide.id === activeSlide);
		if (index === slides.length - 1) {
			activeSlide = slides[0].id;
		} else {
			activeSlide = slides[index + 1].id;
		}
	}

	function prevSlide() {
		let index = slides.findIndex((slide) => slide.id === activeSlide);
		if (index === 0) {
			activeSlide = slides[slides.length - 1].id;
		} else {
			activeSlide = slides[index - 1].id;
		}
	}
</script>

<section class="videos" id="videos">
	<div class="videos__wrapper">
		<span class="sr-only" tabindex="-1">
			Navigating through the elements of the carousel is possible using the tab key. You can skip the carousel or go
			straight to carousel navigation using the skip links.
		</span>

		<a href="#video-slider-end" class="action skip sr-only"> Press to skip carousel </a>
		{#each slides as slide}
			<Video {slide} {activeSlide}></Video>
		{/each}
		<div class="video_controls">
			<div class="video_controls-prev">
				<button on:click={prevSlide}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-move-left"
						><title>Previous Video</title><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg
					>
				</button>
			</div>
			<div class="video_controls-next">
				<button on:click={nextSlide}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-move-right"
						><title>Next Video</title><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg
					>
				</button>
			</div>
			<span id="video-slider-end"></span>
		</div>
	</div>
</section>

<style lang="scss">
	.action.skip {
		&:focus {
			position: static;
			width: auto;
			height: auto;
			padding: 0;
			margin: 0;
			overflow: visible;
			clip: auto;
			white-space: normal;
			background-color: white;
			z-index: 30;
			color: hsl(var(--color-theme-black));
		}
	}
	.videos {
		width: 100%;

		&__wrapper {
			max-width: 1440px;
			margin: 0 auto;
			position: relative;
		}
	}

	.video_controls {
		display: contents;
		justify-content: center;
		&-prev,
		&-next {
			display: flex;
			align-items: center;
			position: absolute;
			top: 50%;
			transform: translate(0, -50%);
			button {
				display: flex;
				align-items: center;
				justify-content: center;
				border: hsl(var(--color-theme-white)) 1px solid;
				color: white;
				font-weight: bold;
				border-radius: 4px;
				width: 64px;
				height: 36px;
				background-color: transparent;

				&:hover {
					background-color: hsl(var(--color-theme-blue));
				}
			}
		}

		&-prev {
			justify-content: flex-start;
			left: 0;

			button {
				margin-left: 6px;
			}
		}

		&-next {
			justify-content: flex-end;
			right: 0;

			button {
				margin-right: 6px;
			}
		}
	}
</style>
