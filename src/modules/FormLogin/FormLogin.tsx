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
	const getErrors = (field: string) =>
		errors[field] && touched[field] && errors[field];

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
						[styles.error]: errors.mail,
					})}
					placeholder="Ваша почта"
				/>
				{
					<span
						className={cn(styles.feedback, {
							[styles.visible]: errors.mail,
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
						[styles.error]: errors.password,
					})}
					placeholder="Ваш пароль"
				/>
				{
					<span
						className={cn(styles.feedback, {
							[styles.visible]: errors.password,
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
		}

		if (!values.password) {
			errors.password = 'Заполните пароль';
		}

		return errors;
	},

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 500);
	},

	displayName: 'BasicForm',
})(MyForm);
