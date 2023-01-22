import styles from '../Message.module.scss';
import cn from 'classnames';
import { getDate } from '../../../utils';
import { getIsReaded } from './getIsReaded';

export const getDateBlock = (
	date: string,
	children: React.ReactNode,
	his: boolean | undefined,
	isReaded: boolean | undefined
): JSX.Element =>
	his ? (
		<span
			className={cn(styles.date, styles.hisDate, {
				[styles.onlyPicDate]: !children,
			})}>
			{getDate(date)}
		</span>
	) : (
		<div
			className={cn(styles.dateBlock, {
				[styles.onlyPicDate]: !children,
			})}>
			<span
				className={cn(styles.date, {
					[styles.yourDate]: !his,
				})}>
				{getDate(date)}
			</span>
			{getIsReaded(isReaded)}
		</div>
	);
