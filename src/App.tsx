import React, { useEffect, useState } from "react";
import Input from "./components/Input";

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

	useEffect(() => {
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
					console.log("URL da requisição:", url);

					const response = await fetch(url);

					if (!response.ok) {
						throw new Error(`Erro na requisição: ${response.statusText}`);
					}

					const data = await response.json();
					console.log("Resposta da API:", data);

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
		searchConversion();
	}, [amount, currency, goalCurrency]);

	return (
		<div className="currency-input">
			<>
				<Input
					amount={amount}
					onChangeAmount={setAmount}
					currency={currency}
					onCurrencyChange={setCurrency}
					currencies={currencies}
				/>
				<Input
					amount={converted ?? 0}
					onChangeAmount={() => {}}
					currency={goalCurrency}
					onCurrencyChange={setGoalCurrency}
					currencies={currencies}
				/>
				{converted !== null && (
					<p>
						{amount} {currency} = {converted.toFixed(2)} {goalCurrency}
					</p>
				)}
			</>
		</div>
	);
};

export default App;
