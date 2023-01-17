import styles from './MainMenu.module.scss';
import { MainMenuProps } from './MainMenu.props';
import cn from 'classnames';
import { FC } from 'react';
import { Dialog, Hamburger, Search } from '..';

const dialogs = [
	{ name: 'Ivan', avatar: '', lastMes: 'I like...' },
	{ name: 'Ivan', avatar: '', lastMes: 'I like...' },
	{ name: 'Ivan', avatar: '', lastMes: 'I like...' },
	{ name: 'Ivan', avatar: '', lastMes: 'I like...' },
	{ name: 'Ivan', avatar: '', lastMes: 'I like...' },
	{ name: 'Ivan', avatar: '', lastMes: 'I like...' },
	{ name: 'Ivan', avatar: '', lastMes: 'I like...' },
	{ name: 'Ivan', avatar: '', lastMes: 'I like...' },
	{ name: 'Ivan', avatar: '', lastMes: 'I like...' },
	{ name: 'Ivan', avatar: '', lastMes: 'I like...' },
	{ name: 'Ivan', avatar: '', lastMes: 'I like...' },
	{ name: 'Ivan', avatar: '', lastMes: 'I like...' },
];

export const MainMenu: FC<MainMenuProps> = ({ className, ...props }) => {
	return (
		<div className={cn(className, styles.MainMenu)} {...props}>
			<div className={styles.searchAndMenu}>
				<Hamburger />
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
