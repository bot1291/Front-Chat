import styles from './Main.module.scss';
import { MainProps } from './Main.props';
import cn from 'classnames';
import { FC } from 'react';
import { MainMenu, Message } from '../../components';

export const Main: FC<MainProps> = ({ className, ...props }) => {
	return (
		<div
			data-testid="wrapper"
			className={cn(className, styles.wrapper)}
			{...props}>
			<Message data={'18.01.2023'}>Text</Message>
			<Message his data={'18.01.2023'}>
				Text
			</Message>
			<MainMenu />
		</div>
	);
};
