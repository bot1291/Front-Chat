import format from 'date-fns/format';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import intlFormatDistance from 'date-fns/intlFormatDistance';
import isThisHour from 'date-fns/isThisHour';
import isThisYear from 'date-fns/isThisYear';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';
import ru from 'date-fns/locale/ru';

export const getDate = (date: string, shortVersion = false): string => {
	const messageDate = new Date(date);

	if (isThisHour(messageDate)) {
		return formatDistanceToNow(messageDate, {
			includeSeconds: !shortVersion,
			addSuffix: true,
			locale: ru,
		});
	}

	if (isToday(messageDate)) {
		return intlFormatDistance(messageDate, new Date(), {
			locale: 'ru',
		});
	}

	if (isYesterday(messageDate)) {
		return `Вчера${
			!shortVersion
				? `, в ${format(messageDate, 'p', {
						locale: ru,
				  })}`
				: ''
		}`;
	}

	if (isThisYear(messageDate)) {
		return format(messageDate, `d LLLL${!shortVersion ? `, p` : ''}`, {
			locale: ru,
		});
	}

	return format(messageDate, `${!shortVersion ? 'PPP' : 'P'}`, {
		locale: ru,
	});
};
