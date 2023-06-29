import { FC } from "react";

interface InputProps {
	inputsValue: Record<string, string | number>;
	type: string;
	onChange: (value: Record<string, string | number>) => void;
}

const Input: FC<InputProps> = ({ inputsValue, type, onChange }) => {
	const [key] = Object.keys(inputsValue);

	const changeValue = (value: string) => {
		inputsValue[key] = value;
		onChange(inputsValue);
	};

	return (
		<input
			type={type}
			value={inputsValue[key]}
			onChange={(val) => changeValue(val.target.value)}
		/>
	);
};

export default Input;
