import React from "react";
import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
	{
		icon: <FaGithub />,
		path: "",
	},
	{
		icon: <FaLinkedin />,
		path: "https://www.linkedin.com/in/paa-kwasi-frimpong/",
	},
	{
		icon: <FaTwitter />,
		path: "https://x.com/frimps6_5",
	},
	{
		icon: <FaInstagram />,
		path: "",
	},
];

const Social = ({ containerStyles, iconStyles }: any) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<div key={index}>
						<Link href={item.path} className={iconStyles}>
							{item.icon}
						</Link>
					</div>
				);
			})}
		</div>
	);
};
export default Social;
