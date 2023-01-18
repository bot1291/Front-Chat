import styles from './Input.module.scss';
import { InputProps } from './Input.props';
import cn from 'classnames';
import { FC, useState } from 'react';

export const Input: FC<InputProps> = ({ className, ...props }) => {
	const [value, setValue] = useState<string>('');

	return (
		<input
			value={value}
			onChange={(e) => setValue(e.currentTarget.value)}
			className={cn(className, styles.Input)}
			{...props}
		/>
	);
};
