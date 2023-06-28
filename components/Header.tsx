import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<Link href={"/"} className={styles.link}>
					<Image src="/logo.png" width={40} height={53} alt="logo" />
					<h1>Cozy home</h1>
				</Link>
			</header>
			<style>``</style>
		</>
	);
};

export default Header;
