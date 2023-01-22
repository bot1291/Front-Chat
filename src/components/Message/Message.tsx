import styles from './Message.module.scss';
import { MessageProps } from './Message.props';
import cn from 'classnames';
import { FC } from 'react';

import { getDateBlock } from './helpers/getDateBlock';

export const Message: FC<MessageProps> = ({
	his,
	isTyping,
	date,
	children,
	isReaded,
	attachments,
	smile,
	className,
	...props
}) => {
	if (isTyping) {
		return <></>;
	}

	return (
		<div className={cn(className, styles.messageBlock)} {...props}>
			{smile && (
				<div className={styles.smile}>
					{smile.map(() => (
						<img key={Math.random()} alt={''} src={''} />
					))}
				</div>
			)}
			<div className={cn(styles.message, his ? styles.his : styles.your)}>
				{attachments && (
					<div
						className={cn(styles.attachments, {
							[styles.unset]: !children,
						})}>
						{attachments.map((a) => (
							<img
								key={Math.random()}
								alt={a.filename}
								src={a.url}
							/>
						))}
						{!children &&
							getDateBlock(date, children, his, isReaded)}
					</div>
				)}
				{children && (
					<div className={styles.content}>
						<span>{children}</span>
						{getDateBlock(date, children, his, isReaded)}
					</div>
				)}
			</div>
		</div>
	);
};
