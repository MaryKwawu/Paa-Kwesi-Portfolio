"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

const links = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "aboutme",
		path: "/about",
	},
	{
		name: "resume",
		path: "/resume",
	},
	{
		name: "contact",
		path: "/contact",
	},
];

const MobileNav = () => {
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger className="flex justify-center items-center w-full">
				<CiMenuFries className="text-[32px] text-accent ml-auto " />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				{/* logo */}
				<div className="mt-32 mb-10 text-center text-2xl">
					<Link href={"/"}>
						<div className=" text-4xl font-semibold">PK</div>
					</Link>
				</div>
				{/* nav */}
				<nav className="flex flex-col justify-center items-center gap-8">
					<Image
						src={"/assets/paa-kwesi-nav-image.png"}
						alt="nav-image"
						width={100}
						height={100}
						className="w-[60%] h-[60%]"
					/>
					{links.map((link, index) => {
						return (
							<div key={index}>
								<Link
									href={"link.path"}
									className={`${
										link.path === pathname &&
										"text-accent border-b-2 border-accent"
									} text-xl capitalize hover:text-accent transition-all`}
								>
									{link.name}
								</Link>
							</div>
						);
					})}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
