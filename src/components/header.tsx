"use client";

import React from "react";
import Link from "next/link";
import Nav from "./nav";
import MobileNav from "./mobilenav";
import Image from "next/image";
import Social from "@/components/socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Header = () => {
	const handleDownload = () => {
		const cvUrl = "";
		const link = document.createElement("a");
		link.href = cvUrl;
		link.download = "";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};
	return (
		<header className="">
			<div className="hidden xl:w-full xl:flex xl:justify-between items-center xl:items-start gap-8">
				<div className="space-y-20">
					<Nav />
					<div className="flex flex-col xl:flex-row items-center gap-8">
						<Button
							onClick={handleDownload}
							variant="outline"
							size="lg"
							className="uppercase flex items-center gap-2"
						>
							<span>Download Cv</span>
							<FiDownload className="text-xl" />
						</Button>
						<div className="mb-8 xl:mb-0">
							<Social
								containerStyles="flex gap-6"
								iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:text-primary hover:transition-all duration-500"
							/>
						</div>
					</div>
				</div>
				<div className="text-4xl font-semibold text-white">PK</div>
				<div className=""></div>

				<div className="relative">
					<div className="absolute top-3 right-1/3">
						<Link href={"/contact"}>
							<Button
								className="mr-3 text-[#124e70] border-[#41718c]"
								variant="outline"
							>
								contact me
							</Button>
						</Link>
					</div>
					<Image
						src="/assets/paa-kwesi.png"
						width={500}
						height={500}
						alt="profile"
						className="max-w-[400px]"
					/>
				</div>
			</div>
			<div className="xl:hidden ml-auto">
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
