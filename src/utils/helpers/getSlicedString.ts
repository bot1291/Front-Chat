export const getSlicedString = (string: string, charIndex: number): string => {
	if (string.length > charIndex) {
		return `${string.slice(0, charIndex).trim()}...`;
	}

	return string;
};
