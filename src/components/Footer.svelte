<script>
	import Icons from './Icons.svelte';
</script>

<footer class="footer">
	<div class="wrapper">
		<div class="footer__logo">
			<a href="/" class="footer__logo">
				<Icons type="logoFooter"></Icons>
			</a>
		</div>
		<nav class="footer__nav">
			<ul class="footer__list">
				<li class="footer__item">
					<h3 class="footer__list-title">Company</h3>
				</li>
				<li class="footer__item">
					<a href="#sign-in" class="footer__link">Home</a>
				</li>
				<li class="footer__item">
					<a href="#articles" class="footer__link">Articles</a>
				</li>
				<li class="footer__item">
					<a href="#locations" class="footer__link">Locations</a>
				</li>
				<li class="footer__item">
					<a href="#videos" class="footer__link">Videos</a>
				</li>
				<li class="footer__item">
					<a href="#!" class="footer__link">About</a>
				</li>
				<li class="footer__item">
					<a href="#!" class="footer__link">Contact</a>
				</li>
			</ul>

			<ul class="footer__list">
				<li class="footer__item">
					<h3 class="footer__list-title">Location</h3>
				</li>
				<li class="footer__item">
					<a href="!#" class="footer__link">Tokyo</a>
				</li>
				<li class="footer__item">
					<a href="!#" class="footer__link">Kyoto</a>
				</li>
				<li class="footer__item">
					<a href="!#" class="footer__link">Osaka</a>
				</li>
				<li class="footer__item">
					<a href="!#" class="footer__link">Hokkaido</a>
				</li>
			</ul>

			<ul class="footer__list">
				<li class="footer__item">
					<h3 class="footer__list-title">Social Media</h3>
				</li>
				<li class="footer__item">
					<a href="!#" class="footer__link">Facebook</a>
				</li>
				<li class="footer__item">
					<a href="!#" class="footer__link">Twitter</a>
				</li>
				<li class="footer__item">
					<a href="!#" class="footer__link">Instagram</a>
				</li>
				<li class="footer__item">
					<a href="!#" class="footer__link">Youtube</a>
				</li>
			</ul>
		</nav>
	</div>
</footer>

<style lang="scss">
	.footer {
		background-color: hsl(var(--color-theme-darkblue));
		padding: 120px 0;
		@media screen and (max-width: 960px) {
			padding: 60px 0;
		}



		&__link {
			font-weight: normal;
			padding: 8px 12px;
			font-size: 16px;
			line-height: 24px;
			color: #fff;
			&:hover,
			&:focus,
			&:active {
				opacity: 0.9;
			}
		}

		&__logo {
			display: inline-flex;
			@media screen and (max-width: 767px) {
				width: 100%;
				margin-bottom: 24px;
			}
		}

		&__nav {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			width: 100%;
			@media screen and (max-width: 767px) {
				width: 100%;
			}
		}
		&__list {
			list-style-type: none;
			flex: 1 0 auto;
			display: flex;
			flex-direction: column;
			gap: 12px;
			@media screen and (max-width: 767px) {
				width: 50%;
				margin-bottom: 24px;
			}
			&-title {
				font-weight: 500;
				font-size: 18px;
				color: #fff;
				line-height: 24px;
				padding: 8px 12px;
			}
		}
	}
</style>
