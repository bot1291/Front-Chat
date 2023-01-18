import styles from './Setting.module.scss';
import { SettingProps } from './Setting.props';
import cn from 'classnames';
import { FC } from 'react';

export const Setting: FC<SettingProps> = ({
	string,
	icon,
	color,
	className,
	...props
}) => {
	return (
		<button className={cn(className, styles.Setting)} {...props}>
			<div style={{ backgroundColor: color }} className={styles.icon}>
				{icon}
			</div>
			<span>{string}</span>
		</button>
	);
};
