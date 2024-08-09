<script lang="ts">
	import { onMount } from 'svelte';

	let slides = [
		{
			id: 1,
			href: 'https://youtu.be/Et7O5-CzJZg',
			src: 'https://i.ytimg.com/vi/Et7O5-CzJZg/maxresdefault.jpg',
			srcset: 'https://i.ytimg.com/vi_webp/Et7O5-CzJZg/maxresdefault.webp',
			alt: 'Walking in the Rain Tokyo, Japan',
			title: 'Walking in the Rain Tokyo, Japan Video'
		},
		{
			id: 2,
			href: 'https://youtu.be/9-dOVxyaHSw',
			src: 'https://i.ytimg.com/vi/9-dOVxyaHSw/maxresdefault.jpg',
			srcset: 'https://i.ytimg.com/vi_webp/9-dOVxyaHSw/maxresdefault.webp',
			alt: 'Cherry Blossom in Kyoto, Japan',
			title: 'Cherry Blossom in Kyoto, Japan Video'
		},
		{
			id: 3,
			href: 'https://youtu.be/nGJMwixogyk',
			src: 'https://i.ytimg.com/vi/nGJMwixogyk/maxresdefault.jpg',
			srcset: 'https://i.ytimg.com/vi_webp/nGJMwixogyk/maxresdefault.webp',
			alt: "Japan's Winter Wonderland",
			title: "Japan's Winter Wonderland"
		}
	];
	let activeSlide = slides[0].id;

	function setupVideo(video: Element) {
		let link: HTMLLinkElement = video.querySelector('.video__link')!;
		let media: HTMLImageElement = video.querySelector('.video__media')!;
		let button: HTMLButtonElement = video.querySelector('.video__button')!;
		let id = parseMediaURL(media);

		button.addEventListener('click', (e) => {
			e.preventDefault();
			let iframe = createIframe(id);

			link.remove();
			button.remove();
			video.appendChild(iframe);
		});

		link.removeAttribute('href');
		video.classList.add('video--enabled');
	}

	function parseMediaURL(media: HTMLImageElement) {
		let regexp = /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i;
		let url = media.src;
		let match = url.match(regexp)!;

		return match[1];
	}

	function createIframe(id: string) {
		let iframe = document.createElement('iframe');

		iframe.setAttribute('allowfullscreen', '');
		iframe.setAttribute('allow', 'autoplay');
		iframe.setAttribute('src', generateURL(id));
		iframe.classList.add('video__media');

		return iframe;
	}

	function generateURL(id: string) {
		let query = '?rel=0&showinfo=0&autoplay=1&modestbranding=1&';

		return 'https://www.youtube.com/embed/' + id + query;
	}

	onMount(() => {
		document.querySelectorAll('.video').forEach((element) => {
			setupVideo(element);
		});
	});
</script>

<section class="videos" id="videos">
	<div class="videos__wrapper">
		<span class="sr-only" tabindex="-1">
			Navigating through the elements of the carousel is possible using the tab key. You can skip the carousel or go
			straight to carousel navigation using the skip links.
		</span>

		<a href="#video-slider-end" class="action skip sr-only"> Press to skip carousel </a>
		{#each slides as slide}
			<div class="video" style:display={activeSlide === slide.id ? 'block' : 'none'}>
				<a class="video__link" title={slide.title} href={slide.href}>
					<picture>
						<source srcset={slide.srcset} type="image/webp" />
						<img class="video__media" loading="lazy" src={slide.src} alt={slide.alt} />
					</picture>
				</a>
				<button class="video__button" aria-label="Play video">
					<svg width="68" height="48" viewBox="0 0 68 48">
						<path
							class="video__button-shape"
							d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
						></path>
						<path class="video__button-icon" d="M 45,24 27,14 27,34"></path>
					</svg>
				</button>
			</div>
		{/each}
		<div class="video_controls">
			<div class="video_controls-prev">
				<button on:click={() => (activeSlide = activeSlide === 1 ? slides.length : activeSlide - 1)}>
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
				<button on:click={() => (activeSlide = activeSlide === slides.length ? slides[0].id : activeSlide + 1)}>
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

	.video {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 56.25%;
		background-color: hsl(var(--color-theme-black));

		&_controls {
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

		&:hover .video__button-shape,
		.video__button:focus .video__button-shape {
			fill: hsl(var(--color-theme-blue));
			fill-opacity: 1;
		}

		&__link {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		&__media {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: none;
		}

		&__button {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: 1;
			padding: 0;
			width: 68px;
			height: 48px;
			border: none;
			background-color: transparent;
			transform: translate(-50%, -50%);
			cursor: pointer;

			&:focus {
				outline: none;
			}

			&-shape {
				fill: hsl(var(--color-theme-black));
				fill-opacity: 0.8;
			}

			&-icon {
				fill: hsl(var(--color-theme-white));
			}
		}
	}
	/* Enabled */

	:is(.video.video--enabled) {
		cursor: pointer;
	}

	:is(.video.video--enabled) .video__button {
		display: block;
	}
</style>
