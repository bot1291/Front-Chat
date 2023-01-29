import styles from './ClickedItemWindow.module.scss';
import { ClickedItemWindowProps } from './ClickedItemWindow.props';
import cn from 'classnames';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { TintedBg } from '../../ui/TintedBg/TintedBg';
import { setIsOneClicked } from '../../store/slices/clickedItemSlice/clickedItemSlice';

export const ClickedItemWindow: FC<ClickedItemWindowProps> = ({
	Component,
	className,
	...props
}) => {
	const { clickedItem } = useAppSelector((state) => state.clickedItemReducer);
	const dispatch = useAppDispatch();

	return (
		<>
			<Component
				onClick={() => dispatch(setIsOneClicked(undefined))}
				className={cn(className, {
					[styles.itemClicked]: clickedItem,
				})}
				{...props}
			/>
			<TintedBg
				state={clickedItem}
				onClick={() => dispatch(setIsOneClicked(undefined))}
			/>
		</>
	);
};
