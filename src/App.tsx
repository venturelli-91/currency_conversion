import React, { useState } from "react";
import { Button, Card, Flowbite, TextInput, Select } from "flowbite-react";
import { TbZoomMoney } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IoIosRefresh } from "react-icons/io";

const App = () => {
	const [amount, setAmount] = useState<number>(0);
	const [currency, setCurrency] = useState<
		"USD" | "EUR" | "JPY" | "CAD" | "INR" | "BRL" | "AUD"
	>("BRL");
	const [goalCurrency, setGoalCurrency] = useState<
		"USD" | "EUR" | "JPY" | "CAD" | "INR" | "BRL" | "AUD"
	>("USD");
	const [converted, setConverted] = useState<number | null>(null);

	const currencies = ["USD", "EUR", "JPY", "CAD", "INR", "BRL", "AUD"] as const;

	const searchConversion = async () => {
		if (amount > 0) {
			try {
				const key = process.env.NEXT_PUBLIC_API_KEY;
				console.log("API Key:", key);
				if (!key) {
					console.error("Não há introdução de API.");
					return;
				}

				const url = `https://api.currencyapi.com/v3/latest?apikey=${key}&base_currency=${currency}&currencies=${goalCurrency}`;
				const response = await fetch(url);
				const data = await response.json();

				if (data?.data?.[goalCurrency]?.value) {
					const rate = data.data[goalCurrency].value;
					setConverted(amount * rate);
				} else {
					console.error("Erro ao buscar taxa de conversão!", data);
				}
			} catch (error) {
				console.error("Erro na requisição:", error);
			}
		}
	};

	const reset = () => {
		setAmount(0);
		setCurrency("BRL");
		setGoalCurrency("USD");
		setConverted(null);
	};

	return (
		<Flowbite>
			<div className="min-h-screen bg-white dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
				<div className="max-w-4xl mx-auto">
					<h1
						className="font-bold text-cyan-400 text-center mb-6"
						style={{ fontSize: "2.5rem" }}>
						Conversor de Moedas
					</h1>

					<Card className="bg-white dark:bg-gray-800">
						<div className="space-y-12">
							<div className="flex items-center gap-6">
								<TbZoomMoney className="text-3xl text-cyan-400" />
								<div className="flex-1 space-y-4">
									<label className="block text-base font-bold text-cyan-400 mb-2">
										Valor:
									</label>
									<div className="flex gap-4">
										<TextInput
											type="number"
											value={amount}
											onChange={(e) => setAmount(Number(e.target.value))}
											placeholder="Digite o valor"
											className="flex-1"
											sizing="lg"
										/>
										<Select
											value={currency}
											onChange={(e) =>
												setCurrency(e.target.value as typeof currency)
											}
											sizing="lg">
											{currencies.map((c) => (
												<option
													key={c}
													value={c}>
													{c}
												</option>
											))}
										</Select>
									</div>
								</div>
							</div>

							<div className="flex items-center gap-6">
								<FaMoneyBillTransfer className="text-3xl text-cyan-400" />
								<div className="flex-1 space-y-4">
									<label className="block text-base font-bold text-cyan-400 mb-2 mt-4">
										Moeda Desejada:
									</label>
									<div className="flex gap-4">
										<TextInput
											type="number"
											value={converted ?? 0}
											readOnly
											className="flex-1"
											sizing="lg"
										/>
										<Select
											value={goalCurrency}
											onChange={(e) =>
												setGoalCurrency(e.target.value as typeof goalCurrency)
											}
											sizing="lg">
											{currencies.map((c) => (
												<option
													key={c}
													value={c}>
													{c}
												</option>
											))}
										</Select>
									</div>
								</div>
							</div>

							<div className="flex justify-center gap-8 pt-8 mt-4">
								<div>
									<Button
										gradientDuoTone="purpleToBlue"
										onClick={searchConversion}
										size="lg">
										Converter
									</Button>
								</div>
								<div>
									<Button
										gradientDuoTone="cyanToBlue"
										onClick={reset}
										size="lg">
										<IoIosRefresh className="mr-2 h-6 w-6" />
										Resetar
									</Button>
								</div>
							</div>

							{converted !== null && (
								<div className="mt-6 p-6 bg-gray-100 dark:bg-gray-900 rounded-lg">
									<p className="text-center text-xl font-semibold text-cyan-400">
										{amount} {currency} = {converted.toFixed(2)} {goalCurrency}
									</p>
								</div>
							)}
						</div>
					</Card>
				</div>
			</div>
		</Flowbite>
	);
};

export default App;
