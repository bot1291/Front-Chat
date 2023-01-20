import styles from './WindowDialog.module.scss';
import { WindowDialogProps } from './WindowDialog.props';
import cn from 'classnames';
import { FC } from 'react';
import { Interactions, Message, TopLine } from '../../components';

export const WindowDialog: FC<WindowDialogProps> = ({
	className,
	...props
}) => {
	return (
		<div className={cn(className, styles.WindowDialog)} {...props}>
			<TopLine />
			<div className={styles.dialogs}>
				<Message
					his
					date="Thu Jan 19 2023 21:39:11 GMT+0300"
					className={styles.his}>
					Helloddddddвввввввввввввввввввdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
					ddddddddddddddd
					<br />
					ddddddddddddddd
					<br />
					ddddddddddddddd
					<br />
					ddddddddddddddd
					<br />
					ddddddddddddddd
					<br />
					ddddddddddddddd
					<br />
					ddddddddddddddd
				</Message>
				<Message
					date="Thu Jan 19 2023 21:39:11 GMT+0300"
					className={styles.your}
					attachments={[
						{
							filename: 'namefile',
							url: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=100',
						},
					]}>
					Hi
				</Message>
				<Message
					date="Thu Jan 19 2023 21:39:11 GMT+0300"
					className={styles.your}>
					Hi
				</Message>
				<Message
					date="Thu Jan 19 2023 21:39:11 GMT+0300"
					className={styles.your}>
					Hi
				</Message>
				<Message
					date="Thu Jan 19 2023 21:39:11 GMT+0300"
					className={styles.your}
					isReaded>
					Hi
				</Message>
				<Message
					date="Thu Jan 19 2023 21:39:11 GMT+0300"
					className={styles.your}>
					Hi
				</Message>
				<Message
					date="Thu Jan 20 2023 00:00:11 GMT+0300"
					className={styles.your}>
					Hi
				</Message>
				<Message
					date="Thu Jan 19 2023 21:39:11 GMT+0300"
					className={styles.your}>
					Hi
				</Message>
				<Message
					date="Thu Jan 20 2023 16:44:00 GMT+0300"
					className={styles.your}
					isReaded>
					Hi how are you
				</Message>
			</div>
			<Interactions />
		</div>
	);
};
