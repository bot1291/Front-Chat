import styles from './WindowDialog.module.scss';
import { WindowDialogProps } from './WindowDialog.props';
import cn from 'classnames';
import { FC } from 'react';
import { Interactions, Message } from '../../components';
import { dialogs } from './date';
import { TopLine } from '../../ui';

export const WindowDialog: FC<WindowDialogProps> = ({
	className,
	...props
}) => {
	return (
		<div className={cn(className, styles.WindowDialog)} {...props}>
			<TopLine />
			<div className={styles.dialogs}>
				{dialogs &&
					dialogs.map((d) => (
						<Message
							key={Math.random()}
							className={d.his ? styles.his : styles.your}
							{...d}>
							{d.text}
						</Message>
					))}
			</div>
			<Interactions />
		</div>
	);
};
