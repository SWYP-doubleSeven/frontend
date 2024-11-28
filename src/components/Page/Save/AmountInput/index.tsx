import classNames from "classnames/bind";

import styles from "./amountInput.module.scss";

const cn = classNames.bind(styles);

import { useState } from "react";

interface AmountInputProps {
  value: number;
  onChange: (newValue: number) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export default function AmountInput({
  value,
  onChange,
  inputRef,
}: AmountInputProps) {
  const [inputValue, setInputValue] = useState(value.toString());
  const [isFocused, setIsFocused] = useState(false);

  const formatToCurrency = (value: string) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    return new Intl.NumberFormat("ko-KR").format(Number(numericValue));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "");
    if (/^\d*$/.test(rawValue) && rawValue.length <= 7) {
      setInputValue(rawValue);
      onChange(Number(rawValue) || 0);
    }
  };

  const displayValue = formatToCurrency(inputValue);
  const inputWidth = `${Math.max(displayValue.length, 1)}ch`;

  return (
    <input
      ref={inputRef}
      value={displayValue}
      onChange={handleInputChange}
      inputMode="numeric"
      pattern="\d*"
      className={cn("inputStyle", { focused: isFocused })}
      style={{ width: inputWidth }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      maxLength={7}
      tabIndex={0}
    />
  );
}
