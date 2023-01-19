import styles from './Authorization.module.scss';
import { AuthorizationProps } from './Authorization.props';
import cn from 'classnames';
import { FC } from 'react';
import { FormLogin } from '../../modules';

export const Authorization: FC<AuthorizationProps> = ({
	className,
	...props
}) => {
	return (
		<div
			data-testid="login-wrapper"
			className={cn(className, styles.wrapper)}
			{...props}>
			<h1 className={styles.welcome}>Добро пожаловать!</h1>
			<span className={styles.text}>Пожалуйста, войдите в аккаунт</span>
			<FormLogin />
			<button className={styles.registr}>Зарегистрироваться</button>
		</div>
	);
};
