import styles from './WindowDialog.module.scss';
import { WindowDialogProps } from './WindowDialog.props';
import cn from 'classnames';
import { createRef, FC, useEffect } from 'react';
import { Interactions, Message } from '../../components';
import { dialogs } from './data';
import { TopLine } from '../../ui';

export const WindowDialog: FC<WindowDialogProps> = ({
	className,
	...props
}) => {
	const bottomDiv: React.RefObject<HTMLDivElement> = createRef();

	useEffect(() => {
		bottomDiv.current?.scrollIntoView();
	}, []);

	return (
		<div className={cn(className, styles.WindowDialog)} {...props}>
			<TopLine />
			<div className={styles.dialogs}>
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
			</div>
			<Interactions />
		</div>
	);
};
