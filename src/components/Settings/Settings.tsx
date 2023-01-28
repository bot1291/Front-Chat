import styles from './Settings.module.scss';
import { SettingsProps } from './Settings.props';
import cn from 'classnames';
import { FC } from 'react';
import CloudIcon from './cloud.svg';
import { Setting } from '../../ui';
import { Switch } from 'antd';
import './Settings.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setTheme } from '../../store/slices/ThemeSlice/ThemeSlice';

export const Settings: FC<SettingsProps> = ({ className, ...props }) => {
	const { theme } = useAppSelector((state) => state.themeReducer);
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.currentUserReducer);

	return (
		<div className={cn(className, styles.Settings)} {...props}>
			<div className={styles.user}>
				<div
					style={{
						backgroundColor: Object.keys(user).length
							? user.avatar.color
							: undefined,
					}}
					className={styles.avatarWrapper}>
					{Object.keys(user).length && user.avatar.img ? (
						<img
							src={user.avatar.img}
							alt="Avatar"
							className={styles.avatar}
						/>
					) : (
						<span className={styles.firstLetter}>
							{user.name && user.name[0]?.toUpperCase()}
						</span>
					)}
				</div>
				<span>{user.name}</span>
			</div>
			<div className={styles.allSettings}>
				<Setting
					icon={<CloudIcon />}
					color={'green'}
					string={'Палитра'}
				/>
				<Setting
					icon={<CloudIcon />}
					color={'#4DC54D'}
					string={'Палитра'}
				/>
				<div className={styles.blackOn}>
					<Switch
						className={styles.button}
						defaultChecked={localStorage.theme === 'black'}
						onChange={() => {
							if (theme === 'default')
								dispatch(setTheme('black'));
							if (theme === 'black')
								dispatch(setTheme('default'));
						}}
					/>
					Темная тема
				</div>
			</div>
		</div>
	);
};
