import styles from './DateBlock.module.scss';
import cn from 'classnames';
import ReadedIcon from './readed.svg';
import NoReadedIcon from './noreaded.svg';
import { DateBlockProps } from './DateBlock.props';
import { FC } from 'react';
import { getDate } from '../../utils';

export const DateBlock: FC<DateBlockProps> = ({
	date,
	his,
	isReaded,
	className,
	children,
	...props
}): JSX.Element =>
	his ? (
		<span
			className={cn(className, styles.date, styles.hisDate, {
				[styles.onlyPicDate]: !children,
			})}
			{...props}>
			{getDate(date)}
		</span>
	) : (
		<div
			className={cn(className, styles.dateBlock, {
				[styles.onlyPicDate]: !children,
			})}
			{...props}>
			<span
				className={cn(styles.date, {
					[styles.yourDate]: !his,
				})}>
				{getDate(date)}
			</span>
			{isReaded ? (
				<ReadedIcon className={styles.icon} />
			) : (
				<NoReadedIcon className={styles.icon} />
			)}
		</div>
	);
