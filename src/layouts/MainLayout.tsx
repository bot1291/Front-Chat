import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.scss';
import cn from 'classnames';
import { MainLayoutProps } from './MainLayout.props';
import { ClickedItemWindow } from '../components/ClickedItemWindow/ClickedItemWindow';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { Setting, Image } from '../ui';
import { TintedBg } from '../ui/TintedBg/TintedBg';
import { setIsOneClicked } from '../store/slices/clickedItemSlice/clickedItemSlice';

export const MainLayout: FC<MainLayoutProps> = ({ className, ...props }) => {
	const { clickedItem } = useAppSelector((state) => state.clickedItemReducer);
	const dispatch = useAppDispatch();

	return (
		<>
			<div className={cn(styles.wrapper, className)} {...props}>
				<Outlet />
			</div>
			{clickedItem && 'filename' in clickedItem && (
				<ClickedItemWindow
					Component={Image}
					alt={clickedItem.filename}
					src={clickedItem.url}
				/>
			)}

			{clickedItem && 'icon' in clickedItem && (
				<ClickedItemWindow
					isLeftAnimation
					Component={Setting}
					color={clickedItem.color}
					name={clickedItem.name}
					icon={clickedItem.icon}
				/>
			)}

			<TintedBg
				state={clickedItem}
				onClick={() => dispatch(setIsOneClicked(undefined))}
			/>
		</>
	);
};
