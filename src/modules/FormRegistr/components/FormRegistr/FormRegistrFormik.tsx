import { withFormik } from 'formik';
import { regValidate } from '../../helpers';
import { FormRegistr } from './FormRegistr';
import { store } from '../../../../store/store';
import IErrors from '../../../../interfaces/IErrors';
import { setIsSubmited } from '../../../../store/slices/RegistrSlice/RegistrSlice';

export const FormRegistrFormik = withFormik({
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
})(FormRegistr);
