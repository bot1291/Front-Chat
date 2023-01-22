import { withFormik } from 'formik';
import { setIsSubmited } from '../../store/slices/RegistrSlice/RegistrSlice';
import { store } from '../../store/store';
import { regValidate } from '../../utils';
import { RegForm } from './RegForm';

export const FormRegistr = withFormik({
	mapPropsToValues: () => ({
		email: '',
		password: '',
		nickname: '',
		confirm: '',
	}),

	validate: (values) => {
		return regValidate(values);
	},

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			console.log(JSON.stringify(values, null, 2));
			setSubmitting(false);
			store.dispatch(setIsSubmited());
		}, 500);
	},

	displayName: 'FormRegistr',
})(RegForm);
