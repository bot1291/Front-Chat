import styles from './Search.module.scss';
import { SearchProps } from './Search.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import LoopIcon from './loop.svg';

export const Search: FC<SearchProps> = ({
	text = 'Поиск...',
	className,
	...props
}) => {
	const [value, setValue] = useState<string>('');

	return (
		<div
			data-testid="input-wrapper"
			className={cn(styles.wrapper, className)}
			{...props}>
			<LoopIcon className={styles.loop} />
			<input
				data-testid="search"
				placeholder={text}
				onChange={(e) => setValue(e.currentTarget.value)}
				value={value}
				className={cn(styles.search)}
			/>
		</div>
	);
};
