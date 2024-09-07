import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./nav";
import MobileNav from "./mobilenav";
import Image from "next/image";

const Header = () => {
	return (
		<header className="py-5">
			<div className="hidden xl:w-full xl:flex xl:justify-between items-center gap-8">
				<Nav />
				<div className="text-4xl font-semibold text-white">PK</div>
				<div className=""></div>
				<Link href={"/"}>
					<Button
						className="mr-3 text-[#124e70] border-[#41718c]"
						variant="outline"
					>
						contact me
					</Button>
				</Link>

				<Image
					src="/assets/paa-kwesi.png"
					width={500}
					height={500}
					alt="profile"
					className="max-w-[800px] absolute -top-30 -right-10 -z-10"
				/>
			</div>
			<div className="xl:hidden ml-auto">
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
