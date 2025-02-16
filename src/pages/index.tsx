"use client";

import App from "@/App";
import React from "react";

export default function Home() {
	return (
		<React.StrictMode>
			<div className="container">
				<>
					<h1 className="title">Currency Conversion</h1>

					<App></App>
				</>
			</div>
		</React.StrictMode>
	);
}
