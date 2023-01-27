import styles from './WindowDialog.module.scss';
import { WindowDialogProps } from './WindowDialog.props';
import cn from 'classnames';
import { FC, useEffect, useRef } from 'react';
import { Interactions, Message } from '../../components';
import { dialogs } from './data';
import { TopLine } from '../../ui';
import ScrollToBottom from 'react-scroll-to-bottom';

export const WindowDialog: FC<WindowDialogProps> = ({
	className,
	...props
}) => {
	const bottomDiv: React.MutableRefObject<HTMLDivElement | null> =
		useRef(null);

	useEffect(() => {
		bottomDiv.current?.addEventListener('resize', () => {
			bottomDiv.current?.scrollIntoView();
		});
	}, [bottomDiv]);

	return (
		<div className={cn(className, styles.WindowDialog)} {...props}>
			<TopLine />
			<ScrollToBottom
				initialScrollBehavior="auto"
				className={styles.dialogs}>
				{dialogs &&
					dialogs.map((d) => (
						<Message
							key={Math.random()}
							className={d.his ? styles.his : styles.your}
							{...d}>
							{d.text}
						</Message>
					))}
				<div ref={bottomDiv} />
			</ScrollToBottom>
			<Interactions />
		</div>
	);
};
