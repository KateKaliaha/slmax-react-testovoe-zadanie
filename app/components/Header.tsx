import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./Header.module.css";

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Link href={"/"} className={styles.link}>
				<Image src="/logo.png" width={40} height={53} alt="logo" />
				<h1>Cozy home</h1>
			</Link>
		</header>
	);
};

export default Header;
