import styles from './ClickedItemWindow.module.scss';
import { ClickedItemWindowProps } from './ClickedItemWindow.props';
import cn from 'classnames';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIsOneClicked } from '../../store/slices/clickedItemSlice/clickedItemSlice';
import { motion } from 'framer-motion';

export const ClickedItemWindow: FC<ClickedItemWindowProps> = ({
	Component,
	isLeftAnimation = false,
	className,
	...props
}) => {
	const { clickedItem } = useAppSelector((state) => state.clickedItemReducer);
	const dispatch = useAppDispatch();

	const show = {
		opacity: 1,
		display: 'block',
		zIndex: 424242,
		left: '50vw',
	};

	const hide = {
		opacity: 0,
		transitionEnd: {
			display: 'none',
			zIndex: -1,
		},
	};

	return (
		<motion.div
			style={{ display: 'none' }}
			initial={isLeftAnimation && { left: '60vw' }}
			animate={clickedItem ? show : hide}
			transition={{ duration: 0.4 }}
			onClick={() => dispatch(setIsOneClicked(undefined))}
			className={cn(className, {
				[styles.itemClicked]: clickedItem,
			})}>
			<Component {...props} />
		</motion.div>
	);
};
