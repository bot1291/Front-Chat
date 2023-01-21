import styles from './FormRegistr.module.scss';
import './FormRegistr.scss';
import { FormRegistrProps } from './FormRegistr.props';
import cn from 'classnames';
import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { IoIosLogIn } from 'react-icons/io';
import {
	MailOutlined,
	UserAddOutlined,
	LockOutlined,
	CheckCircleTwoTone,
} from '@ant-design/icons';
import { withFormik } from 'formik';
import IErrors from '../../interfaces/IErrors';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIsSubmited } from '../../store/slices/RegistrSlice/RegistrSlice';

export const RegForm: FC<FormRegistrProps> = ({
	errors,
	handleChange,
	handleSubmit,
	touched,
	values,
	className,
}) => {
	const { isSubmited } = useAppSelector((state) => state.registrReducer);
	const dispatch = useAppDispatch();

	const checkForError = (field: string) => errors[field] && touched[field];

	const getErrors = (field: string) =>
		checkForError(field) && checkForError(field) && errors[field];

	return (
		<>
			<Form
				onFinish={handleSubmit}
				className={cn(styles.FormRegistr, className, {
					[styles.visible]: !isSubmited,
				})}>
				<Form.Item>
					<Input
						onChange={handleChange}
						value={values.mail}
						name="email"
						prefix={<MailOutlined />}
						className={cn(styles.input, {
							[styles.error]: checkForError('email'),
						})}
						placeholder="Почта"
					/>
					{
						<span
							className={cn(styles.feedback, {
								[styles.visibleError]: checkForError('email'),
							})}>
							{getErrors('email')}
						</span>
					}
				</Form.Item>
				<Form.Item>
					<Input
						onChange={handleChange}
						value={values.nickname}
						name="nickname"
						prefix={<UserAddOutlined />}
						className={cn(styles.input, {
							[styles.error]: checkForError('nickname'),
						})}
						placeholder="Ваше имя"
					/>
					{
						<span
							className={cn(styles.feedback, {
								[styles.visibleError]:
									checkForError('nickname'),
							})}>
							{getErrors('nickname')}
						</span>
					}
				</Form.Item>
				<Form.Item>
					<Input.Password
						onChange={handleChange}
						value={values.password}
						name="password"
						prefix={<LockOutlined />}
						className={cn(styles.input, {
							[styles.error]: checkForError('password'),
						})}
						placeholder="Пароль"
					/>
					{
						<span
							className={cn(styles.feedback, {
								[styles.visibleError]:
									checkForError('password'),
							})}>
							{getErrors('password')}
						</span>
					}
				</Form.Item>
				<Form.Item>
					<Input.Password
						onChange={handleChange}
						value={values.confirm}
						name="confirm"
						prefix={<LockOutlined />}
						className={cn(styles.input, {
							[styles.error]: checkForError('confirm'),
						})}
						placeholder="Повторите пароль"
					/>
					{
						<span
							className={cn(styles.feedback, {
								[styles.visibleError]: checkForError('confirm'),
							})}>
							{getErrors('confirm')}
						</span>
					}
				</Form.Item>
				<Button
					onClick={() =>
						!Object.keys(errors).length &&
						Object.keys(touched).length &&
						dispatch(setIsSubmited())
					}
					htmlType="submit"
					icon={<IoIosLogIn />}
					className={styles.button}>
					Зарегистрироваться
				</Button>
			</Form>

			<div
				className={cn(styles.approve, {
					[styles.visible]: isSubmited,
				})}>
				<CheckCircleTwoTone className={styles.check} />
				<p>Подтвердите почту</p>
				<span>
					На Вашу почту отправлено письмо с ссылкой на подтверждение
					аккаунта
				</span>
			</div>
		</>
	);
};

export const FormRegistr = withFormik({
	mapPropsToValues: () => ({
		email: '',
		password: '',
		nickname: '',
		confirm: '',
	}),

	validate: (values) => {
		const errors: IErrors = {};

		if (!values.email) {
			errors.email = 'Заполните почту';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Неверный формат почты';
		}

		if (!values.password) {
			errors.password = 'Заполните пароль';
		} else if (values.password.length < 4) {
			errors.password = 'Слишком короткий пароль';
		} else if (values.password.length > 15) {
			errors.password = 'Слишком длинный пароль';
		}

		if (!values.nickname) {
			errors.nickname = 'Заполните имя';
		} else if (Number(values.nickname[0])) {
			errors.nickname = 'Имя не должно начинаться с цифры';
		} else if (values.nickname.length > 15) {
			errors.nickname = 'Имя не должно превышать более 15 символов';
		}

		if (!values.confirm) {
			errors.confirm = 'Подтвердите пароль';
		} else if (values.confirm !== values.password) {
			errors.confirm = 'Пароли не совпадают';
		}

		return errors;
	},

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 500);
	},

	displayName: 'FormRegistr',
})(RegForm);
