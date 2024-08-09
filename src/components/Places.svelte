<script>
	import { base } from '$app/paths';
</script>

<section class="places">
	<div class="wrapper-full">
		<div class="places__caption">
			<h2 class="places__title section__title">Get inspired for your next trip</h2>
			<a href="{base}/" aria-label="View all places" class="places__view-all">VIEW ALL</a>
		</div>
		<div class="places__cards">
			<figure class="places__card places__card_size_lg">
				<figcaption class="places__card-title">Mount Fuji</figcaption>
				<img
					src="{base}/mount-fuji-min.jpg"
					alt="Mount Fuji"
					class="places__card-pic places__card-pic_size_lg"
					loading="lazy"
				/>
				<a href="{base}/" aria-label="Mount Fuji" class="places__card-link"></a>
			</figure>

			<figure class="places__card places__card_size_lg">
				<figcaption class="places__card-title">Kyoto</figcaption>

				<img src="{base}/kyoto-min.jpg" alt="Kyoto" class="places__card-pic places__card-pic_size_lg" loading="lazy" />
				<a href="{base}/" aria-label="Kyoto" class="places__card-link"></a>
			</figure>

			<figure class="places__card places__card_size_sm">
				<figcaption class="places__card-title">Tokyo</figcaption>
				<img src="{base}/tokyo-min.jpg" alt="Tokyo" class="places__card-pic places__card-pic_size_sm" loading="lazy" />
				<a href="{base}/" aria-label="Tokyo" class="places__card-link"></a>
			</figure>

			<figure class="places__card places__card_size_sm">
				<figcaption class="places__card-title">Niigata</figcaption>

				<img
					src="{base}/niigata-min.jpg"
					alt="Niigata"
					class="places__card-pic places__card-pic_size_sm"
					loading="lazy"
				/>
				<a href="{base}/" aria-label="Niigata" class="places__card-link"></a>
			</figure>

			<figure class="places__card places__card_size_sm">
				<figcaption class="places__card-title">Sapporo</figcaption>
				<img
					src="{base}/sapporo-min.jpg"
					alt="Sapporo"
					class="places__card-pic places__card-pic_size_sm"
					loading="lazy"
				/>
				<a href="{base}/" aria-label="Sapporo" class="places__card-link"></a>
			</figure>
		</div>
	</div>
</section>

<style lang="scss">
	.places {
		margin-bottom: 131px;
		@media screen and (max-width: 767px) {
			margin-bottom: 76px;
		}

		&__caption {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			margin-bottom: 36px;
		}
		&__title {
			margin-right: 15px;
		}

		&__view-all {
			font-size: 1rem;
			color: hsl(var(--color-theme-blue));
			text-decoration: none;
			padding-right: 59px;
			background: url(/arrow-right-icon.svg) no-repeat 95% center;
			transition: 0.2s background-position;

			&:hover,
			&:focus {
				background: url(/arrow-right-icon.svg) no-repeat right center;
			}
		}

		&__cards {
			display: grid;
			grid-template-columns: repeat(6, 1fr);
		}

		&__card {
			position: relative;
			overflow: hidden;
			margin: 0;

			&:hover .places__card-pic {
				transform: scale(1);
			}

			&-title {
				font-size: 3rem;
				line-height: 1.5;
				color: hsl(var(--color-theme-white));
				position: absolute;
				bottom: 27px;
				left: 29px;
				z-index: 3;
				background-color: hsl(var(--color-theme-darkblue));
				padding: 4px 16px;
			}
			&_size_lg {
				grid-column: span 3;
				@media screen and (max-width: 960px) {
					grid-column: span 6;
				}
				@media screen and (max-width: 767px) {
					height: 230px;
				}
			}
			&_size_sm {
				grid-column: span 2;
				@media screen and (max-width: 960px) {
					grid-column: span 6;
				}
				@media screen and (max-width: 767px) {
					height: 230px;
				}
			}
			&-pic {
				transform: scale(0.98);
				width: 100%;
				transition: 0.15s all;

				&_size_lg {
					height: 354px;
					object-fit: cover;
					object-position: bottom;
					@media screen and (max-width: 767px) {
						height: 283px;
					}
				}

				&_size_sm {
					height: 283px;
					object-fit: cover;
					object-position: bottom;
				}
			}
			&-link {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 4;

				&:focus {
					outline: 2px solid hsl(var(--color-theme-blue));
					outline-offset: -2px;
				}
			}
		}
	}
</style>
