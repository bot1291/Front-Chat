import styles from './TopLine.module.scss';
import { TopLineProps } from './TopLine.props';
import cn from 'classnames';
import { FC } from 'react';

export const TopLine: FC<TopLineProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.TopLine)} {...props}>
			<button className={styles.button}></button>
		</div>
	);
};
