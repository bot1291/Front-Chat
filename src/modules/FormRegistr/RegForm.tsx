import styles from './FormRegistr.module.scss';
import './FormRegistr.scss';
import { FormRegistrProps } from './FormRegistr.props';
import cn from 'classnames';
import { FC } from 'react';
import { Button, Form } from 'antd';
import { IoIosLogIn } from 'react-icons/io';
import {
	MailOutlined,
	UserAddOutlined,
	LockOutlined,
	CheckCircleTwoTone,
} from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setIsSubmited } from '../../store/slices/RegistrSlice/RegistrSlice';
import { CustomInput } from '../../components';

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

	const getValidateStatus = (field: string): 'success' | undefined =>
		touched[field] && !errors[field] ? 'success' : undefined;

	return (
		<>
			<Form
				onFinish={handleSubmit}
				className={cn(styles.FormRegistr, className, {
					[styles.visible]: !isSubmited,
				})}>
				<CustomInput
					validateStatus={getValidateStatus('email')}
					hasFeedback
					onChange={handleChange}
					name="email"
					value={values.mail}
					checkForError={checkForError}
					getErrors={getErrors}
					prefix={<MailOutlined />}
					placeholder="Ваша почта"
					isShortDistance
				/>

				<CustomInput
					validateStatus={getValidateStatus('nickname')}
					hasFeedback
					onChange={handleChange}
					name="nickname"
					value={values.nickname}
					checkForError={checkForError}
					getErrors={getErrors}
					prefix={<UserAddOutlined />}
					placeholder="Ваше имя"
					isShortDistance
				/>

				<CustomInput
					validateStatus={getValidateStatus('password')}
					hasFeedback
					onChange={handleChange}
					name="password"
					value={values.password}
					checkForError={checkForError}
					getErrors={getErrors}
					prefix={<LockOutlined />}
					placeholder="Пароль"
					isShortDistance
				/>

				<CustomInput
					validateStatus={getValidateStatus('confirm')}
					hasFeedback
					onChange={handleChange}
					name="confirm"
					value={values.confirm}
					checkForError={checkForError}
					getErrors={getErrors}
					prefix={<LockOutlined />}
					placeholder="Повторите пароль"
					isShortDistance
				/>

				<Button
					onClick={() =>
						errors.isWritten &&
						!(Object.keys(errors).length - 1) &&
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
