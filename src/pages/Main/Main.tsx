import styles from './Main.module.scss';
import { MainProps } from './Main.props';
import cn from 'classnames';
import { FC } from 'react';
import { Search, Hamburger } from '../../components';

export const Main: FC<MainProps> = ({ className, ...props }) => {
	return (
		<div
			data-testid="wrapper"
			className={cn(className, styles.categories)}
			{...props}>
			<Search />
			<Hamburger />
		</div>
	);
};
