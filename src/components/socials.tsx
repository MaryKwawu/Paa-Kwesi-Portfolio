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
		path: "",
	},
	{
		icon: <FaTwitter />,
		path: "",
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
