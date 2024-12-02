import { addMonths, format, subMonths } from "date-fns";

const cn = classNames.bind(styles);

import classNames from "classnames/bind";
import Image from "next/image";
import { useState } from "react";

import styles from "./monthHeader.module.scss";

export default function MonthHeader() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  const isCurrentMonth =
    format(currentDate, "yyyyMM") === format(today, "yyyyMM");

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => {
    if (!isCurrentMonth) {
      setCurrentDate(addMonths(currentDate, 1));
    }
  };

  return (
    <div className={cn("header")}>
      <button onClick={handlePrevMonth}>
        <Image
          src={"/icons/ic-left-arrow-400.svg"}
          alt="화살표"
          width={24}
          height={24}
        />
      </button>
      <p>{currentDate.getMonth() + 1}월</p>
      <button onClick={handleNextMonth}>
        <Image
          src={
            isCurrentMonth
              ? "/icons/ic-right-arrow-600.svg"
              : "/icons/ic-right-arrow-400.svg"
          }
          alt="화살표"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}
