import styles from './Message.module.scss';
import { MessageProps } from './Message.props';
import cn from 'classnames';
import { FC } from 'react';
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
	smile,
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

	const getDateBlock = (): JSX.Element =>
		his ? (
			<span
				className={cn(styles.date, styles.hisDate, {
					[styles.onlyPicDate]: !children,
				})}>
				{getData()}
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
					{getData()}
				</span>
				{getIsReaded()}
			</div>
		);

	return (
		<div className={cn(className, styles.messageBlock)} {...props}>
			{smile && (
				<div className={styles.smile}>
					{smile.map((a) => (
						<img key={Math.random()} alt={''} src={''} />
					))}
				</div>
			)}
			<div
				className={cn(
					className,
					styles.message,
					his ? styles.his : styles.your
				)}>
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
						{!children && getDateBlock()}
					</div>
				)}
				{children && (
					<div className={styles.content}>
						<span>{children}</span>
						{getDateBlock()}
					</div>
				)}
			</div>
		</div>
	);
};
