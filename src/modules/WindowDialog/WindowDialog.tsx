import styles from './WindowDialog.module.scss';
import { WindowDialogProps } from './WindowDialog.props';
import cn from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { Interactions, Message } from '../../components';
import { TopLine } from '../../ui';
import ScrollToBottom from 'react-scroll-to-bottom';
import { useAppSelector } from '../../hooks/redux';
import ArrowIcon from './arrow.svg';
export const WindowDialog: FC<WindowDialogProps> = ({
	className,
	...props
}) => {
	const { currentDialog } = useAppSelector(
		(state) => state.currentUserReducer
	);
	const bottomDiv: React.MutableRefObject<HTMLDivElement | null> =
		useRef(null);
	const isCurrentDiaglosChosen = Object.keys(currentDialog).length;
	const [isHintVisible, setIsHintVisible] = useState<boolean>(
		localStorage.isHintVisible ? false : true
	);

	useEffect(() => {
		bottomDiv.current?.addEventListener('resize', () => {
			bottomDiv.current?.scrollIntoView({ behavior: 'auto' });
		});
	}, [bottomDiv]);

	setTimeout(() => {
		setIsHintVisible(false);
		localStorage.isHintVisible = 42;
	}, 5000);

	return (
		<>
			<div
				className={cn(className, styles.WindowDialog, {
					[styles.centered]: !isCurrentDiaglosChosen,
				})}
				{...props}>
				{isCurrentDiaglosChosen ? (
					<>
						<TopLine />
						<ScrollToBottom
							initialScrollBehavior="auto"
							className={styles.dialogs}>
							{currentDialog.messages &&
								currentDialog.messages.length &&
								currentDialog.messages.map((d) => (
									<Message
										key={d.id}
										className={
											d.his ? styles.his : styles.your
										}
										{...d}>
										{d.text}
									</Message>
								))}
							<div ref={bottomDiv} />
						</ScrollToBottom>
						<Interactions />
					</>
				) : (
					<p className={styles.select}>
						Выберите, кому хотели бы написать
						<span
							className={cn(styles.hint, {
								[styles.visible]: !isHintVisible,
							})}>
							<span>Темную тему можно задать в настройках</span>
							<ArrowIcon className={styles.arrow} />
						</span>
					</p>
				)}
			</div>
		</>
	);
};
