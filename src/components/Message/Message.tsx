import styles from './Message.module.scss';
import { MessageProps } from './Message.props';
import cn from 'classnames';
import { FC } from 'react';
import { DateBlock, Image } from '../../ui';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIsOneClicked } from '../../store/slices/clickedItemSlice/clickedItemSlice';

export const Message: FC<MessageProps> = ({
	his,
	isTyping,
	date,
	children,
	isReaded,
	attachments,
	smile,
	className,
	...props
}) => {
	const { clickedItem } = useAppSelector((state) => state.clickedItemReducer);
	const dispatch = useAppDispatch();

	return (
		<div className={cn(className, styles.messageBlock)} {...props}>
			{smile && (
				<div className={styles.smile}>
					<Image isSmall alt="Smile" src={smile} />
				</div>
			)}

			<div
				className={cn(styles.message, his ? styles.his : styles.your, {
					[styles.clicked]: clickedItem,
				})}>
				{attachments && (
					<div
						className={cn(styles.attachments, {
							[styles.unset]: !children,
						})}>
						{attachments.map((a) => (
							<Image
								onClick={() => {
									dispatch(setIsOneClicked(a));
								}}
								key={a.id}
								alt={a.filename}
								src={a.url}
							/>
						))}

						{!children && date && (
							<DateBlock
								style={{
									cursor:
										attachments.length === 1
											? 'pointer'
											: undefined,
								}}
								onClick={() => {
									attachments.length === 1 &&
										dispatch(
											setIsOneClicked(attachments[0])
										);
								}}
								className={cn(styles.onlyPicDate, {
									[styles.unseen]: clickedItem,
								})}
								date={date}
								his={his}
								isReaded={isReaded}>
								{children}
							</DateBlock>
						)}
					</div>
				)}

				{isTyping ? (
					<div className={cn(styles.typingContent)}>
						<span />
						<span />
						<span />
					</div>
				) : (
					children && (
						<div className={styles.content}>
							<span>{children}</span>
							{date && (
								<DateBlock
									date={date}
									his={his}
									isReaded={isReaded}>
									{children}
								</DateBlock>
							)}
						</div>
					)
				)}
			</div>
		</div>
	);
};
