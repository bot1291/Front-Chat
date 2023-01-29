import styles from './TintedBg.module.scss';
import { TintedBgProps } from './TintedBg.props';
import cn from 'classnames';
import { FC } from 'react';

export const TintedBg: FC<TintedBgProps> = ({ state, className, ...props }) => {
	return (
		<button
			className={cn(className, styles.bg, {
				[styles.bgClicked]: state,
			})}
			{...props}
		/>
	);
};
