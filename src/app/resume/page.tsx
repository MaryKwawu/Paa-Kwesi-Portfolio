"use client";

import React from "react";

import { FaNodeJs, FaDocker, FaAws, FaJenkins } from "react-icons/fa";

import {
	SiGrafana,
	SiPrometheus,
	SiKubernetes,
	SiHelm,
	SiArgo,
	SiRabbitmq,
	SiApachekafka,
	SiCeph,
	SiIota,
	SiApifox,
	SiMqtt,
	SiArduino,
} from "react-icons/si";

// experience data
const experience = {
	title: "My experience",
	Description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident pariatur quibusdam perferendis, culpa beatae, ipsum officiis quis, temporibus aspernatur molestias esse architecto quod. Ratione sunt iste ",
	items: [
		{
			company: "Global PayEX",
			position: "DevOps Engineer",
			duration: "Nov 2022 - Present",
		},
		{
			company: "Tia Cloud",
			position: "DevOps Engineer",
			duration: "Sep 2021 - Nov 2022",
		},
		{
			company: "The Quantum Group Ltd",
			position: "DevOps Lead",
			duration: "Sep 2020 -  Aug 2021",
		},
		{
			company: "Vodafone",
			position: "Internship",
			duration: "Jun 2018 - Aug 2018",
		},
	],
};

// service data
const services = {
	items: [
		{
			num: "01",
			title: "IoT Project",
			description:
				"Working with ESP8266 microcontrollers and ultrasonic sensors to calculate distance and time and sends alerts when predefined conditions are met. Working with RabbitMQ and Mosquitto Broker communicating over MQTT Protocol. Programming microcontroller with micropython using Arduino",
			duration: "Oct 2023 - Present",
			stack: [
				{ name: "Message Queue · ESP8266" },
				{ name: "Azure Kubernetes Service (AKS" },
				{ name: "RabbitMQ · Python (Programming Language)" },
			],
		},
		{
			num: "02",
			title: "Selenium Web Testing with Jenkins",
			description:
				"Leveraging on Jenkins to automate the periodic execution of web automation testing builds",
			duration: "Apr 2023 - Present",
			stack: [{ name: "Docker" }, { name: "Jenkins" }],
		},
		{
			num: "03",
			title: "Acumatica ERP",
			description:
				"Integrating proprietary ISV solution with Acumatica ERP instance to solve specific anomalies for clients. This ISV solution is imported into client Acumatica instance and an API and micro-service application is containerized and deployed in Kubernetes to connect on-prem system to client system.",
			duration: "Mar 2023 - Present",
			stack: [
				{ name: "Amazon EKS" },
				{ name: "Argo" },
				{ name: "Docker" },
				{ name: "Git" },
			],
		},
		{
			num: "04",
			title: "Proprietary Cloud Platform",
			description:
				"Building proprietary cloud platform for internal and commercial use. Using tools like Kubernetes, Cloudstack and Ceph",
			duration: "Jan 2022 - Aug 2023",
			stack: [{ name: "Grafana" }],
		},
	],
};

//educational data
const education = {
	icon: "",
	title: "My education",
	Description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident pariatur quibusdam perferendis, culpa beatae, ipsum officiis quis, temporibus aspernatur molestias esse architecto quod. Ratione sunt iste ",
	items: [
		{
			Institution: "Udacity",
			Certification: "Cloud DevOps Engineer",
			duration: "Aug 2022",
		},

		{
			Institution: "ICSI, UK (International CyberSecurity Institute)",
			Certification: "ICSI | CNSS Certified Network Security Specialist",
			duration: "May 25, 2020",
		},

		{
			Institution: "Kwame Nkrumah University of Science and Technology Kumasi",
			Degree: "Bachelor's Degree in Computer Science",
			duration: "Aug 2018 - Nov 2022",
		},
	],
};

