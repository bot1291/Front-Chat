import { withFormik } from 'formik';
import { loginValidate } from '../../utils';
import { LoginForm } from './LoginForm';

export const FormLogin = withFormik({
	mapPropsToValues: () => ({ mail: '', password: '' }),

	validate: (values) => {
		return loginValidate(values);
	},

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 500);
	},

	displayName: 'FormLogin',
})(LoginForm);
