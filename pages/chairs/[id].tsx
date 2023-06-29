import { FC } from "react";
import { Chair } from "..";

import CardDetails from "@/components/CardDetails";
import Head from "next/head";

export const getStaticPaths = async () => {
	const res = await fetch("http://127.0.0.1:3004/chairs");
	const data: Chair[] = await res.json();

	const paths =
		data &&
		data.map((el) => ({
			params: { id: el.id.toString() }
		}));

	return {
		paths,
		fallback: false
	};
};

export const getStaticProps = async (context: { params: { id: string } }) => {
	const { id } = context.params;
	const res = await fetch(`http://127.0.0.1:3004/chairs/${id}`);
	const data = await res.json();

	if (!data) {
		return {
			notFound: true
		};
	}

	return {
		props: { chair: data },
		revalidate: 5
	};
};

interface ChairProps {
	chair: Chair;
}

const Chair: FC<ChairProps> = ({ chair }) => {
	if (!chair) {
		return <div> Chair is not existed</div>;
	}

	return (
		<>
			<Head>
				<title>Item page</title>
			</Head>
			<CardDetails chair={chair} />
		</>
	);
};

export default Chair;
