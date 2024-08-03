<section class="tours" id="tours">
	<div class="wrapper-full">
		<div class="tours__tour tour">
			<div class="tour__pic">
				<img
					src="/tour-1-min.jpg"
					alt="Prefecture in Focus: Tottori"
					class="tour__thumb"
					loading="lazy"
				/>
			</div>
			<div class="tour__info">
				<h3 class="tour__title">Prefecture in Focus: Tottori</h3>
				<p class="tour__desc">
					Dive deep into the enchanting beauty of Tottori Prefecture, where you'll find pristine
					sand dunes, captivating landscapes, and a rich cultural heritage. Experience the essence
					of Japan in this picturesque region.
				</p>
				<a href="#!" class="tour__more">VIEW PREFECTURE</a>
			</div>
		</div>
		<div class="tours__tour tour">
			<div class="tour__info">
				<h3 class="tour__title">Featured Neighborhood: Kyoto’s Arashiyama</h3>
				<p class="tour__desc">
					Discover the timeless allure of Arashiyama in Kyoto, a district renowned for its bamboo
					groves, traditional temples, and scenic beauty. Immerse yourself in the tranquility and
					charm of this iconic neighborhood.
				</p>
				<a href="#!" class="tour__more">VIEW NEIGHBORHOOD</a>
			</div>
			<div class="tour__pic tour__pic_mob-first">
				<img
					src="/tour-2-min.jpg"
					alt="Featured Neighborhood: Kyoto’s Arashiyama"
					class="tour__thumb"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.tours {
		margin-bottom: 139px;
		@media screen and (max-width: 767px) {
			margin-bottom: 76px;
		}

		&__tour {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			gap: 0 108px;
			align-items: center;
			margin-bottom: 77px;
			@media screen and (max-width: 960px) {
				column-gap: 35px;
			}
			@media screen and (max-width: 767px) {
				margin-bottom: 50px;
			}
		}
	}

	.tour {
		&__info {
			padding-left: 47px;
			@media screen and (max-width: 960px) {
				padding-left: 0;
			}
			@media screen and (max-width: 767px) {
				grid-column: span 2;
			}
		}

		&__title {
			font-weight: 500;
			font-size: 30px;
			line-height: 40px;
			margin-bottom: 85px;
			@media screen and (max-width: 960px) {
				margin-bottom: 15px;
			}
		}

		&__desc {
			font-size: 16px;
			line-height: 24px;
			margin-bottom: 58px;
			@media screen and (max-width: 960px) {
				margin-bottom: 15px;
			}
		}

		&__more {
			font-size: 16px;
			color: hsl(var(--color-theme-blue));
			text-decoration: none;
			padding-right: 59px;
			background: url(/arrow-right-icon.svg) no-repeat 95% center;
			transition: 0.2s all;

			&:hover,
			&:focus {
				background: url(/arrow-right-icon.svg) no-repeat right center;
			}
		}
		&__pic {
			@media screen and (max-width: 767px) {
				grid-column: span 2;
				margin-bottom: 12px;
				&_mob-first {
					grid-row-start: -1;
				}
			}
		}
	}
</style>
