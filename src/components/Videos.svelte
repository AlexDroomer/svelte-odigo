<script lang="ts">
	import IntersectionObserver from 'svelte-intersection-observer';

	let element: HTMLDivElement;
	let activeSlide = 1;
	let slides = [1, 2, 3];
	function findVideos() {
		let videos: NodeListOf<HTMLVideoElement> = document.querySelectorAll('.video');

		for (let i = 0; i < videos.length; i++) {
			setupVideo(videos[i]);
		}
	}

	function setupVideo(video: HTMLVideoElement) {
		let link: HTMLLinkElement = video.querySelector('.video__link')!;
		let media: HTMLImageElement = video.querySelector('.video__media')!;
		let button: HTMLButtonElement = video.querySelector('.video__button')!;
		let id = parseMediaURL(media);

		video.addEventListener('click', () => {
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
</script>

<section class="videos" id="videos">
	<IntersectionObserver
		once
		{element}
		on:observe={(e) => {
			findVideos();
		}}
	>
		<div class="videos__wrapper" bind:this={element}>
			<span class="sr-only" tabindex="-1">
				Navigating through the elements of the carousel is possible using the tab key. You can skip
				the carousel or go straight to carousel navigation using the skip links.
			</span>

			<a href="#video-slider-end" class="action skip sr-only"> Press to skip carousel </a>
			<div class="video" style:display={activeSlide === 1 ? 'block' : 'none'}>
				<a
					class="video__link"
					title="Walking in the Rain Tokyo, Japan Video"
					href="https://youtu.be/Et7O5-CzJZg"
				>
					<picture>
						<source
							srcset="
                https://i.ytimg.com/vi_webp/Et7O5-CzJZg/maxresdefault.webp
              "
							type="image/webp"
						/>
						<img
							class="video__media"
							loading="lazy"
							src="https://i.ytimg.com/vi/Et7O5-CzJZg/maxresdefault.jpg"
							alt="Walking in the Rain Tokyo, Japan"
						/>
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
			<div class="video" style:display={activeSlide === 2 ? 'block' : 'none'}>
				<a
					class="video__link"
					title="Cherry Blossom in Kyoto, Japan Video"
					href="https://youtu.be/9-dOVxyaHSw"
				>
					<picture>
						<source
							srcset="
                https://i.ytimg.com/vi_webp/9-dOVxyaHSw/maxresdefault.webp
              "
							type="image/webp"
						/>
						<img
							class="video__media"
							loading="lazy"
							src="https://i.ytimg.com/vi/9-dOVxyaHSw/maxresdefault.jpg"
							alt="Cherry Blossom in Kyoto, Japan"
						/>
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
			<div class="video" style:display={activeSlide === 3 ? 'block' : 'none'}>
				<a
					class="video__link"
					title="Japan's Winter Wonderland Video"
					href="https://youtu.be/nGJMwixogyk"
				>
					<picture>
						<source
							srcset="
                https://i.ytimg.com/vi_webp/nGJMwixogyk/maxresdefault.webp
              "
							type="image/webp"
						/>
						<img
							class="video__media"
							loading="lazy"
							src="https://i.ytimg.com/vi/nGJMwixogyk/maxresdefault.jpg"
							alt="Japan's Winter Wonderland"
						/>
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
			<div class="video_controls">
				<div class="video_controls-prev">
					<button
						on:click={() => (activeSlide = activeSlide === 1 ? slides.length : activeSlide - 1)}
					>
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
							class="lucide lucide-move-left"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg
						>
					</button>
				</div>
				<div class="video_controls-next">
					<button
						on:click={() => (activeSlide = activeSlide === slides.length ? 1 : activeSlide + 1)}
					>
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
							><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></svg
						>
					</button>
				</div>
				<span id="video-slider-end"></span>
			</div>
		</div>
	</IntersectionObserver>
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
