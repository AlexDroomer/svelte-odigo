<script>
	import { onMount } from 'svelte';
	import { nanoid } from 'nanoid';
	import { writable } from 'svelte/store';
	import { fetchMock } from '$lib/fetchMock';

	let user = writable('');
	/** @type {string} email */
	let email;
	/** @type {string} email */
	let password;
	/** @type {string} errorMessage */
	let errorMessage;
	let loading = writable(false);

	/** @param {SubmitEvent & { currentTarget: EventTarget & HTMLFormElement; }}  event */
	const signIn = async (event) => {
		const formData = new FormData(event.currentTarget);
		loading.set(true);
		const response = await fetchMock('/api/login', {
			body: formData,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		if (response.ok) {
			const data = await response.json();
			errorMessage = '';
			const sessionId = nanoid();
			document.cookie = `sessionid=${sessionId}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax;`;
			localStorage.setItem('user', email);
			user.set(email);
		} else {
			const errorData = await response.json();
			errorMessage = errorData.message;
		}
		loading.set(false);
	};

	const signOut = () => {
		document.cookie = 'sessionid=; path=/; max-age=0;';
		localStorage.removeItem('user');
		user.set('');
	};

	onMount(() => {
		const userInStorage = localStorage.getItem('user');
		if (userInStorage) {
			user.set(userInStorage);
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
			<form method="POST" on:submit|preventDefault={signOut} class="sign-in__form">
				<h1 style="text-align: center; color: white;">Successfully logged in!</h1>
				<p style="text-align: center; color: white;">Welcome back, {$user}</p>
				<button type="submit" class="sign-in__submit">Sign Out</button>
			</form>
		{:else}
			<h1 class="sign-in__title">Sign In</h1>
			{#if errorMessage}
				<div class="sign-in__error">
					<svg
						class="sign-in__error-icon"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
						/>
					</svg>
					<span class="sign-in__error-message">{errorMessage}</span>
				</div>
			{/if}
			<form method="POST" on:submit|preventDefault={signIn} class="sign-in__form">
				<label class="sign-in__label" for="email">Email</label>
				<input
					required
					autocomplete="email"
					placeholder="nanashi@nogonbei.jp"
					class="sign-in__input-field"
					type="email"
					name="email"
					id="email"
					bind:value={email}
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
					bind:value={password}
				/>
				<button class="sign-in__submit" type="submit" disabled={$loading}>
					{#if $loading}
						<svg
							class="animate-spin"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<circle style="opacity: 0.25;" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path
								style="opacity: 0.75;"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
					{/if}
					<span>{$loading ? 'Authenticating' : 'Sign In'}</span>
				</button>
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

		&__error {
			display: flex;
			column-gap: 8px;
			justify-content: center;
			align-items: center;
			background-color: white;
			padding: 4px 8px;
			margin-bottom: 16px;
			border-radius: 4px;
			border: 1px solid hsl(var(--color-theme-white));

			&-icon {
				width: 24px;
				height: 24px;
			}
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
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 8px;
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
