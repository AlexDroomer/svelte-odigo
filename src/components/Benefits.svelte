<script>
	import { base } from '$app/paths';
</script>

<section class="benefits">
	<div class="benefits__wrap">
		<h2 class="benefits__title">Benefits of Odigo</h2>
		<div class="benefits__cards">
			<div class="benefits__card">
				<div class="benefits__card-pic">
					<img
						width="40"
						height="40"
						src="{base}/church-icon.png"
						alt="Welcome to Odigo!"
						class="benefits__card-thumb"
						loading="lazy"
					/>
				</div>
				<h3 class="benefits__card-title">Welcome to Odigo!</h3>
				<p class="benefits__card-desc">
					Welcome to Odigo, your personal guide to exploring the wonders of Japan. With us, you'll
					have access to a vast collection of travel information, itineraries, and insider tips to
					make your journey unforgettable.
				</p>
				<a href="{base}/" class="benefits__card-more">Learn more about Odigo</a>
			</div>
			<div class="benefits__card">
				<div class="benefits__card-pic">
					<img
						src="{base}/person-icon.png"
						width="40"
						height="40"
						alt="Your Personal Japan Guide"
						class="benefits__card-thumb"
						loading="lazy"
					/>
				</div>
				<h3 class="benefits__card-title">Your Personal Japan Guide</h3>

				<p class="benefits__card-desc">
					With Odigo, you have a personalized Japan guide at your fingertips. Explore the hidden
					gems, find the best local spots, and immerse yourself in the authentic culture of this
					enchanting country.
				</p>
				<a href="{base}/" class="benefits__card-more">Read guide about Japan</a>
			</div>
			<div class="benefits__card">
				<div class="benefits__card-pic">
					<img
						src="{base}/building-icon.png"
						width="40"
						height="40"
						alt="Promoting Local Businesses"
						class="benefits__card-thumb"
						loading="lazy"
					/>
				</div>
				<h3 class="benefits__card-title">Promoting Local Businesses</h3>
				<p class="benefits__card-desc">
					At Odigo, we believe in supporting local businesses and communities. Discover authentic
					experiences, support local artisans, and contribute to the sustainable growth of Japan's
					vibrant towns and cities.
				</p>
				<a href="{base}/" class="benefits__card-more">See Businesses</a>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.benefits {
		margin-bottom: 120px;
		@media screen and (max-width: 767px) {
			margin-bottom: 36px;
		}

		&__wrap {
			max-width: 1268px;
			background-color: hsl(var(--color-theme-white));
			margin: 0 auto;
			box-shadow: 0px 2px 20px hsl(var(--color-theme-blue) / 0.16);
			position: relative;
			@media screen and (max-width: 960px) {
				box-shadow: none;
			}
		}

		&__title {
			font-weight: 500;
			font-size: 2rem;
			line-height: 2.5rem;
			color: hsl(var(--color-theme-darkblue));
			padding: 96px 100px 0 100px;
			transform: translateY(-66%);
			background-color: white;
			@media screen and (max-width: 960px) {
				padding: 48px 0 0 16px;
				margin: 0;
				transform: translateY(-50%);
			}
		}

		&__cards {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			column-gap: 3rem;
			padding: 0px 100px;
			@media screen and (max-width: 960px) {
				padding: 0 16px;
				column-gap: 2rem;
			}
		}

		&__card {
			-ms-grid-column-span: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			grid-column: span 1;
			margin-bottom: 112px;
			@media screen and (max-width: 960px) {
				margin: 20px 40px;
			}
			@media screen and (max-width: 767px) {
				grid-column: span 3;
				margin-bottom: 20px;
			}

			&-pic {
				max-width: 40px;
				margin-bottom: 1.5rem;
				@media screen and (max-width: 767px) {
					margin-bottom: 0.75rem;
				}
			}
			&-thumb {
				display: block;
			}
			&-title {
				font-weight: 500;
				font-size: 1.125rem;
				line-height: 1.5rem;
				margin: 0;
			}
			&-desc {
				font-size: 1rem;
				line-height: 1.5rem;
			}
			&-more {
				display: inline-block;
				padding-right: 60px;
				font-size: 1rem;
				line-height: 1.5rem;
				color: hsl(var(--color-theme-blue));
				text-decoration: none;
				background: url(/arrow-right-icon.svg) no-repeat 95% center;
				transition: 0.2s all;

				&:hover,
				&:focus {
					background: url(/arrow-right-icon.svg) no-repeat right center;
				}
			}
		}
	}
</style>
