import styles from './FormLogin.module.scss';
import './FormLogin.scss';
import { FormLoginProps } from './FormLogin.props';
import cn from 'classnames';
import { FC } from 'react';
import { Button, Form } from 'antd';
import { IoIosLogIn } from 'react-icons/io';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { CustomInput } from '../../components';

export const LoginForm: FC<FormLoginProps> = ({
	errors,
	handleChange,
	handleSubmit,
	touched,
	values,
	className,
}) => {
	const checkForError = (field: string) => errors[field] && touched[field];

	const getErrors = (field: string) => checkForError(field) && errors[field];

	return (
		<Form
			onFinish={handleSubmit}
			className={cn(styles.formLogin, className)}>
			<CustomInput
				onChange={handleChange}
				name="mail"
				value={values.mail}
				checkForError={checkForError}
				getErrors={getErrors}
				prefix={<UserOutlined />}
				placeholder="Ваша почта"
			/>

			<CustomInput
				onChange={handleChange}
				name="password"
				value={values.password}
				checkForError={checkForError}
				getErrors={getErrors}
				prefix={<LockOutlined />}
				placeholder="Ваш пароль"
				isPassword
			/>

			<Button
				htmlType="submit"
				icon={<IoIosLogIn />}
				className={styles.button}>
				Войти в аккаунт
			</Button>
		</Form>
	);
};
