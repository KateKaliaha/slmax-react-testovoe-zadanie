import { Metadata } from "next";
import { FC } from "react";
import Card from "./components/Card";

export interface Chair {
	id: number;
	name: string;
	price: number;
	color: string;
	quality: number;
	img: string;
}

export const metadata: Metadata = {
	title: "Main page"
};

export const getAllChairs = async () => {
	const res = await fetch("http://127.0.0.1:3004/chairs", {
		next: {
			revalidate: 5
		}
	});
	const data = await res.json();

	return data;
};

const Home: FC = async () => {
	const chairs: Chair[] = await getAllChairs();

	return (
		<>
			<link rel="icon" href="/logo.ico" sizes="any" />
			{chairs &&
				chairs.map((el) => {
					return <Card chair={el} key={el.id} />;
				})}
		</>
	);
};

export default Home;
