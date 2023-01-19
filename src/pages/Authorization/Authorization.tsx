import styles from './Authorization.module.scss';
import { AuthorizationProps } from './Authorization.props';
import cn from 'classnames';
import { FC } from 'react';
import { Input } from '../../components';
import { Button } from 'antd';
import { SiMaildotru } from 'react-icons/si';
import { IoIosLogIn } from 'react-icons/io';

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
			<div className={styles.inputs}>
				<button className={styles.question}>
					Не зарегистрированы?
				</button>
				<Input className={styles.input} placeholder="Ваша почта" />
				<Input className={styles.input} placeholder="Ваша пароль" />
				<Button icon={<IoIosLogIn />} className={styles.button}>
					Войти в аккаунт
				</Button>
			</div>
			<button className={styles.registr}>Зарегистрироваться</button>
		</div>
	);
};
