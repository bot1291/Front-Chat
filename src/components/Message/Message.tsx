import styles from './Message.module.scss';
import { MessageProps } from './Message.props';
import cn from 'classnames';
import { FC } from 'react';
import HisIcon from './his.svg';
import YourIcon from './your.svg';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import ru from 'date-fns/locale/ru';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';
import isThisHour from 'date-fns/isThisHour';
import format from 'date-fns/format';
import intlFormatDistance from 'date-fns/intlFormatDistance';
import isThisYear from 'date-fns/isThisYear';

export const Message: FC<MessageProps> = ({
	his,
	data,
	children,
	className,
	...props
}) => {
	const messageDate = new Date(data);

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
