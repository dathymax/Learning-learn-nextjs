import Image from "next/image";
import React from "react";

export async function getStaticPaths() {
	const { allEvents } = await import("../../../data/data.json");
	const allPaths = allEvents.map((path) => {
		return {
			params: {
				categories: path.city.toString(),
				id: path.id,
			},
		};
	});

	return {
		paths: allPaths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const id = context.params.id;
	const { allEvents } = await import("../../../data/data.json");
	const eventData = allEvents.find((event) => event.id === id);

	return {
		props: { data: eventData },
	};
}

const EventPage = ({ data }) => {
	return (
		<div>
			<Image
				src={data.image}
				alt={data.title}
				width={1000}
				height={500}
			/>
			<h1>{data.title}</h1>
			<p>{data.description}</p>
		</div>
	);
};

export default EventPage;
