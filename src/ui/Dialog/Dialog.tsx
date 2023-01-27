import styles from './Dialog.module.scss';
import { DialogProps } from './Dialog.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import { format, isToday } from 'date-fns';
import ru from 'date-fns/locale/ru';

export const Dialog: FC<DialogProps> = ({
	avatar,
	lastMes = 'test',
	name = 'Name',
	date,
	className,
	...props
}) => {
	const [isChosen, setIsChosen] = useState<boolean>(false);
	const messageDate = new Date(date);

	const getDate = (): string => {
		if (isToday(messageDate)) {
			return format(messageDate, 'p', {
				locale: ru,
			});
		}

		return format(messageDate, 'EEEEEE', {
			locale: ru,
		});
	};

	const getLastMessage = () => {
		if (lastMes.length >= 15) {
			return `${lastMes.slice(0, 15).trim()}...`;
		}

		return lastMes;
	};

	return (
		<div
			className={cn(className, styles.dialog, {
				[styles.chosen]: isChosen,
			})}
			{...props}>
			<Button
				onClick={() => setIsChosen(!isChosen)}
				className={styles.button}>
				<div
					style={{
						backgroundColor: avatar.img ? undefined : avatar.color,
					}}
					className={styles.avatarWrapper}>
					{avatar.img ? (
						<img
							src={avatar.img}
							alt="Avatar"
							className={styles.avatar}
						/>
					) : (
						<span className={styles.firstLetter}>
							{name[0]?.toUpperCase()}
						</span>
					)}
				</div>
				<div className={styles.author}>
					<span className={styles.name}>{name}</span>
					<span className={styles.lastMes}>{getLastMessage()}</span>
				</div>
				<span className={styles.date}>{getDate()}</span>
			</Button>
		</div>
	);
};
