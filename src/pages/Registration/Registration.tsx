import styles from './Registration.module.scss';
import { RegistrationProps } from './Registration.props';
import cn from 'classnames';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/redux';
import { FormRegistrFormik } from '../../modules';

export const Registration: FC<RegistrationProps> = ({
	className,
	...props
}) => {
	const { isSubmited } = useAppSelector((state) => state.registrReducer);

	return (
		<div className={cn(className, styles.Registration)} {...props}>
			<div
				data-testid="login-wrapper"
				className={cn(className, styles.wrapper)}
				{...props}>
				<h1 className={styles.welcome}>Регистрация</h1>
				<span className={styles.text}>
					{!isSubmited && (
						<>
							Пройдите регистрацию
							<Link to="/login" className={styles.question}>
								Уже зарегистрированы?
							</Link>
						</>
					)}
				</span>
				<FormRegistrFormik />
				{!isSubmited && (
					<Link to="/login" className={styles.registr}>
						Войти в аккаунт
					</Link>
				)}
			</div>
		</div>
	);
};
