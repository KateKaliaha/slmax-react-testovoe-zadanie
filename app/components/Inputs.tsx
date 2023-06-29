import { FC } from "react";
import Input from "./Input";
import styles from "./Inputs.module.css";

interface InputsValue {
	name: string;
	price: number;
	color: string;
	quality: number;
}

interface InputsProps {
	inputsValue: InputsValue;
	onChange: (value: Record<string, string | number>) => void;
}

const Inputs: FC<InputsProps> = ({ inputsValue, onChange }) => {
	const { name, price, quality, color } = inputsValue;

	return (
		<div className={styles.wrapper}>
			<Input inputsValue={{ name: name }} type="text" onChange={onChange} />
			<Input inputsValue={{ price: price }} type="number" onChange={onChange} />
			<Input inputsValue={{ color: color }} type="text" onChange={onChange} />
			<Input
				inputsValue={{ quality: quality }}
				type="number"
				onChange={onChange}
			/>
		</div>
	);
};

export default Inputs;
