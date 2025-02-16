import React from "react";

type CurrencyValid = "USD" | "EUR" | "JPY" | "CAD" | "INR" | "BRL" | "AUD";

interface MoneyAmountProps {
	label: string;
	amount: number;
	onChangeAmount: (value: number) => void;
	currency: CurrencyValid;
	onCurrencyChange: (value: CurrencyValid) => void;
	currencies: readonly CurrencyValid[];
}

const Input: React.FC<MoneyAmountProps> = ({
	label,
	amount,
	onChangeAmount,
	currency,
	onCurrencyChange,
	currencies,
}) => {
	return (
		<div>
			<label className="font-bold text-gray-500">{label}</label>
			<input
				type="number"
				value={amount}
				onChange={(e) => onChangeAmount(Number(e.target.value))}
				className="input"
			/>
			<select
				className="select"
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
