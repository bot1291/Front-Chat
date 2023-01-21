import styles from './FormLogin.module.scss';
import './FormLogin.scss';
import { FormLoginProps } from './FormLogin.props';
import cn from 'classnames';
import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { IoIosLogIn } from 'react-icons/io';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { withFormik } from 'formik';
import IErrors from '../../interfaces/IErrors';

export const MyForm: FC<FormLoginProps> = ({
	errors,
	handleChange,
	handleSubmit,
	touched,
	values,
	className,
}) => {
	const checkForError = (field: string) => errors[field] && touched[field];

	const getErrors = (field: string) =>
		checkForError(field) && checkForError(field) && errors[field];

	return (
		<Form
			onFinish={handleSubmit}
			className={cn(styles.formLogin, className)}>
			<Form.Item className={styles.blockInput}>
				<Input
					onChange={handleChange}
					value={values.mail}
					name="mail"
					prefix={<UserOutlined />}
					className={cn(styles.input, {
						[styles.error]: checkForError('mail'),
					})}
					placeholder="Ваша почта"
				/>
				{
					<span
						className={cn(styles.feedback, {
							[styles.visible]: checkForError('mail'),
						})}>
						{getErrors('mail')}
					</span>
				}
			</Form.Item>
			<Form.Item>
				<Input.Password
					onChange={handleChange}
					value={values.password}
					name="password"
					prefix={<LockOutlined />}
					type="password"
					className={cn(styles.input, {
						[styles.error]: checkForError('password'),
					})}
					placeholder="Ваш пароль"
				/>
				{
					<span
						className={cn(styles.feedback, {
							[styles.visible]: checkForError('password'),
						})}>
						{getErrors('password')}
					</span>
				}
			</Form.Item>
			<Button
				htmlType="submit"
				icon={<IoIosLogIn />}
				className={styles.button}>
				Войти в аккаунт
			</Button>
		</Form>
	);
};

export const FormLogin = withFormik({
	mapPropsToValues: () => ({ mail: '', password: '' }),

	validate: (values) => {
		const errors: IErrors = {};

		if (!values.mail) {
			errors.mail = 'Заполните почту';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)
		) {
			errors.mail = 'Неверный формат почты';
		}

		if (!values.password) {
			errors.password = 'Заполните пароль';
		} else if (values.password.length < 4) {
			errors.password = 'Слишком короткий пароль';
		}

		return errors;
	},

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 500);
	},

	displayName: 'FormLogin',
})(MyForm);
