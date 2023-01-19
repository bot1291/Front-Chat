import styles from './MainMenu.module.scss';
import { MainMenuProps } from './MainMenu.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import { Dialog, Hamburger, Search } from '../../components';
import { Settings } from '..';

const dialogs = [
	{
		name: 'Artem',
		avatar: {
			img: 'https://sun9-32.userapi.com/impg/5DtN2YbRyW_Y3W-AgMNfimCuhDTmDJVqrsC1XQ/OxbWk1Rmfd4.jpg?size=1280x960&quality=96&sign=e82c3e2635e65ae19d31be8672798b2a&type=album',
			color: 'white',
		},
		lastMes: 'I like...',
		date: 'Thu Jan 19 2023 21:39:11 GMT+0300',
	},
	{
		name: 'Ivan',
		avatar: { img: '', color: 'green' },
		lastMes: 'I like...',
		date: 'Thu Jan 19 2023 21:39:11 GMT+0300',
	},
	{
		name: 'Petr',
		avatar: { img: '', color: 'blue' },
		lastMes: 'I like...',
		date: 'Thu Jan 19 2023 21:39:11 GMT+0300',
	},
	{
		name: 'Madzhahet',
		avatar: { img: '', color: 'pink' },
		lastMes: 'I like...',
		date: 'Thu Jan 19 2023 21:39:11 GMT+0300',
	},
	{
		name: 'Ivan',
		avatar: { img: '', color: 'corall' },
		lastMes: 'I like...',
		date: 'Thu Jan 19 2023 21:39:11 GMT+0300',
	},
	{
		name: 'Ivan',
		avatar: { img: '', color: 'white' },
		lastMes: 'I like...',
		date: 'Thu Jan 19 2023 21:39:11 GMT+0300',
	},
	{
		name: 'Igor',
		avatar: { img: '', color: 'white' },
		lastMes: 'I like...',
		date: 'Thu Jan 19 2023 21:39:11 GMT+0300',
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
					<Dialog key={Math.random()} {...d} />
				))}
			</div>
		</div>
	);
};
