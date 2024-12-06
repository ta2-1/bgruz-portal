export const useTokenService = () => {
	const getAccessToken = () => localStorage.getItem('taras.authToken');
	const getRefreshToken = () => localStorage.getItem('taras.refreshToken');

	const setAccessToken = (token: string) => localStorage.setItem('taras.authToken', token);
	const setRefreshToken = (token: string) => localStorage.setItem('taras.refreshToken', token);

	const removeAccessToken = () => localStorage.removeItem('taras.authToken');
	const removeRefreshToken = () => localStorage.removeItem('taras.refreshToken');

	return {
		getAccessToken,
		getRefreshToken,
		setAccessToken,
		setRefreshToken,
		removeAccessToken,
		removeRefreshToken,
	};
};
