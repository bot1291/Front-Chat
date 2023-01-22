import styles from './MainMenu.module.scss';
import { MainMenuProps } from './MainMenu.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import { Settings } from '../../components';
import { dialogs } from './data';
import { Dialog, Hamburger, Search } from '../../ui';

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
					<Dialog key={Math.random()} {...d} />
				))}
			</div>
		</div>
	);
};
