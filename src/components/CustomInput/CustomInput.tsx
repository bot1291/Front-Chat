import styles from './CustomInput.module.scss';
import { CustomInputProps } from './CustomInput.props';
import cn from 'classnames';
import { FC } from 'react';
import { Form, Input } from 'antd';

export const CustomInput: FC<CustomInputProps> = ({
	getErrors,
	name,
	value,
	placeholder,
	isPassword,
	onChange,
	isShortDistance,
	prefix,
	validateStatus,
	hasFeedback,
	checkForError,
}) => {
	return (
		<Form.Item hasFeedback={hasFeedback} validateStatus={validateStatus}>
			{isPassword ? (
				<Input.Password
					onChange={onChange}
					value={value}
					prefix={prefix}
					name={name}
					className={cn(styles.input, {
						[styles.error]: checkForError(name),
					})}
					placeholder={name}
				/>
			) : (
				<Input
					onChange={onChange}
					value={value}
					prefix={prefix}
					name={name}
					className={cn(styles.input, {
						[styles.error]: checkForError(name),
					})}
					placeholder={placeholder}
				/>
			)}
			{
				<span
					className={cn(styles.feedback, {
						[styles.shortFeedback]: isShortDistance,
						[isShortDistance
							? styles.shortVisible
							: styles.visible]: checkForError(name),
					})}>
					{getErrors(name)}
				</span>
			}
		</Form.Item>
	);
};
