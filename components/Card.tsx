import Link from "next/link";
import { FC } from "react";
import { Chair } from "../pages";

import styles from "../styles/Card.module.css";
import Img from "./Img";
import Info from "./Info";

type CardProps = {
	chair: Chair;
};

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
