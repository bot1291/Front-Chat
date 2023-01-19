import styles from './Registration.module.scss';
import { RegistrationProps } from './Registration.props';
import cn from 'classnames';
import { FC } from 'react';
import { FormRegistr } from '../../modules';
import { Link } from 'react-router-dom';

export const Registration: FC<RegistrationProps> = ({
	className,
	...props
}) => {
	return (
		<div className={cn(className, styles.Registration)} {...props}>
			<div
				data-testid="login-wrapper"
				className={cn(className, styles.wrapper)}
				{...props}>
				<h1 className={styles.welcome}>Регистрация</h1>
				<span className={styles.text}>
					Пройдите регистрацию
					<Link to="/login" className={styles.question}>
						Уже зарегистрированы?
					</Link>
				</span>
				<FormRegistr />
				<Link to="/login" className={styles.registr}>
					Войти в аккаунт
				</Link>
			</div>
		</div>
	);
};
