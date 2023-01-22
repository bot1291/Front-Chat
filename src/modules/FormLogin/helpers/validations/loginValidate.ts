import IErrors from '../../../../interfaces/IErrors';
import IValues from '../../../../interfaces/IValues';

export const loginValidate = (errors: IErrors, values: IValues): IErrors => {
	if (!values.mail) {
		errors.mail = 'Заполните почту';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.mail)) {
		errors.mail = 'Неверный формат почты';
	}

	if (!values.password) {
		errors.password = 'Заполните пароль';
	} else if (values.password.length < 4) {
		errors.password = 'Слишком короткий пароль';
	} else if (values.password.length > 15) {
		errors.password = 'Слишком длинный пароль';
	}

	return errors;
};
