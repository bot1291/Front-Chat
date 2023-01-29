import styles from './Message.module.scss';
import { MessageProps } from './Message.props';
import cn from 'classnames';
import { FC } from 'react';
import { DateBlock, Image } from '../../ui';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIsOneClicked } from '../../store/slices/ImageSlice/ImageSlice';

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
	const { attachment } = useAppSelector((state) => state.imageReducer);
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
					[styles.clicked]: attachment,
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
								key={Math.random()}
								alt={a.filename}
								src={a.url}
							/>
						))}

						{!children && date && (
							<DateBlock
								className={cn(styles.onlyPicDate, {
									[styles.unseen]: attachment,
								})}
								date={date}
								his={his}
								isReaded={isReaded}>
								{children}
							</DateBlock>
						)}
					</div>
				)}

				{attachment && (
					<Image
						onClick={() => {
							dispatch(setIsOneClicked(undefined));
						}}
						className={cn({
							[styles.imgClicked]: attachment,
						})}
						alt={attachment.filename}
						src={attachment.url}
					/>
				)}

				<button
					onClick={() => dispatch(setIsOneClicked(undefined))}
					className={cn(styles.bg, {
						[styles.bgClicked]: attachment,
					})}
				/>

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
