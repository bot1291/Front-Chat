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
		zIndex: 6,
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
			initial={{ left: isLeftAnimation ? '60vw' : undefined }}
			animate={clickedItem ? show : hide}
			transition={{ duration: isLeftAnimation ? 0.4 : 0.2 }}
			onClick={() => dispatch(setIsOneClicked(undefined))}
			className={cn(className, {
				[styles.itemClicked]: clickedItem,
			})}>
			<Component {...props} />
		</motion.div>
	);
};
