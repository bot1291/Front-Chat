import styles from './FormLogin.module.scss';
import './FormLogin.scss';
import { FormLoginProps } from './FormLogin.props';
import cn from 'classnames';
import { FC } from 'react';
import { Button, Form } from 'antd';
import { IoIosLogIn } from 'react-icons/io';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { CustomInput } from '../../../../ui';
import { checkForError } from '../../../../utils/helpers/checkForError';

export const FormLogin: FC<FormLoginProps> = ({
	errors,
	handleChange,
	handleSubmit,
	touched,
	values,
	className,
}) => {
	return (
		<Form
			onFinish={handleSubmit}
			className={cn(styles.formLogin, className)}>
			<CustomInput
				onChange={handleChange}
				name="mail"
				value={values.mail}
				checkForError={checkForError(errors, touched, 'mail')}
				prefix={<UserOutlined />}
				placeholder="Ваша почта"
			/>

			<CustomInput
				onChange={handleChange}
				name="password"
				value={values.password}
				checkForError={checkForError(errors, touched, 'password')}
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
