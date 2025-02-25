import { Flowbite } from "flowbite-react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Flowbite
			theme={{
				theme: {
					textInput: {
						field: {
							input: {
								colors: {
									primary: "text-cyan-400",
								},
							},
						},
					},
				},
			}}>
			<Component {...pageProps} />
		</Flowbite>
	);
}
