import classNames from "classnames/bind";

import styles from "./saveContent.module.scss";

const cn = classNames.bind(styles);
import Image from "next/image";
import { useRef, useState } from "react";

import Button from "@/components/commons/Button";
import { categoryActionMap, categoryNameMap } from "@/constants/category";

import AmountInput from "../AmountInput";

interface SaveContentProps {
  onClose: () => void;
  category?: string;
  money: number;
}

export default function SaveContent({
  onClose,
  category,
  money,
}: SaveContentProps) {
  const [isEditingCategory, setIsEditingCategory] = useState(true);
  const [amount, setAmount] = useState(money);
  const [isFocused, setIsFocused] = useState(true);
  const [isEditingAmount, setIsEditingAmount] = useState(false);
  const amountInputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleNextClick = () => {
    if (!isEditingAmount) {
      setIsEditingAmount(true);
      setIsEditingCategory(false);
      setIsFocused(false);
      setTimeout(() => {
        amountInputRef.current?.focus();
      }, 0);
    } else {
      handleClose();
    }
  };

  return (
    <div className={cn("content", { editing: isEditingCategory })}>
      <div className={cn("categoryText")}>
        <Image
          src={`/icons/ic-${category}.svg`}
          alt="카테고리 아이콘"
          width={34}
          height={34}
        />
        <p>
          <span
            className={cn("underline", { focused: isFocused })}
            onClick={() => {
              setIsEditingCategory(true);
              setIsEditingAmount(false);
            }}
            onFocus={() => setIsFocused(true)}
            tabIndex={0}
          >
            {categoryNameMap[category]}
          </span>
          {categoryActionMap[category]}
        </p>
      </div>
      <div className={cn("categoryMoney", { hidden: isEditingCategory })}>
        <AmountInput
          value={amount}
          onChange={(newValue) => setAmount(newValue)}
          inputRef={amountInputRef}
        />
        <span>원 지켰다</span>
      </div>
      {(isFocused || isEditingAmount) && (
        <Button className={cn("button")} onClick={handleNextClick}>
          {isEditingAmount ? "완료" : "다음"}
        </Button>
      )}
    </div>
  );
}
