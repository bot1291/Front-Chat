import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import intlFormatDistance from 'date-fns/intlFormatDistance';
import isThisHour from 'date-fns/isThisHour';
import isThisYear from 'date-fns/isThisYear';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';
import ru from 'date-fns/locale/ru';

export const getDate = (date: string): string => {
	const messageDate = new Date(date);

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
