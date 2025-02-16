import React, { useState } from "react";
import Input from "./components/Input";
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
		<div className="conversion-container">
			<>
				<div className="input-container">
					<TbZoomMoney size={25} />
					<Input
						label="Valor:"
						amount={amount}
						onChangeAmount={(amount) => setAmount(amount)}
						currency={currency}
						onCurrencyChange={setCurrency}
						currencies={currencies}
					/>
				</div>

				<div className="goal-currency-container">
					<FaMoneyBillTransfer size={25} />
					<Input
						label="Moeda Desejada:"
						amount={converted ?? 0}
						onChangeAmount={() => {}}
						currency={goalCurrency}
						onCurrencyChange={setGoalCurrency}
						currencies={currencies}
					/>
				</div>

				<div className="button-container">
					<button
						onClick={searchConversion}
						className="button">
						Convert
					</button>

					<button
						onClick={reset}
						className="reset-button">
						Reset
						<IoIosRefresh
							size={25}
							className="icon"
						/>
					</button>
				</div>

				<div className="result-container">
					{converted !== null && (
						<p className="converted-value">
							{amount} {currency} = {converted.toFixed(2)} {goalCurrency}
						</p>
					)}
				</div>
			</>
		</div>
	);
};

export default App;
