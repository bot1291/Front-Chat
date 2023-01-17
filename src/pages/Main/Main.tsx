import styles from './Main.module.scss';
import { MainProps } from './Main.props';
import cn from 'classnames';
import { FC } from 'react';
import { MainMenu } from '../../components';

export const Main: FC<MainProps> = ({ className, ...props }) => {
	return (
		<div
			data-testid="wrapper"
			className={cn(className, styles.wrapper)}
			{...props}>
			<MainMenu />
		</div>
	);
};
