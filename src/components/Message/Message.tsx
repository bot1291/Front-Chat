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

export const Message: FC<MessageProps> = ({
	his,
	date,
	children,
	className,
	...props
}) => {
	const messageDate = new Date(date);

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
			return format(messageDate, 'd LLLL, p', {
				locale: ru,
			});
		}

		return format(messageDate, 'PPP', {
			locale: ru,
		});
	};

	return his ? (
		<div className={cn(className, styles.Message, styles.his)} {...props}>
			<span className={styles.content}>{children}</span>
			<span className={styles.data}>{getData()}</span>
			<HisIcon className={cn(styles.angle, styles.angleHis)} />
		</div>
	) : (
		<div className={cn(className, styles.Message, styles.your)} {...props}>
			<span className={styles.content}>{children}</span>
			<span className={styles.data}>{getData()}</span>
			<YourIcon className={cn(styles.angle, styles.angleYour)} />
		</div>
	);
};
