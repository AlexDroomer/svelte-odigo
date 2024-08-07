/**
 *
 * @param {string} url
 * @param {object} options
 * @param {FormData} options.body
 * @param {HeadersInit} options.headers
 * @param {string} options.method
 * @returns {Promise<{ok: boolean, status: number, json: () => Promise<{message: string}>}>}
 */
export const fetchMock = (url, options) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			if (
				options.body.get('email') === 'nanashi@nogonbei.jp' &&
				options.body.get('password') === 'password'
			) {
				resolve({
					ok: true,
					status: 200,
					json: () => Promise.resolve({message: 'Login successful' })
				});
			} else {
				resolve({
					ok: false,
					status: 401,
					json: () => Promise.resolve({ message: 'Oops.. lets try placeholders' })
				});
			}
		}, 1000);
	});
};
