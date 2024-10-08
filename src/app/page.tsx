"use client";

import React from "react";
import { Button } from "@/components/ui/button";

//components
import Link from "next/link";
import Photo from "@/components/photo";
import Stats from "@/components/stats";
import Socials from "@/components/socials";

export default function Home() {
	return (
		<section className="h-full">
			<div className="mx-auto h-full">
				<div className="flex flex-col xl:flex-row items-center justify-between ]">
					{/* name & text */}
					<div className="flex gap-y-3 flex-col xl:text-left order-2 xl:order-none ">
						<h1 className="text-4xl space-y-3">
							<div className="text-white">My name</div>
							<div>
								<span className="font-normal text-white">is </span>{" "}
								<span className="font-semibold text-accent">Paa-Kwasi </span>
							</div>
						</h1>
						<p className="max-w[500px] mb-10 text-white">
							I am a professional DevSecOps Engineer with over 4years of
							experience
						</p>
						{/* btn & cards */}
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<Link href="/contact">
								<Button
									variant="outline"
									size="lg"
									className="uppercase flex items-center gap-2 "
								>
									Hire me
								</Button>
							</Link>
						</div>
						{/* top skills */}
						<div className="grid grid-cols-2 gap-2 mt-10 xl:w-1/3 w-1/2">
							<div className="bg-[#769e9a] text-white rounded text-center">
								Kubernetes
							</div>
							<div className="bg-[#769e9a] text-white rounded text-center">
								AWS
							</div>

							<div className="bg-[#769e9a] text-white rounded text-center">
								CI/CD
							</div>
							<div className="bg-[#769e9a] text-white rounded text-center">
								Bash Scripting
							</div>
						</div>
						{/* projects image */}
						<p className="font-semibold mt-16 text-xl"> Latest Projects</p>
						<div className="mt-10 grid xl:grid-cols-4 gap-16">
							<div
								className="h-56 w-56"
								style={{
									backgroundSize: "120%",
									backgroundRepeat: "no-repeat",
									backgroundColor: "#769e9a",
									backgroundPosition: "center",
									borderRadius: "8px",
								}}
							></div>
							<div
								className="h-56 w-56 mt-16 "
								style={{
									backgroundSize: "120%",
									backgroundRepeat: "no-repeat",
									backgroundColor: "#769e9a",
									backgroundPosition: "center",
									borderRadius: "8px",
								}}
							></div>
							<div
								className="h-56 w-56 mt-32"
								style={{
									backgroundSize: "110%",
									backgroundRepeat: "no-repeat",
									backgroundColor: "#769e9a",
									backgroundPosition: "center",
									borderRadius: "8px",
								}}
							></div>
							<div
								className="h-56 w-56 mt-64"
								style={{
									backgroundSize: "110%",
									backgroundRepeat: "no-repeat",
									backgroundColor: "#769e9a",
									backgroundPosition: "center",
									borderRadius: "8px",
								}}
							></div>
						</div>
						{/* photo */}
						<div className="order-1 xl:order-none mb-8">
							<Photo />
						</div>
					</div>
				</div>
			</div>

			<Stats />
		</section>
	);
}
