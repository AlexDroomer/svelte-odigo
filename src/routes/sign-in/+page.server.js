import { randomUUID } from 'crypto';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
	const user = cookies.get('user');
	return { user };
}
/** @type {import('./$types').Actions} */
export const actions = {
	signIn: async ({ cookies, request }) => {
		const formData = await request.formData();
		const email = formData.get('email')?.toString();
		const password = formData.get('password')?.toString();
		if (email && password) {
			const sessionId = randomUUID();
			// const hashedPass = hash('sha1', password);
            /** This is mock for signIn */
			cookies.set('sessionid', sessionId, {
				path: '/',
				httpOnly: true,
				maxAge: 60 * 60 * 24 * 7, // 1 week
				sameSite: 'lax'
			});
			cookies.set('user', email, {
				path: '/',
				httpOnly: true,
				maxAge: 60 * 60 * 24 * 7, // 1 week
				sameSite: 'lax'
			});
		}

		return {
			success: true
		};
	},
	signOut: async ({ cookies }) => {
		cookies.delete('sessionid', {
			path: '/'
		});
		cookies.delete('user', {
			path: '/'
		});
	}
};
