import { TypeTheme } from '../../interfaces/TypeTheme';

export const getTheme = (): TypeTheme => {
	const theme = localStorage.theme;

	if (theme) {
		return theme;
	}

	const userMedia = window.matchMedia('(prefers-color-scheme: light)');

	if (userMedia.matches) {
		return 'light';
	}

	return 'default';
};
