import styles from './FormLogin.module.scss';
import { FormLoginProps } from './FormLogin.props';
import cn from 'classnames';
import { FC } from 'react';
import { Button, Form } from 'antd';
import { Input } from '../../components';
import { IoIosLogIn } from 'react-icons/io';

export const FormLogin: FC<FormLoginProps> = ({ className }) => {
	return (
		<Form className={cn(styles.formLogin, className)}>
			<button className={styles.question}>Не зарегистрированы?</button>
			<Form.Item
				name="mail"
				rules={[
					{
						required: true,
						message: 'Пожалуйста, напишите почту!',
					},
				]}>
				<Input className={styles.input} placeholder="Ваша почта" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Пожалуйста, напишите пароль!',
					},
				]}>
				<Input className={styles.input} placeholder="Ваша пароль" />
			</Form.Item>
			<Button icon={<IoIosLogIn />} className={styles.button}>
				Войти в аккаунт
			</Button>
		</Form>
	);
};
