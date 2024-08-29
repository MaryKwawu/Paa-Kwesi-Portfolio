"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
	return (
		<div className="w-full h-full relativer">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duration: 0.4, ease: "easeIn" },
				}}
			>
				{/* image */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
					}}
					className="w-[298px] h-[298px] mix-blend-lighten absolute"
				>
					<Image src="/" alt={""} priority quality={100} fill className="" />
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Photo;
