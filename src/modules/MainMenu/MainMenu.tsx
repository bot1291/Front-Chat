import styles from './MainMenu.module.scss';
import { MainMenuProps } from './MainMenu.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import { Dialog, Hamburger, Search } from '../../components';
import { Settings } from '..';

const dialogs = [
	{
		name: 'Artem',
		avatar: { img: '', color: 'white' },
		lastMes: 'I like...',
	},
	{
		name: 'Ivan',
		avatar: { img: '', color: 'green' },
		lastMes: 'I like...',
	},
	{
		name: 'Petr',
		avatar: { img: '', color: 'blue' },
		lastMes: 'I like...',
	},
	{
		name: 'Madzhahet',
		avatar: { img: '', color: 'pink' },
		lastMes: 'I like...',
	},
	{
		name: 'Ivan',
		avatar: { img: '', color: 'corall' },
		lastMes: 'I like...',
	},
	{
		name: 'Ivan',
		avatar: { img: '', color: 'white' },
		lastMes: 'I like...',
	},
	{
		name: 'Igor',
		avatar: { img: '', color: 'white' },
		lastMes: 'I like...',
	},
];

export const MainMenu: FC<MainMenuProps> = ({ className, ...props }) => {
	const [isOpened, setIsOpened] = useState<boolean>(false);

	return (
		<div className={cn(className, styles.MainMenu)} {...props}>
			<Settings
				className={cn(styles.settings, {
					[styles.opened]: isOpened,
				})}
			/>
			<button
				onClick={() => setIsOpened(!isOpened)}
				className={cn(styles.dimmer, {
					[styles.dimmerOpened]: isOpened,
				})}
			/>
			<div className={styles.searchAndMenu}>
				<Hamburger onClick={() => setIsOpened(!isOpened)} />
				<Search className={styles.search} />
			</div>
			<div className={styles.dialogs}>
				{dialogs.map((d) => (
					<Dialog
						key={Math.random()}
						lastMes={d.lastMes}
						name={d.name}
						avatar={d.avatar}
					/>
				))}
			</div>
		</div>
	);
};
