import styles from './Hamburger.module.scss';
import { HamburgerProps } from './Hamburger.props';
import cn from 'classnames';
import { FC } from 'react';
import HambIcon from './hamb.svg';

export const Hamburger: FC<HamburgerProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.hamburger)} {...props}>
			<HambIcon />
		</div>
	);
};
