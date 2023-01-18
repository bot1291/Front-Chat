import styles from './Message.module.scss';
import { MessageProps } from './Message.props';
import cn from 'classnames';
import { FC } from 'react';

export const Message: FC<MessageProps> = ({ className, ...props }) => {
	return <div className={cn(className, styles.Message)} {...props}></div>;
};
