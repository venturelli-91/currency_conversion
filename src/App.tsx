import React, { useState } from "react";
import Input from "./components/Input";

const App = () => {
	const [amount, setAmount] = useState<number>(0);
	const [currency, setCurrency] = useState<
		"USD" | "EUR" | "JPY" | "CAD" | "INR" | "BRL" | "AUD"
	>("BRL");

	const currencies = ["USD", "EUR", "JPY", "CAD", "INR", "BRL", "AUD"] as const;

	return (
		<div className="currency-input">
			<Input
				amount={amount}
				onChangeAmount={setAmount}
				currency={currency}
				onCurrencyChange={setCurrency}
				currencies={currencies}
			/>
		</div>
	);
};

export default App;
