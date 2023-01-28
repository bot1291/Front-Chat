import styles from './WindowDialog.module.scss';
import { WindowDialogProps } from './WindowDialog.props';
import cn from 'classnames';
import { FC, useEffect, useRef } from 'react';
import { Interactions, Message } from '../../components';
import { TopLine } from '../../ui';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useAppSelector } from '../../hooks/redux';

export const WindowDialog: FC<WindowDialogProps> = ({
	className,
	...props
}) => {
	const { currentDialog } = useAppSelector(
		(state) => state.currentUserReducer
	);
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
				{currentDialog.messages &&
					currentDialog.messages.length &&
					currentDialog.messages.map((d) => (
						<Message
							key={d.id}
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
