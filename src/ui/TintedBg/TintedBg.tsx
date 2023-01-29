import styles from './TintedBg.module.scss';
import { TintedBgProps } from './TintedBg.props';
import cn from 'classnames';
import { FC } from 'react';
import { motion } from 'framer-motion';

export const TintedBg: FC<TintedBgProps> = ({ onClick, state, className }) => {
	const show = {
		opacity: 1,
		display: 'block',
		zIndex: 424241,
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
			animate={state ? show : hide}
			transition={{ duration: 0.2 }}
			className={cn(className, styles.bg)}
			onClick={onClick}
		/>
	);
};
