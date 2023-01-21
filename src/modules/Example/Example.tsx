import styles from './Message.module.scss';
import { MessageProps } from './Message.props';
import cn from 'classnames';
import { FC } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
	email: Yup.string().email('Invalid email address').required('Required'),
	firstName: Yup.string()
		.min(2, 'Must be longer than 2 characters')
		.max(20, 'Nice try, nobody has a first name that long')
		.required('Required'),
	lastName: Yup.string()
		.min(2, 'Must be longer than 2 characters')
		.max(20, 'Nice try, nobody has a last name that long')
		.required('Required'),
});

export const MyForm: FC<MessageProps> = (props: any) => {
	const { values, touched, errors, handleChange, handleSubmit } = props;

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				onChange={handleChange}
				value={values.name}
				name="name"
			/>
			{errors.name && touched.name && (
				<div id="feedback">{errors.name}</div>
			)}
			<button type="submit">Submit</button>
		</form>
	);
};

export const Example = withFormik({
	mapPropsToValues: () => ({ name: 'dsds' }),

	// Custom sync validation
	validate: (values) => {
		const errors = {};

		if (!values.name) {
			errors.name = 'Required';
		}

		return errors;
	},

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 1000);
	},

	displayName: 'BasicForm',
})(MyForm);
