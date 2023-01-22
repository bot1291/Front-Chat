import styles from './Hamburger.module.scss';
import { HamburgerProps } from './Hamburger.props';
import cn from 'classnames';
import { FC } from 'react';
import HambIcon from './hamb.svg';

export const Hamburger: FC<HamburgerProps> = ({ className, ...props }) => {
	return (
		<button className={cn(styles.hamburger, className)} {...props}>
			<HambIcon />
		</button>
	);
};
