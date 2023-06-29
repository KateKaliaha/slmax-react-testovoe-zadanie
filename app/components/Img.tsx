import { FC } from "react";

import Image from "next/image";
import { Chair } from "../page";
import styles from "./Card.module.css";

type ImgProps = {
	chair: Chair;
	imgSize: number;
	className: string;
};

const Img: FC<ImgProps> = ({ chair, imgSize, className }) => {
	return (
		<div className={className}>
			<Image
				src={chair.img}
				width={imgSize}
				height={imgSize}
				alt="Chair photo"
				className={styles.photo}
			/>
		</div>
	);
};

export default Img;
