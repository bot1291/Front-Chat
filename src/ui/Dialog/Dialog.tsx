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
	name,
	dateLastMes,
	className,
	...props
}) => {
	const [isChosen, setIsChosen] = useState<boolean>(false);

	return (
		<div className={cn(className, styles.dialog)} {...props}>
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
						{getSlicedString(name, 10)}
					</span>
					<span className={styles.lastMes}>
						{lastMes ? (
							getSlicedString(lastMes, 20)
						) : (
							<span className={styles.empty}>empty</span>
						)}
					</span>
				</div>
				<span className={styles.date}>
					{dateLastMes && getDate(dateLastMes, true)}
				</span>
			</Button>
		</div>
	);
};
