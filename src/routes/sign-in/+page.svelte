<script>
	import { onMount } from 'svelte';
	import { nanoid } from 'nanoid';
	import { writable } from 'svelte/store';
	let user = writable(null);
	/** @param {SubmitEvent & { currentTarget: EventTarget & HTMLFormElement; }}  event */
	const signIn = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const email = formData.get('email')?.toString();
		const password = formData.get('password')?.toString();

		if (email && password) {
			const sessionId = nanoid();

			document.cookie = `sessionid=${sessionId}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax;`;
			document.cookie = `user=${email}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax;`;

			// @ts-ignore
			user.set(email);
			// Mocking a success response
			console.log({ success: true });
		}
	};

	const signOut = () => {
		document.cookie = 'sessionid=; path=/; max-age=0;';
		document.cookie = 'user=; path=/; max-age=0;';
		user.set(null);
	};

	onMount(() => {
		const userCookie = document.cookie
			.split('; ')
			.find((row) => row.startsWith('user='))
			?.split('=')[1];
		if (userCookie) {
			// @ts-ignore
			user.set(userCookie);
		}
	});
</script>

<svelte:head>
	<title>Sign In | Odigo</title>
	<meta name="description" content="Sign In" />
</svelte:head>
<div class="sign-in" style="">
	<div class="sign-in__wrapper">
		{#if $user}
			<form method="POST" on:submit={signOut} class="sign-in__form">
				<h1 style="text-align: center; color: white;">Successfully logged in!</h1>
				<p style="text-align: center; color: white;">Welcome back, {$user}</p>
				<button type="submit" class="sign-in__submit">Sign Out</button>
			</form>
		{:else}
			<h1 class="sign-in__title">Sign In</h1>
			<form method="POST" on:submit={signIn} class="sign-in__form">
				<label class="sign-in__label" for="email">Email</label>
				<input
					required
					autocomplete="email"
					placeholder="nanashi@nogonbei.jp"
					class="sign-in__input-field"
					type="email"
					name="email"
					id="email"
				/>
				<label class="sign-in__label" for="password">Password</label>
				<input
					required
					placeholder="password"
					class="sign-in__input-field"
					autocomplete="current-password"
					type="password"
					name="password"
					id="password"
				/>
				<button class="sign-in__submit" type="submit">Sign In</button>
			</form>
		{/if}
	</div>
</div>

<style lang="scss">
	.sign-in {
		height: 100vh;
		background-size: cover;
		background-image: url(/intro-bg-min.jpg);
		display: flex;
		justify-content: center;
		align-items: center;
		color: hsl(var(--color-theme-darkblue));

		&__wrapper {
			display: flex;
			flex-direction: column;
			background: hsl(var(--color-theme-darkblue));
			border-radius: 8px;
			padding: 32px 40px 40px;
			max-width: 380px;
			width: 100%;
		}

		&__title {
			font-weight: 600;
			font-size: 2rem;
			line-height: 2.5rem;
			color: hsl(var(--color-theme-white));
			margin-bottom: 40px;
			margin-top: 0;
		}

		&__form {
			display: flex;
			flex-direction: column;
		}

		&__label {
			font-weight: 500;
			line-height: 1.5rem;
			margin-bottom: 8px;
			color: hsl(var(--color-theme-white));
		}

		&__input-field {
			padding: 4px 8px;
			margin-bottom: 20px;
			border-radius: 4px;
			font-size: 1.25rem;
			line-height: 1.5;
			border: 1px solid hsl(var(--color-theme-white));
		}

		&__submit {
			background: hsl(var(--color-theme-white));
			color: hsl(var(--color-theme-darkblue));
			font-weight: 600;
			font-size: 1.25rem;
			margin-top: 16px;
			line-height: 1.5;
			padding: 8px 0;
			border-radius: 4px;
			border: 1px solid hsl(var(--color-theme-white));
			cursor: pointer;
		}
	}
</style>