//skills
const skills = {
	title: "My skills",
	Description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident pariatur quibusdam perferendis, culpa beatae, ipsum officiis quis, temporibus aspernatur molestias esse architecto quod. Ratione sunt iste ",
	skilllist: [
		{
			icon: <FaAws />,
			name: "Aws",
		},
		{
			icon: <FaDocker />,
			name: "Docker",
		},
		{
			icon: <FaNodeJs />,
			name: "nodejs",
		},
		{
			icon: <SiApachekafka />,
			name: "Kafka",
		},
		{
			icon: <SiApifox />,
			name: "Api",
		},

		{
			icon: <SiArgo />,
			name: "ArgoCD",
		},
		{
			icon: <SiKubernetes />,
			name: "kubernetes",
		},
		{
			icon: <SiCeph />,
			name: "Ceph",
		},
		{
			icon: <SiGrafana />,
			name: "Grafana",
		},
		{
			icon: <SiHelm />,
			name: "Helm",
		},
		{
			icon: <SiIota />,
			name: "IOT",
		},
		{
			icon: <SiPrometheus />,
			name: "Prometheus",
		},
		{
			icon: <SiRabbitmq />,
			name: "Rabbitmq",
		},
		{
			icon: <FaJenkins />,
			name: "Jenkins",
		},
		{
			icon: <SiMqtt />,
			name: "Mqtt",
		},
		{
			icon: <SiArduino />,
			name: "Arduino",
		},
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import { BsArrowDownRight } from "react-icons/bs";

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
			}}
			className="flex"
		>
			<div className="pt-12">
				{/* btn & socials */}

				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex text-white flex-col  w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="services">Services</TabsTrigger>
					</TabsList>
					{/* content */}
					<div className="min-h-[30px] w-full">
						{/* expeirence */}
						<TabsContent value="experience" className="w-full ">
							<div className="flex flex-col  gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold text-white">
									{experience.title}
								</h3>
								<p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">
									{experience.Description}
								</p>

								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<div key={index}>
													<li
														key={index}
														className="bg-[#41718c] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
													>
														<span className="text-accent">{item.duration}</span>
														<h3 className="text-xl max-w-[260px] text-white min-h-[60px] text-center lg:text-left ">
															{item.position}
														</h3>
														<div className="flex items-center gap-3">
															{/* dot */}
															<span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
															<p className="text-white/60">{item.company}</p>
														</div>
													</li>
												</div>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* service */}
						<TabsContent value="services" className="w-full ">
							{services.items.map((service, index) => {
								return (
									<div key={index} className="flex-1 flex flex-col gap-6 group">
										{/* top */}
										<div className="w-full flex justify-between item-center  ">
											<div className="text-5xl font-extrabold text-outline outline-white text-transparent group-hover:text-accent transition-all duration-500 mt-6">
												{service.num}
											</div>
											<div className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 mt-6">
												<BsArrowDownRight className="text-primary text-3xl" />
											</div>
										</div>
										{/* title */}
										<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accen transition-all duration-500">
											{service.title}
										</h2>
										{/* description */}
										<p className="text-white/60 text-left">
											{service.description}
										</p>
										{/* stack */}
										<ul className="flex gap-4 ">
											{service.stack.map((stack, index) => {
												return (
													<div key={index}>
														<li key={index} className="text:xl text-accent ">
															{stack.name}
															{/* remove the last comma */}
															{index !== service.stack.length - 1 && ","}
														</li>
													</div>
												);
											})}
										</ul>
										{/* border */}
										<div className="border-b border-white/20 w-full"></div>
									</div>
								);
							})}
						</TabsContent>

						{/* education */}
						<TabsContent value="education" className="w-full ">
							<div className="flex flex-col  gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold text-white">
									{education.title}
								</h3>
								<p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">
									{education.Description}
								</p>

								<ScrollArea>
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<div key={index}>
													<li
														key={index}
														className="bg-[#41718c] min-w-80 min-h-full py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
													>
														<span className="text-accent">{item.duration}</span>
														<h3 className="text-xl max-w-[260px] text-white text-center lg:text-left ">
															{item.Degree}
															{item.Certification}
														</h3>
														<div className="flex items-center gap-3">
															<div className="min-w-[8px] min-h-[8px] rounded-full bg-accent"></div>
															<p className="text-white/60 text-left">
																{item.Institution}
															</p>
														</div>
													</li>
												</div>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* skills */}
						<TabsContent value="skills" className="w-full h-full ">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold text-white">
										{skills.title}
									</h3>
									<p className="max-w-[900px] text-white/60 mx-auto xl:mx-0">
										{skills.Description}
									</p>
								</div>
								<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 text-white">
									{skills.skilllist.map((skill, index) => {
										return (
											<div key={index}>
												<li>
													<TooltipProvider delayDuration={100}>
														<Tooltip>
															<TooltipTrigger className="w-full h-[150px] bg-[#41718c] rounded-xl flex justify-center items-center group">
																<div className="text-6xl group-hover:text-accent transition-all duration-300">
																	{skill.icon}
																</div>
															</TooltipTrigger>
															<TooltipContent>
																<p className="capitalize">{skill.name}</p>
															</TooltipContent>
														</Tooltip>
													</TooltipProvider>
												</li>
											</div>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
