import styles from './Interactions.module.scss';
import { InteractionsProps } from './Interactions.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import MircoIcon from './micro.svg';
import PaperClipIcon from './paperClip.svg';
import SmileIcon from './smile.svg';

export const Interactions: FC<InteractionsProps> = ({
	className,
	...props
}) => {
	const [value, setValue] = useState<string>('');

	return (
		<div className={cn(className, styles.Interactions)} {...props}>
			<PaperClipIcon className={styles.paperClip} />
			<input
				value={value}
				onChange={(e) => setValue(e.currentTarget.value)}
				placeholder="Напишите сообщение..."
				className={styles.input}
			/>
			<SmileIcon className={styles.smile} />
			<MircoIcon className={styles.micro} />
		</div>
	);
};
