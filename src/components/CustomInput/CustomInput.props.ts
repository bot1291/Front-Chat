import React from 'react';

type TypeValidate =
	| ''
	| 'success'
	| 'warning'
	| 'error'
	| 'validating'
	| undefined;

export interface CustomInputProps {
	checkForError: (field: string) => string | false | undefined;
	getErrors: (field: string) => string | boolean | undefined;
	name: string;
	prefix: React.ReactNode;
	placeholder: string;
	isPassword?: boolean;
	value: string | undefined;
	validateStatus?: TypeValidate;
	hasFeedback?: boolean;
	isShortDistance?: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
}
