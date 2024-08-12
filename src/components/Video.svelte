<script>
	import { onMount } from 'svelte';

	export let activeSlide;
	/**
	 * @type {{ id: string; title: any; alt: any; }}
	 */
	export let slide;

	/**
	 * @type {HTMLDivElement}
	 */
	let videoWrapper;
	/**
	 * @type {HTMLAnchorElement}
	 */
	let videoLink;

	/**
	 * @type {HTMLButtonElement}
	 */
	let playButton;

	function playVideo() {
		let iframe = createIframe();

		videoLink.remove();
		playButton.remove();
		videoWrapper.appendChild(iframe);
	}

	function setupVideo() {
		videoLink.removeAttribute('href');
		videoWrapper.classList.add('video--enabled');
	}

	function createIframe() {
		let iframe = document.createElement('iframe');

		iframe.setAttribute('allowfullscreen', '');
		iframe.setAttribute('allow', 'autoplay');
		iframe.setAttribute(
			'src',
			'https://www.youtube.com/embed/' + slide.id + '?rel=0&showinfo=0&autoplay=1&modestbranding=1&'
		);
		iframe.classList.add('video__media');

		return iframe;
	}

	onMount(() => {
		setupVideo();
	});
</script>

<div class="video" bind:this={videoWrapper} style:display={activeSlide === slide.id ? 'block' : 'none'}>
	<a class="video__link" bind:this={videoLink} title={slide.title} href="https://youtu.be/{slide.id}">
		<picture>
			<source srcset="https://i.ytimg.com/vi_webp/{slide.id}/maxresdefault.webp" type="image/webp" />
			<img
				class="video__media"
				loading="lazy"
				src="https://i.ytimg.com/vi/{slide.id}/maxresdefault.jpg"
				alt={slide.alt}
			/>
		</picture>
	</a>
	<button class="video__button" bind:this={playButton} aria-label="Play video" on:click|preventDefault={playVideo}>
		<svg width="68" height="48" viewBox="0 0 68 48">
			<path
				class="video__button-shape"
				d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
			></path>
			<path class="video__button-icon" d="M 45,24 27,14 27,34"></path>
		</svg>
	</button>
</div>

<style lang="scss">
	.video {
		position: relative;
		width: 100%;
		height: 0;
		padding-bottom: 56.25%;
		background-color: hsl(var(--color-theme-black));

		

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
