import styles from './Interactions.module.scss';
import { InteractionsProps } from './Interactions.props';
import cn from 'classnames';
import { FC } from 'react';
import MircoIcon from './micro.svg';
import PaperClipIcon from './paperClip.svg';
import SmileIcon from './smile.svg';
import { Input } from 'antd';

const { TextArea } = Input;

export const Interactions: FC<InteractionsProps> = ({
	className,
	...props
}) => {
	return (
		<div className={cn(className, styles.Interactions)} {...props}>
			<PaperClipIcon className={styles.paperClip} />
			<TextArea
				placeholder="Напишите сообщение..."
				autoSize={{ minRows: 1, maxRows: 6 }}
				bordered={false}
				allowClear
				className={styles.input}
			/>
			<SmileIcon className={styles.smile} />
			<MircoIcon className={styles.micro} />
		</div>
	);
};
