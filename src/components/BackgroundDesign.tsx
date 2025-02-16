import React from "react";
import Image from "next/image";
import Img from "@/assets/dollar.jpg";

const BackgroundDesign = () => {
	return (
		<div>
			<Image
				src={Img}
				alt="Dollar"
				className="image"
				layout="fill"
				objectFit="cover"
				priority
			/>
		</div>
	);
};

export default BackgroundDesign;
