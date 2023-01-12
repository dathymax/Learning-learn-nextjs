import Image from "next/image";
import Link from "next/link";
import React from "react";

const HomePage = ({ data = [] }) => {
	return (
		<main>
			{data.map((event) => {
				return (
					<Link key={event.id} href={`/events/${event.id}`} passHref>
						<Image
							src={event.image}
							width={300}
							height={300}
							alt={event.title}
						/>
						<h2>{event.title}</h2>
						<p>{event.description}</p>
					</Link>
				);
			})}
		</main>
	);
};

export default HomePage;
