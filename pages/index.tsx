import Head from "next/head";
import { FC } from "react";
import Card from "../components/Card";

export interface Chair {
	id: number;
	name: string;
	price: number;
	color: string;
	quality: number;
	img: string;
}

interface HomeProps {
	chairs: Chair[];
}

export const getStaticProps = async () => {
	const res = await fetch("http://127.0.0.1:3004/chairs");
	const data = await res.json();

	if (!data) {
		return {
			notFound: true
		};
	}

	return {
		props: { chairs: data },
		revalidate: 5
	};
};

const Home: FC<HomeProps> = ({ chairs }) => {
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/logo.ico" />
				<title>Main page</title>
			</Head>
			{chairs &&
				chairs.map((el) => {
					return <Card chair={el} key={el.id} />;
				})}
		</>
	);
};

export default Home;
