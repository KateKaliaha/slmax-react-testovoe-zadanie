import CardDetails from "@/app/components/CardDetails";
import { Chair, getAllChairs } from "@/app/page";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
	title: "Item page"
};

interface ChairProps {
	params: {
		id: string;
	};
}

const getChairById = async (id: string) => {
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

const Chair: FC<ChairProps> = async ({ params: { id } }) => {
	const chair = await getChairById(id);

	if (!chair) {
		return <div> Chair is not existed</div>;
	}

	return <CardDetails chair={chair} />;
};

export default Chair;
