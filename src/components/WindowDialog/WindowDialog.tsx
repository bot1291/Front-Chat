import styles from './WindowDialog.module.scss';
import { WindowDialogProps } from './WindowDialog.props';
import cn from 'classnames';
import { FC } from 'react';
import { TopLine, Interactions, Message } from '..';

export const WindowDialog: FC<WindowDialogProps> = ({
	className,
	...props
}) => {
	return (
		<div className={cn(className, styles.WindowDialog)} {...props}>
			<TopLine />
			<div className={styles.dialogs}>
				<Message his data="18.01.2023" className={styles.his}>
					Hello
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
				<Message data="18.01.2023" className={styles.your}>
					Hi
				</Message>
			</div>
			<Interactions />
		</div>
	);
};
