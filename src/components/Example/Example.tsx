import styles from './Example.module.scss';
import { ExampleProps } from './Example.props';
import cn from 'classnames';
import { FC } from 'react';

export const Example: FC<ExampleProps> = ({ className, ...props }) => {
	return (
		<div
			data-testid="wrapper"
			className={cn(className, styles.categories)}
			{...props}></div>
	);
};
