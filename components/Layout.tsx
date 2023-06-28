import { FC, ReactNode } from "react";
import styles from "../styles/Layout.module.css";
import Header from "./Header";

type LayoutProps = {
	children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className={styles.main}>{children}</main>
		</>
	);
};

export default Layout;
