import styles from './Message.module.scss';
import { MessageProps } from './Message.props';
import cn from 'classnames';
import { FC } from 'react';
import { getDateBlock } from './helpers/getDateBlock';
import { Image } from '../../ui';
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
	const { isOneClicked } = useAppSelector((state) => state.imageReducer);
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
					[styles.clicked]: isOneClicked,
				})}>
				{attachments && (
					<div
						className={cn(styles.attachments, {
							[styles.unset]: !children,
						})}>
						{attachments.map((a, index) => (
							<Image
								onClick={() => {
									if (isOneClicked === index + 1)
										dispatch(setIsOneClicked(0));
									if (isOneClicked !== index + 1)
										dispatch(setIsOneClicked(index + 1));
								}}
								className={cn({
									[styles.imgClicked]:
										isOneClicked === index + 1,
								})}
								key={Math.random()}
								alt={a.filename}
								src={a.url}
							/>
						))}
						{!children &&
							date &&
							getDateBlock(date, children, his, isReaded)}
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
							{date &&
								getDateBlock(date, children, his, isReaded)}
						</div>
					)
				)}
			</div>
		</div>
	);
};
