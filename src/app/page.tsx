"use client";

import React from "react";
import { Button } from "@/components/ui/button";

//components
import Link from "next/link";
import Photo from "@/components/photo";
import Stats from "@/components/stats";

const handleDownload = () => {
	const cvUrl = "";
	const link = document.createElement("a");
	link.href = cvUrl;
	link.download = "";
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};

export default function Home() {
	return (
		<section className="h-full">
			<div className="mx-auto h-full">
				<div className="flex flex-col xl:flex-row items centter justify-between xl:pt-8 xl:pb-24">
					{/* name & text */}
					<div className="flex gap-y-3 flex-col xl:text-left order-2 xl:order-none ">
						<h1 className="text-4xl space-y-3">
							<div>My name</div>
							<div>
								<span className="font-normal">is </span>{" "}
								<span className="font-semibold">Paa-Kwesi </span>
							</div>
						</h1>
						<p className="max-w[500px] mb-10 text-black/80">
							I am a professional DevSecOps Engineer with more than 5years of
							experience"
						</p>
						{/* btn & cards */}
						<div className="flex flex-col xl:flex-row items-center gap-8">
							<Link href="/contact">
								<Button
									variant="outline"
									size="lg"
									className="uppercase flex items-center gap-2"
								>
									Hire me
								</Button>
							</Link>
						</div>
						{/* top skills */}
						<div className="grid grid-cols-2 gap-2 mt-10 w-1/3">
							<div className="bg-[#fe5a02bf] text-white rounded text-center">
								RabbitMQ
							</div>
							<div className="bg-[#fe5b02] rounded text-center">Azure</div>

							<div className="bg-[#e5e5e5] rounded text-center">Kubernetes</div>
							<div className="bg-black text-white rounded text-center">
								Jenkins
							</div>
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
