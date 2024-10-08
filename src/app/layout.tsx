/** @format */

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/header";
import { cn } from "@/lib/utils";
import PageTransition from "@/components/pageTransition";
import StairTransition from "@/components/stairTransition";

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
	variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
	title: "Paa-Kwesi App",
	description: "Paa-Kwesi's Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(jetbrainsMono.variable, "container min-h-screen py-6")}
			>
				<Header />
				<StairTransition />
				<PageTransition>{children}</PageTransition>
			</body>
		</html>
	);
}
