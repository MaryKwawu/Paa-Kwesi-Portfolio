"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "Resume",
		path: "/resume",
	},
	{
		name: "About me",
		path: "/aboutme",
	},
];

const Nav = () => {
	const pathname = usePathname();
	return (
		<nav className="flex gap-8 text-white">
			{links.map((link, index, item) => {
				return (
					<div key={index}>
						<Link
							href={link.path}
							className={`${
								link.path === pathname &&
								"text-accent border-b-2 border-b-accent"
							} capitalize font-medium hover:text-accent transition-all `}
						>
							{link.name}
						</Link>
					</div>
				);
			})}
		</nav>
	);
};

export default Nav;
