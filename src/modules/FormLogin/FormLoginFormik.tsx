import { withFormik } from 'formik';
import IErrors from '../../interfaces/IErrors';
import { LoginForm } from './LoginForm';

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
})(LoginForm);
