import styles from './Dialog.module.scss';
import { DialogProps } from './Dialog.props';
import cn from 'classnames';
import { FC, useState } from 'react';

export const Dialog: FC<DialogProps> = ({ className, ...props }) => {
	const [isChosen, setIsChosen] = useState<boolean>(false);

	return (
		<div
			className={cn(className, styles.dialog, {
				[styles.chosen]: isChosen,
			})}
			{...props}>
			<button
				onClick={() => setIsChosen(!isChosen)}
				className={styles.button}>
				<img src="" alt="Avatar" className={styles.avatar} />
				<div className={styles.author}>
					<span className={styles.name}>Name</span>
					<span className={styles.lastMes}>Last mes</span>
				</div>
				<span className={styles.date}>17.01.2023</span>
			</button>
		</div>
	);
};
