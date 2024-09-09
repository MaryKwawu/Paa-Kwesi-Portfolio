import React from "react";
//about data
const personalDetails = {
	title: "Personal Details",
	Description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe provident pariatur quibusdam perferendis, culpa beatae, ipsum officiis quis, temporibus aspernatur molestias esse architecto quod. Ratione sunt iste",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Paa-Kwesi Frimpong",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+233) 055 000 0000",
		},
		{
			fieldName: "Experience",
			fieldValue: "8+ Years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Ghanaian",
		},
		{
			fieldName: "Email",
			fieldValue: "paa-kwesi@gmail.com",
		},

		{
			fieldName: "Freelance",
			fieldValue: "Available",
		},
		{
			fieldName: "Language",
			fieldValue: "English",
		},
	],
};

const AboutMe = () => {
	return (
		<div>
			{/* personaldetail */}

			<div className="flex flex-col gap-[30px] pt-20">
				<h3 className="text-4xl font-bold text-white">
					{personalDetails.title}
				</h3>
				<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
					{personalDetails.Description}
				</p>
				<ul className="grid grid-cols-1 xl:grid-cols-2 gap-8  mx-auto xl:mx-0">
					{personalDetails.info.map((item, index) => {
						return (
							<div key={index}>
								<li
									key={index}
									className="flex items-center justify-center xl:justify-start gap-4"
								>
									<span className="text-white/60">{item.fieldName}</span>
									<span className="text-xl text-white">{item.fieldValue}</span>
								</li>
							</div>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default AboutMe;
