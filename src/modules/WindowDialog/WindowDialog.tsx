import styles from './WindowDialog.module.scss';
import { WindowDialogProps } from './WindowDialog.props';
import cn from 'classnames';
import { FC } from 'react';
import { Interactions, Message } from '../../components';
import { dialogs } from './data';
import { TopLine } from '../../ui';
import ScrollToBottom from 'react-scroll-to-bottom';

export const WindowDialog: FC<WindowDialogProps> = ({
	className,
	...props
}) => {
	return (
		<div className={cn(className, styles.WindowDialog)} {...props}>
			<TopLine />
			<ScrollToBottom
				initialScrollBehavior="auto"
				className={styles.dialogs}>
				{dialogs &&
					dialogs.map((d) => (
						<Message
							key={Math.random()}
							className={d.his ? styles.his : styles.your}
							{...d}>
							{d.text}
						</Message>
					))}
			</ScrollToBottom>
			<Interactions />
		</div>
	);
};
