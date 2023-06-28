import { FC } from "react";
import { Chair } from "../pages";

type InfoProps = {
	chair: Chair;
	className: string;
};

const Info: FC<InfoProps> = ({ chair, className }) => {
	return (
		<div className={className}>
			<h2>{chair.name}</h2>
			<div> Цена: {chair.price}</div>
			<div> Цвет: {chair.color}</div>
			<div> Количество: {chair.quality}</div>
		</div>
	);
};

export default Info;
