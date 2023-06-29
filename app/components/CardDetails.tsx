"use client";
import { FC, useState } from "react";
import { CardProps } from "./Card";
import styles from "./CardDetails.module.css";
import Img from "./Img";
import Info from "./Info";
import Inputs from "./Inputs";

const CardDetails: FC<CardProps> = ({ chair }) => {
	const [isEdit, setIsEdit] = useState(false);
	const [inputsValue, setInputsValue] = useState({
		name: chair.name,
		price: chair.price,
		color: chair.color,
		quality: chair.quality
	});

	const changeValue = (value: Record<string, string | number>) => {
		setInputsValue({ ...inputsValue, ...value });
	};

	if (!chair) {
		return <div> Chair is not existed</div>;
	}

	const send = async () => {
		await fetch(`http://localhost:3004/chairs/${chair.id}`, {
			method: "PATCH",
			headers: {
				"Content-type": "application/json"
			},
			body: JSON.stringify({
				...inputsValue
			})
		});
	};

	const toggle = () => {
		setIsEdit((state) => !state);

		if (isEdit) {
			send();
		}
	};

	return (
		<div className={styles.cardWrapper}>
			{chair && (
				<div key={chair.name} className={styles.cardDetail}>
					<Img chair={chair} imgSize={300} className={styles.img} />
					{!isEdit ? (
						<Info
							chair={{ id: chair.id, img: chair.img, ...inputsValue }}
							className={styles.content}
						/>
					) : (
						<Inputs inputsValue={inputsValue} onChange={changeValue} />
					)}
				</div>
			)}
			<button onClick={toggle} className={styles.button}>
				{!isEdit ? "Редактировать" : "Сохранить"}
			</button>
		</div>
	);
};

export default CardDetails;
