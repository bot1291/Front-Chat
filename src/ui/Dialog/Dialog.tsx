import styles from './Dialog.module.scss';
import { DialogProps } from './Dialog.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import Button from '@mui/material/Button';
import { getSlicedString } from '../../utils/helpers/getSlicedString';
import { getDate } from '../../utils';

export const Dialog: FC<DialogProps> = ({
	avatar,
	lastMes,
	name = 'Name',
	date,
	className,
	...props
}) => {
	const [isChosen, setIsChosen] = useState<boolean>(false);

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
					<span className={styles.name}>
						{getSlicedString(name, 4)}
					</span>
					<span className={styles.lastMes}>
						{getSlicedString(lastMes, 15)}
					</span>
				</div>
				<span className={styles.date}>{getDate(date, true)}</span>
			</Button>
		</div>
	);
};
