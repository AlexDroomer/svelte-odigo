<script>
</script>

<section class="testimonials">
	<div class="wrapper">
		<h2 class="testimonials__title section__title">What our travelers say</h2>
		<div class="testimonials__slider">
			<div class="testimonial">
				<p class="testimonial__quote">
					"Odigo is an invaluable resource for anyone planning a trip to Japan. It's like having a
					knowledgeable local friend to guide you through the best places to visit, eat, and
					experience."
				</p>
				<p class="testimonial__author">- Emily, California</p>
			</div>
			<div class="testimonial">
				<p class="testimonial__quote">
					"I discovered hidden gems in Japan through Odigo's travel guides and user recommendations.
					It made my trip truly special and allowed me to explore beyond the typical tourist spots."
				</p>
				<p class="testimonial__author">- David, Australia</p>
			</div>
			<div class="testimonial">
				<p class="testimonial__quote">
					"As a solo traveler, Odigo gave me the confidence to explore Japan at my own pace. I met
					amazing people and had unforgettable experiences, all thanks to the insights shared by the
					Odigo community."
				</p>
				<p class="testimonial__author">- Sarah, United Kingdom</p>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.testimonials {
		padding: 60px 0;
		background-color: hsl(var(--color-theme-white));

		&__slider {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}

		.testimonial {
			width: 320px;
			margin: 10px;
			padding: 20px;
			background-color: hsl(var(--color-theme-white));
			border-radius: 8px;
			box-shadow: 0 2px 6px hsl(var(--color-theme-blue) / 0.16);

			&__quote {
				font-size: 1rem;
				line-height: 1.5rem;
				color: hsl(var(--color-theme-darkblue));
				margin-bottom: 15px;
			}

			&__author {
				font-size: 0.875rem;
				color: hsl(var(--color-theme-blue));
				text-align: right;
			}
		}
	}
</style>
