"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Phone",
		description: "(+233) 558 137 950",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "ppkfrimpong@gmail.com",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Address",
		description: "Accra",
	},
];

import { motion } from "framer-motion";

const Contact = () => {
	const [firstName, setFirstname] = useState("");
	const [lasttName, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [service, setService] = useState("");
	const [message, setMessage] = useState("");

	function sendMessage() {
		window.location.href = `mailto:${email}`;
	}
	return (
		<div>
			<motion.section
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
				}}
				className="py-20"
			>
				<div className="container mx-auto">
					<div className="flex flex-col xl:flex-row gap-[30px]">
						{/* from  */}
						<div className="xl:h-[54%] order-2 xl:order-none">
							<form
								className="flex flex-col gap-6 p-10 bg-[#41718c] rounded-xl "
								onSubmit={sendMessage}
							>
								<h3 className="text-4xl text-accent">Let's work together</h3>
								<p className="text-white/60">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Eaque hic dolor quasi at nihil.
								</p>

								{/* input */}
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<Input
										type="firstname"
										required
										placeholder="Firstname"
										onChange={(e) => {
											setFirstname(e.target.value);
										}}
									/>
									<Input
										type="lastname"
										placeholder="Lastname"
										onChange={(e) => {
											setLastname(e.target.value);
										}}
									/>
									<Input
										type="email"
										required
										placeholder="Email address"
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
									<Input
										type="tel"
										required
										placeholder="Phone number"
										onChange={(e) => {
											setPhone(e.target.value);
										}}
									/>
								</div>

								<select
									onChange={(e) => {
										setService(e.target.value);
									}}
									className="h-[48px] w-full rounded-md border border-white/60 bg-primary px-4  text-base text-white/60 placeholder:text-white/10 focus:border-accent outline-none"
								>
									<option disabled>Select a service</option>
									<option value="IoT">IoT</option>
									<option value="Code Infrastructure">
										Code Infrastructure
									</option>
									<option value="DevOps">DevOps</option>
								</select>
								<Textarea
									required
									className="h-[200px]"
									placeholder="Type your message here"
									onChange={(e) => {
										setMessage(e.target.value);
									}}
								/>
								{/* btn */}
								<Button size="md" className="max-w-40" type="submit">
									Send message
								</Button>
							</form>
						</div>
						{/* info */}
						<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
							<ul className="flex flex-col gap-10">
								{info.map((item, index) => {
									return (
										<div key={index}>
											<li key={index} className="flex items-center gap-6">
												<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#41718c] text-accent rounded-md flex items-center justify-center">
													<div className="text-[28px]">{item.icon}</div>
												</div>
												<div className="flex-1">
													<p className="text-white/60">{item.title}</p>
													<h3 className="text-xl">{item.description}</h3>
												</div>
											</li>
										</div>
									);
								})}
							</ul>
						</div>
					</div>
				</div>
			</motion.section>
		</div>
	);
};

export default Contact;
