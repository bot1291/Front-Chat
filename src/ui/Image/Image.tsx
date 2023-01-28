import styles from './Image.module.scss';
import { ImageProps } from './Image.props';
import cn from 'classnames';
import { FC } from 'react';

export const Image: FC<ImageProps> = ({
	isSmall,
	alt,
	className,
	...props
}) => {
	return (
		<>
			<img
				alt={alt}
				className={cn(styles.image, className, {
					[styles.small]: isSmall,
				})}
				{...props}
			/>
		</>
	);
};
