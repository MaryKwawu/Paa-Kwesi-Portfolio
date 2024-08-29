import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./nav";
import MobileNav from "./mobilenav";

const Header = () => {
	return (
		<header style={{}} className="flex py-8 xl:py-12">
			<div className="hidden xl:w-full xl:flex xl:justify-between items-center gap-8">
				<Nav />
				<div className="text-4xl font-semibold">PK</div>
				<div className=""></div>
				<Button variant="outline">contact me</Button>
			</div>
			<div className="xl:hidden ml-auto">
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
