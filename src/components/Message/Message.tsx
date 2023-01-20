import styles from './Message.module.scss';
import { MessageProps } from './Message.props';
import cn from 'classnames';
import { FC } from 'react';
import HisIcon from './his.svg';
import YourIcon from './your.svg';
import ru from 'date-fns/locale/ru';
import {
	isThisHour,
	isYesterday,
	isThisYear,
	intlFormatDistance,
	isToday,
	formatDistanceToNow,
	format,
} from 'date-fns';
import ReadedIcon from './readed.svg';
import NoReadedIcon from './noreaded.svg';

export const Message: FC<MessageProps> = ({
	his,
	date,
	children,
	isReaded,
	attachments,
	className,
	...props
}) => {
	const messageDate = new Date(date);

	const getIsReaded = (): JSX.Element =>
		isReaded ? (
			<ReadedIcon className={styles.icon} />
		) : (
			<NoReadedIcon className={styles.icon} />
		);

	const getData = (): string => {
		if (isThisHour(messageDate)) {
			return formatDistanceToNow(messageDate, {
				includeSeconds: true,
				addSuffix: true,
				locale: ru,
			});
		}

		if (isToday(messageDate)) {
			return intlFormatDistance(messageDate, new Date(), {
				locale: 'ru',
				unit: 'hour',
			});
		}

		if (isYesterday(messageDate)) {
			return `Вчера, в ${format(messageDate, 'p', {
				locale: ru,
			})}`;
		}

		if (isThisYear(messageDate)) {
			return format(messageDate, 'dfloat: right; LLLL, p', {
				locale: ru,
			});
		}

		return format(messageDate, 'PPP', {
			locale: ru,
		});
	};

	const getBlockDate = () => {
		return his ? (
			<span className={styles.date}>{getData()}</span>
		) : (
			<div className={styles.dateAndReaded}>
				<span
					className={cn(styles.date, {
						[styles.yourDate]: !his,
					})}>
					{getData()}
				</span>
				{getIsReaded()}
			</div>
		);
	};

	return (
		<div
			className={cn(
				className,
				styles.Message,
				his ? styles.his : styles.your
			)}
			{...props}>
			<span className={styles.content}>{children}</span>
			{getBlockDate()}
			<YourIcon
				className={cn(
					styles.angle,
					his ? styles.angleHis : styles.angleYour
				)}
			/>
		</div>
	);
};
