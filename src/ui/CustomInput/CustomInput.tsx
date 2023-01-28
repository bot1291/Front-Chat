import styles from './CustomInput.module.scss';
import { CustomInputProps } from './CustomInput.props';
import cn from 'classnames';
import { FC } from 'react';
import { Form, Input } from 'antd';

export const CustomInput: FC<CustomInputProps> = ({
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
		<Form.Item
			className={styles.inputWrapper}
			hasFeedback={hasFeedback}
			validateStatus={validateStatus}>
			{isPassword ? (
				<Input.Password
					onChange={onChange}
					value={value}
					prefix={prefix}
					name={name}
					className={cn(styles.input, {
						[styles.error]: checkForError,
					})}
					placeholder={placeholder}
				/>
			) : (
				<Input
					onChange={onChange}
					value={value}
					prefix={prefix}
					name={name}
					className={cn(styles.input, {
						[styles.error]: checkForError,
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
							: styles.visible]: checkForError,
					})}>
					{checkForError}
				</span>
			}
		</Form.Item>
	);
};
