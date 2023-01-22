import ReadedIcon from '../assets/readed.svg';
import NoReadedIcon from '../assets/noreaded.svg';
import styles from '../Message.module.scss';

export const getIsReaded = (isReaded: boolean | undefined): JSX.Element =>
	isReaded ? (
		<ReadedIcon className={styles.icon} />
	) : (
		<NoReadedIcon className={styles.icon} />
	);
