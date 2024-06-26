import Image from "next/image";
import Link from "next/link";
import React from "react";

export async function getStaticProps() {
	const { events_categories } = await import("../../data/data.json");

	return {
		props: {
			data: events_categories,
		},
	};
}

const EventsPage = ({ data = [] }) => {
	return (
		<div>
			<h1>Events Page</h1>
			{data.map((event) => {
				return (
					<Link key={event.id} href={`/events/${event.id}`} passHref>
						<Image
							src={event.image}
							alt={event.description}
							width={300}
							height={300}
						/>
						<h2>{event.title}</h2>
					</Link>
				);
			})}
		</div>
	);
};

export default EventsPage;
