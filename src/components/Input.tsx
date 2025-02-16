import React from "react";

type CurrencyValid = "USD" | "EUR" | "JPY" | "CAD" | "INR" | "BRL" | "AUD";

interface MoneyAmountProps {
	amount: number;
	onChangeAmount: (value: number) => void;
	currency: CurrencyValid;
	onCurrencyChange: (value: CurrencyValid) => void;
	currencies: readonly CurrencyValid[];
}

const Input: React.FC<MoneyAmountProps> = ({
	amount,
	onChangeAmount,
	currency,
	onCurrencyChange,
	currencies,
}) => {
	return (
		<div>
			<input
				type="number"
				value={amount}
				onChange={(e) => onChangeAmount(Number(e.target.value))}
			/>
			<select
				value={currency}
				onChange={(e) => onCurrencyChange(e.target.value as CurrencyValid)}>
				{currencies.map((currency) => (
					<option
						key={currency}
						value={currency}>
						{currency}
					</option>
				))}
			</select>
		</div>
	);
};

export default Input;
