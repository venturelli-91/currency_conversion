import React from "react";

const BackgroundDesign = () => {
	return (
		<div className="fixed inset-0 -z-10 overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800" />
			<div className="absolute inset-0 opacity-5">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"linear-gradient(0deg, transparent 24%, rgba(165, 181, 203, 0.4) 25%, rgba(165, 181, 203, 0.4) 26%, transparent 27%, transparent 74%, rgba(165, 181, 203, 0.4) 75%, rgba(165, 181, 203, 0.4) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(165, 181, 203, 0.4) 25%, rgba(165, 181, 203, 0.4) 26%, transparent 27%, transparent 74%, rgba(165, 181, 203, 0.4) 75%, rgba(165, 181, 203, 0.4) 76%, transparent 77%, transparent)",
						backgroundSize: "50px 50px",
					}}
				/>
			</div>
			<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-50/20 to-transparent dark:from-blue-900/10" />
		</div>
	);
};

export default BackgroundDesign;
