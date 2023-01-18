import styles from './TopLine.module.scss';
import { TopLineProps } from './TopLine.props';
import cn from 'classnames';
import { FC } from 'react';

export const TopLine: FC<TopLineProps> = ({ className, ...props }) => {
	const avatar = { img: '', color: 'pink' };
	const name = 'Partner';

	return (
		<div className={cn(className, styles.TopLine)} {...props}>
			<div className={styles.user}>
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
				<div className={styles.nameBlock}>
					<span className={styles.name}>{name}</span>
					<span className={styles.offline}>offline</span>
				</div>
			</div>
		</div>
	);
};
