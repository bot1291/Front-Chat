import styles from './FormLogin.module.scss';
import './FormLogin.scss';
import { FormLoginProps } from './FormLogin.props';
import cn from 'classnames';
import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { IoIosLogIn } from 'react-icons/io';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

export const FormLogin: FC<FormLoginProps> = ({ className }) => {
	return (
		<Form className={cn(styles.formLogin, className)}>
			<Form.Item
				name="mail"
				rules={[
					{
						required: true,
						message: 'Пожалуйста, напишите почту!',
					},
				]}>
				<Input
					prefix={<UserOutlined className="site-form-item-icon" />}
					className={styles.input}
					placeholder="Ваша почта"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Пожалуйста, напишите пароль!',
					},
				]}>
				<Input.Password
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					className={styles.input}
					placeholder="Ваш пароль"
				/>
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
