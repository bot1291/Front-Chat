import { withFormik } from 'formik';
import IErrors from '../../interfaces/IErrors';
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
		const errors: IErrors = regValidate({}, values);

		return errors;
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
