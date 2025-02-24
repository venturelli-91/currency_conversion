"use client";
import App from "@/App";
import React from "react";
import { DarkThemeToggle } from "flowbite-react";

export default function Home() {
	return (
		<React.StrictMode>
			<div className="min-h-screen">
				<div className="fixed top-4 right-4 z-50">
					<DarkThemeToggle />
				</div>

				<div className="bg-white dark:bg-gray-900 py-8">
					<div className="max-w-4xl mx-auto px-4">
						<App />
					</div>
				</div>

				<div className="bg-blue-50 dark:bg-blue-900/20 py-16">
					<div className="max-w-4xl mx-auto px-4">
						<h2 className="text-2xl font-semibold text-center mb-8 text-blue-900 dark:text-blue-100">
							Taxas de câmbio em tempo real
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
								<h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
									Transferências seguras
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Envie dinheiro para mais de 190 países em 130 moedas
									diferentes
								</p>
							</div>
							<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
								<h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
									Taxas competitivas
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Obtenha as melhores taxas de câmbio do mercado
								</p>
							</div>
							<div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
								<h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
									Atualizações em tempo real
								</h3>
								<p className="text-gray-600 dark:text-gray-400">
									Acompanhe as variações das taxas em tempo real
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="bg-white dark:bg-gray-900 py-16">
					<div className="max-w-4xl mx-auto px-4 text-center">
						<h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
							Ferramentas de conversão
						</h2>
						<p className="text-gray-600 dark:text-gray-400">
							Acesse ferramentas avançadas para suas necessidades de câmbio
						</p>
					</div>
				</div>
			</div>
		</React.StrictMode>
	);
}
