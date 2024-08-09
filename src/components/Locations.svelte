<script>
	import Icons from './Icons.svelte';
	import { base } from '$app/paths';
</script>

<section class="top" id="locations">
	<div class="wrapper-full">
		<h2 class="top__title section__title">Today top places to visit</h2>
		<div class="top__cards">
			<div class="top__card">
				<div class="top__card-pic">
					<img src="{base}/top-1-min.jpg" alt="NAGOYA" class="top__card-thumb" loading="lazy" />
					<div class="top__card-stats">
						<h3 class="top__card-title">NAGOYA</h3>
						<button type="button" class="top__card-likes">
							<span class="top__card_likes-value">220</span>
							<Icons type="heart"></Icons>
						</button>
						<button type="button" class="top__card-comments">
							<span class="top__card-comments-value">50</span>
							<Icons type="comment"></Icons>
						</button>
					</div>
				</div>
				<p class="top__card-desc">
					Explore the vibrant city of Nagoya, where tradition and modernity blend seamlessly. From ancient castles to
					futuristic attractions, Nagoya offers an unforgettable experience for every traveler.
				</p>
				<a href="{base}/" class="top__card-more">SEE MORE</a>
			</div>

			<div class="top__card">
				<div class="top__card-pic">
					<img src="{base}/top-2-min.jpg" alt="NIIGATA" class="top__card-thumb" loading="lazy" />
					<div class="top__card-stats">
						<h3 class="top__card-title">NIIGATA</h3>
						<button type="button" class="top__card-likes">
							<span class="top__card_likes-value">220</span>
							<Icons type="heart"></Icons>
						</button>
						<button type="button" class="top__card-comments">
							<span class="top__card-comments-value">50</span>
							<Icons type="comment"></Icons>
						</button>
					</div>
				</div>
				<p class="top__card-desc">
					Embark on a journey to Niigata, where you can experience the beauty of the Japanese countryside, taste
					exceptional sake, and immerse yourself in the warmth of the local hospitality.
				</p>
				<a href="{base}/" class="top__card-more">SEE MORE</a>
			</div>
			<div class="top__card">
				<div class="top__card-pic">
					<img src="{base}/top-3-min.jpg" alt="OSAKA" class="top__card-thumb" loading="lazy" />
					<div class="top__card-stats">
						<h3 class="top__card-title">OSAKA</h3>
						<button type="button" class="top__card-likes">
							<span class="top__card_likes-value">220</span>
							<Icons type="heart"></Icons>
						</button>
						<button type="button" class="top__card-comments">
							<span class="top__card-comments-value">50</span>
							<Icons type="comment"></Icons>
						</button>
					</div>
				</div>
				<p class="top__card-desc">
					Experience the energetic spirit of Osaka, a city brimming with culinary delights, historic landmarks, and
					modern entertainment. Unravel the multifaceted charm of Japan's kitchen and entertainment capital.
				</p>
				<a href="{base}/" class="top__card-more">SEE MORE</a>
			</div>

			<div class="top__card">
				<div class="top__card-pic">
					<img src="{base}/top-4-min.jpg" alt="SAITAMA" class="top__card-thumb" loading="lazy" />
					<div class="top__card-stats">
						<h3 class="top__card-title">SAITAMA</h3>
						<button type="button" class="top__card-likes">
							<span class="top__card_likes-value">220</span>
							<Icons type="heart"></Icons>
						</button>
						<button type="button" class="top__card-comments">
							<span class="top__card-comments-value">50</span>
							<Icons type="comment"></Icons>
						</button>
					</div>
				</div>
				<p class="top__card-desc">
					Delve into the lesser-known wonders of Saitama, an area filled with hidden gems, serene parks, and cultural
					treasures. Discover the perfect blend of nature and urban charm in this fascinating region.
				</p>
				<a href="{base}/" class="top__card-more">SEE MORE</a>
			</div>
			<div class="top__card">
				<div class="top__card-pic">
					<img src="{base}/top-5-min.jpg" alt="UENO" class="top__card-thumb" loading="lazy" />
					<div class="top__card-stats">
						<h3 class="top__card-title">UENO</h3>
						<button type="button" class="top__card-likes">
							<span class="top__card_likes-value">220</span>
							<Icons type="heart"></Icons>
						</button>
						<button type="button" class="top__card-comments">
							<span class="top__card-comments-value">50</span>
							<Icons type="comment"></Icons>
						</button>
					</div>
				</div>
				<p class="top__card-desc">
					Immerse yourself in the cultural heart of Tokyo at Ueno, a district celebrated for its museums, cherry
					blossoms, and vibrant atmosphere. Discover the rich history and contemporary allure of this captivating
					neighborhood.
				</p>
				<a href="{base}/" class="top__card-more">SEE MORE</a>
			</div>

			<div class="top__card">
				<div class="top__card-pic">
					<img src="{base}/top-6-min.jpg" alt="SHIBUYA" class="top__card-thumb" loading="lazy" />
					<div class="top__card-stats">
						<h3 class="top__card-title">SHIBUYA</h3>
						<button type="button" class="top__card-likes">
							<span class="top__card_likes-value">220</span>
							<Icons type="heart"></Icons>
						</button>
						<button type="button" class="top__card-comments">
							<span class="top__card-comments-value">50</span>
							<Icons type="comment"></Icons>
						</button>
					</div>
				</div>
				<p class="top__card-desc">
					Immerse yourself in the dynamic energy of Shibuya, Tokyo's iconic fashion and entertainment hub. Explore
					trendy shops, indulge in delectable cuisine, and experience the vibrant street culture of this bustling
					district.
				</p>
				<a href="{base}/" class="top__card-more">SEE MORE</a>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.top {
		margin-bottom: 144px;
		@media screen and (max-width: 767px) {
			margin-bottom: 76px;
		}

		&__title {
			margin-bottom: 54px;
		}

		&__cards {
			display: grid;
			justify-content: center;
			grid-template-columns: repeat(auto-fit, minmax(min(100%, 387px), 377px));
			row-gap: 2.5rem;
			column-gap: 1.5rem;
			@media screen and (max-width: 960px) {
				row-gap: 3rem;
				column-gap: 1.5rem;
			}
		}
		&__card {
			display: flex;
			flex-direction: column;

			&-pic {
				position: relative;
				margin-bottom: 0;
				@media screen and (max-width: 960px) {
					margin-right: auto;
				}
			}

			&-stats {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: flex-end;
				position: absolute;
				bottom: 2px;
				left: 0;
				width: -moz-available;
				width: -webkit-fill-available;
				background: hsl(var(--color-theme-black) / 0.6);
				padding: 16px 24px;
			}
			&-title {
				font-weight: 500;
				font-size: 1.125rem;
				line-height: 1.5rem;
				color: hsl(var(--color-theme-white));
				margin: 0 auto 0 0;
			}

			&-likes {
				display: flex;
				align-items: center;
				gap: 0.75rem;
				font-weight: 500;
				font-size: 1rem;
				line-height: 1.5rem;
				color: hsl(var(--color-theme-white));
				padding-right: 1.25rem;
				background: transparent;
				border: none;
				cursor: pointer;
				margin-right: 0.75rem;
			}
			&-comments {
				display: flex;
				align-items: center;
				gap: 0.75rem;
				font-weight: 500;
				font-size: 1rem;
				line-height: 1.5rem;
				color: hsl(var(--color-theme-white));
				background: transparent;
				border: none;
				cursor: pointer;
			}
			&-desc {
				font-size: 1rem;
				line-height: 1.5rem;
				margin-bottom: 32px;
				@media screen and (max-width: 767px) {
					margin-bottom: 16px;
				}
			}
			&-more {
				padding: 8px 12px;
				text-decoration: none;
				color: hsl(var(--color-theme-white));
				background: hsl(var(--color-theme-blue));
				font-size: 1rem;
				margin: auto 0 0 0;
				border-radius: 4px;
				font-weight: 600;
				display: inline-flex;
				justify-content: center;
				align-items: center;
				align-self: center;

				&:hover,
				&:focus,
				&:active {
					background: hsl(var(--color-theme-blue) / 0.9);
				}

				&:focus-visible {
					outline: none;
					box-shadow:
						0 0 0 2px hsl(var(--color-theme-white)),
						0 0 0 4px hsl(var(--color-theme-black));
				}
			}
		}
	}
</style>
