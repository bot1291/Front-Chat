import styles from './Message.module.scss';
import { MessageProps } from './Message.props';
import cn from 'classnames';
import { FC } from 'react';
import HisIcon from './his.svg';
import YourIcon from './your.svg';

export const Message: FC<MessageProps> = ({
	his,
	data,
	children,
	className,
	...props
}) => {
	return his ? (
		<div className={cn(className, styles.Message, styles.his)} {...props}>
			<span className={styles.content}>{children}</span>
			<span className={styles.data}>{data}</span>
			<HisIcon className={cn(styles.angle, styles.angleHis)} />
		</div>
	) : (
		<div className={cn(className, styles.Message, styles.your)} {...props}>
			<span className={styles.content}>{children}</span>
			<span className={styles.data}>{data}</span>
			<YourIcon className={cn(styles.angle, styles.angleYour)} />
		</div>
	);
};
