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
import { useAppSelector } from '../../hooks/redux';
import { CustomInput } from '../../components';
import { checkForError } from '../../utils/helpers/checkForError';

export const RegForm: FC<FormRegistrProps> = ({
	errors,
	handleChange,
	handleSubmit,
	touched,
	values,
	className,
}) => {
	const { isSubmited } = useAppSelector((state) => state.registrReducer);

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
					checkForError={checkForError(errors, touched, 'email')}
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
					checkForError={checkForError(errors, touched, 'nickname')}
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
					checkForError={checkForError(errors, touched, 'password')}
					prefix={<LockOutlined />}
					placeholder="Пароль"
					isPassword
					isShortDistance
				/>

				<CustomInput
					validateStatus={getValidateStatus('confirm')}
					hasFeedback
					onChange={handleChange}
					name="confirm"
					value={values.confirm}
					checkForError={checkForError(errors, touched, 'confirm')}
					prefix={<LockOutlined />}
					placeholder="Повторите пароль"
					isPassword
					isShortDistance
				/>

				<Button
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
