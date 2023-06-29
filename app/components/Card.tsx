import Link from "next/link";
import { FC } from "react";

import { Chair } from "../page";
import styles from "./Card.module.css";
import Img from "./Img";
import Info from "./Info";

export interface CardProps {
	chair: Chair;
}

const Card: FC<CardProps> = ({ chair }) => {
	return (
		<>
			{chair && (
				<div key={chair.name} className={styles.cardPreview}>
					<Img chair={chair} imgSize={150} className={styles.img} />
					<Info chair={chair} className={styles.content} />
					<Link href={`/chairs/${chair.id}`} className={styles.link}>
						Смотреть
					</Link>
				</div>
			)}
		</>
	);
};

export default Card;
