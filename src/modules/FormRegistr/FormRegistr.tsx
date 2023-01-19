import styles from './FormRegistr.module.scss';
import './FormRegistr.scss';
import { FormRegistrProps } from './FormRegistr.props';
import cn from 'classnames';
import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { IoIosLogIn } from 'react-icons/io';

export const FormRegistr: FC<FormRegistrProps> = ({ className }) => {
	return (
		<Form className={cn(styles.FormRegistr, className)}>
			<Form.Item
				name="email"
				rules={[
					{
						type: 'email',
						message: 'Неверный формат почты!',
					},
					{
						required: true,
						message: 'Пожалуйста, напишите почту!',
					},
				]}>
				<Input className={styles.input} placeholder="Почта" />
			</Form.Item>
			<Form.Item
				name="nickname"
				rules={[
					{
						required: true,
						message: 'Please input your nickname!',
						whitespace: true,
					},
				]}>
				<Input className={styles.input} placeholder="Ваше имя" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Пожалуйста, напишите пароль!',
					},
				]}>
				<Input.Password className={styles.input} placeholder="Пароль" />
			</Form.Item>
			<Form.Item
				name="confirm"
				dependencies={['password']}
				hasFeedback
				rules={[
					{
						required: true,
						message: 'Пожалуйста, подтвердите пароль!',
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve();
							}
							return Promise.reject(
								new Error('Пароли не совпадают!')
							);
						},
					}),
				]}>
				<Input.Password
					className={styles.input}
					placeholder="Повторите пароль"
				/>
			</Form.Item>
			<Button
				htmlType="submit"
				icon={<IoIosLogIn />}
				className={styles.button}>
				Зарегистрироваться
			</Button>
		</Form>
	);
};
