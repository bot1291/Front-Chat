import { withFormik } from 'formik';
import IErrors from '../../interfaces/IErrors';
import { loginValidate } from '../../utils';
import { LoginForm } from './LoginForm';

export const FormLogin = withFormik({
	mapPropsToValues: () => ({ mail: '', password: '' }),

	validate: (values) => {
		const errors: IErrors = loginValidate({}, values);

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
