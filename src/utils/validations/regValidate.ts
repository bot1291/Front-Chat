import IErrors from '../../interfaces/IErrors';
import IValues from '../../interfaces/IValues';

export const regValidate = (values: IValues): IErrors => {
	const errors: IErrors = {};

	if (!values.email) {
		errors.email = 'Заполните почту';
	} else if (
		!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
	) {
		errors.email = 'Неверный формат почты';
	}

	if (!values.password) {
		errors.password = 'Заполните пароль';
	} else if (values.password.length < 4) {
		errors.password = 'Слишком короткий пароль';
	} else if (values.password.length > 15) {
		errors.password = 'Слишком длинный пароль';
	} else if (
		!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{0,}$/.test(
			values.password
		)
	) {
		errors.password = 'Минимум 1 число, заглавный и специальный символ';
	}

	if (!values.nickname) {
		errors.nickname = 'Заполните имя';
	} else if (Number(values.nickname[0])) {
		errors.nickname = 'Имя не должно начинаться с цифры';
	} else if (values.nickname.length > 15) {
		errors.nickname = 'Имя не должно превышать более 15 символов';
	}

	if (!values.confirm) {
		errors.confirm = 'Подтвердите пароль';
	} else if (values.confirm !== values.password) {
		errors.confirm = 'Пароли не совпадают';
	}

	return errors;
};
