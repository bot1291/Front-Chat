import styles from './Registration.module.scss';
import { RegistrationProps } from './Registration.props';
import cn from 'classnames';
import { FC, useState } from 'react';
import { FormRegistr } from '../../modules';
import { Link } from 'react-router-dom';

export const Registration: FC<RegistrationProps> = ({
	className,
	...props
}) => {
	const [isSubmited, setItSubmited] = useState<boolean>(false);

	const checkForSubmit = () => {
		return isSubmited ? (
			'Подтвердите почту'
		) : (
			<>
				Пройдите регистрацию
				<Link to="/login" className={styles.question}>
					Уже зарегистрированы?
				</Link>
			</>
		);
	};

	return (
		<div className={cn(className, styles.Registration)} {...props}>
			<div
				data-testid="login-wrapper"
				className={cn(className, styles.wrapper)}
				{...props}>
				<h1 className={styles.welcome}>Регистрация</h1>
				<span className={styles.text}>{checkForSubmit()}</span>
				<FormRegistr
					setItSubmited={setItSubmited}
					isSubmited={isSubmited}
				/>
				<Link to="/login" className={styles.registr}>
					Войти в аккаунт
				</Link>
			</div>
		</div>
	);
};
