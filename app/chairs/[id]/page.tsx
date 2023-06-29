import CardDetails from "@/app/components/CardDetails";
import { Chair, getAllChairs } from "@/app/page";
import { Metadata } from "next";

type Props = {
	params: {
		id: string;
	};
};

export const metadata: Metadata = {
	title: "Item page"
};

const getChair = async (id: string) => {
	const res = await fetch(`http://127.0.0.1:3004/chairs/${id}`, {
		next: {
			revalidate: 5
		}
	});
	const data = await res.json();

	return data;
};

export const generateStaticParams = async () => {
	const chairs: Chair[] = await getAllChairs();

	return chairs.map((el) => ({
		slug: el.id.toString()
	}));
};

// export const getStaticProps = async (context: { params: { id: string } }) => {
// 	const { id } = context.params;
// 	const res = await fetch(`http://127.0.0.1:3004/chairs/${id}`);
// 	const data = await res.json();

// 	if (!data) {
// 		return {
// 			notFound: true
// 		};
// 	}

// 	return {
// 		props: { chair: data },
// 		revalidate: 5
// 	};
// };

const Chair = async ({ params: { id } }: Props) => {
	const chair = await getChair(id);
	if (!chair) {
		return <div> Chair is not existed</div>;
	}

	return <CardDetails chair={chair} />;
};

export default Chair;
