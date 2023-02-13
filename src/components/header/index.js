import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
	return (
		<header>
			<div>
				<Image
					src={"/images/logo.png"}
					width={50}
					height={50}
					alt={"logo"}
				/>
				<nav>
					<img />
					<Link href="/" passHref>
						Home
					</Link>
					<Link href="/events" passHref>
						Events
					</Link>
					<Link href="/about-us" passHref>
						About us
					</Link>
				</nav>
			</div>
			<h1>Lorem ipsum dolor sit amet.</h1>
		</header>
	);
};

export default Header;
