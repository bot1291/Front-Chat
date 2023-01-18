import styles from './Dialog.module.scss';
import { DialogProps } from './Dialog.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import Button from '@mui/material/Button';

export const Dialog: FC<DialogProps> = ({
	avatar,
	lastMes = 'test',
	name = 'Name',
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
					<span className={styles.name}>{name}</span>
					<span className={styles.lastMes}>{lastMes}</span>
				</div>
				<span className={styles.date}>17.01.2023</span>
			</Button>
		</div>
	);
};
