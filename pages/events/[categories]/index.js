import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function getStaticPaths() {
	const { events_categories } = await import("../../../data/data.json");
	const allPaths = events_categories.map((event) => ({
		params: {
			categories: event.id.toString(),
		},
	}));

	return {
		paths: allPaths,
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { allEvents } = await import("../../../data/data.json");
	const id = context?.params?.categories;

	const data = allEvents.filter((event) => event.city === id);

	return {
		props: { data, pageName: id },
	};
}

const EventCategoriesPage = ({ data = [], pageName }) => {
	return (
		<div>
			<h1>Events in {pageName}</h1>
			{data.map((event) => {
				return (
					<Link
						key={event.id}
						href={`/events/${event.city}/${event.id}`}
						passHref
					>
						<Image
							width={300}
							height={300}
							src={event.image}
							alt={event.title}
						/>
						<h2>{event.title}</h2>
						<p>{event.description}</p>
					</Link>
				);
			})}
		</div>
	);
};

export default EventCategoriesPage;
