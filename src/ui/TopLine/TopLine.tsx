import styles from './TopLine.module.scss';
import { TopLineProps } from './TopLine.props';
import cn from 'classnames';
import { FC } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';

export const TopLine: FC<TopLineProps> = ({ className, ...props }) => {
	const { currentDialog } = useAppSelector(
		(state) => state.currentUserReducer
	);

	return (
		<div className={cn(className, styles.TopLine)} {...props}>
			<div className={styles.user}>
				<div
					style={{
						backgroundColor: Object.keys(currentDialog).length
							? currentDialog.avatar.color
							: undefined,
					}}
					className={styles.avatarWrapper}>
					{Object.keys(currentDialog).length &&
					currentDialog.avatar.img ? (
						<img
							src={currentDialog.avatar.img}
							alt="Avatar"
							className={styles.avatar}
						/>
					) : (
						<span className={styles.firstLetter}>
							{currentDialog.name &&
								currentDialog.name[0]?.toUpperCase()}
						</span>
					)}
				</div>
				<div className={styles.nameBlock}>
					<span className={styles.name}>{currentDialog.name}</span>
					<span className={styles.offline}>offline</span>
				</div>
			</div>
			<div style={{ display: 'flex', gap: 10, marginRight: 10 }}>
				<Link to="/logBackup">
					<Button>Логин</Button>
				</Link>
				<Link to="/regBackup">
					<Button>Регистрация</Button>
				</Link>
			</div>
		</div>
	);
};
