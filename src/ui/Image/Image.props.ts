import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

export interface ImageProps
	extends DetailedHTMLProps<
		ImgHTMLAttributes<HTMLImageElement>,
		HTMLImageElement
	> {
	isSmall?: boolean;
}
