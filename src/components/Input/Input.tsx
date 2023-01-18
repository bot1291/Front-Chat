import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';
import { FC } from 'react';

export const Input: FC<InputProps> = ({ className, ...props }) => {
	return <input className={cn(className, styles.Input)} {...props} />;
};
