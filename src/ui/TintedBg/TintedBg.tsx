import styles from './TintedBg.module.scss';
import { TintedBgProps } from './TintedBg.props';
import cn from 'classnames';
import { FC } from 'react';
import { motion } from 'framer-motion';

export const TintedBg: FC<TintedBgProps> = ({
	zIndex = 5,
	onClick,
	state,
	className,
	cursor,
}) => {
	const show = {
		opacity: 1,
		display: 'block',
		zIndex,
	};

	const hide = {
		opacity: 0,
		transitionEnd: {
			display: 'none',
			zIndex: -1,
		},
	};

	return (
		<motion.button
			style={{ cursor }}
			animate={state ? show : hide}
			transition={{ duration: 0.2 }}
			className={cn(className, styles.bg)}
			onClick={onClick}
		/>
	);
};
