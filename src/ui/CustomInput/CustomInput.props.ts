import React from 'react';
import { TypeValidate } from '../../interfaces/TypeValidation';

export interface CustomInputProps {
	checkForError: string | boolean | undefined;
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
