import styles from './Image.module.scss';
import { ImageProps } from './Image.props';
import cn from 'classnames';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIsOneClicked } from '../../store/slices/ImageSlice/ImageSlice';

export const Image: FC<ImageProps> = ({
	isSmall,
	alt,
	className,
	...props
}) => {
	const { isOneClicked } = useAppSelector((state) => state.imageReducer);
	const dispatch = useAppDispatch();

	return (
		<>
			<img
				alt={alt}
				className={cn(styles.image, className, {
					[styles.small]: isSmall,
				})}
				{...props}
			/>
			<button
				onClick={() => dispatch(setIsOneClicked(0))}
				className={cn(styles.bg, { [styles.bgClicked]: isOneClicked })}
			/>
		</>
	);
};
