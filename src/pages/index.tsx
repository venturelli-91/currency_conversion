"use client";

import App from "@/App";
import BackgroundDesign from "@/components/BackgroundDesign";
import React from "react";

export default function Home() {
	return (
		<React.StrictMode>
			<>
				<div className="display">
					<h1 className="title">Currency Conversion</h1>
					<App></App>
				</div>
				<BackgroundDesign />
			</>
		</React.StrictMode>
	);
}
