import classNames from "classnames/bind";

import styles from "./mostSavedTime.module.scss";

const cn = classNames.bind(styles);

import { data } from "./data";

export default function MostSavedTime() {
  const maxSavings = data.reduce((max, current) =>
    current.amount > max.amount ? current : max
  );

  const formattedHour =
    maxSavings.hour < 12
      ? `오전 ${maxSavings.hour}시`
      : `오후 ${maxSavings.hour % 12 || 12}시`;

  return (
    <div className={cn("container")}>
      <p>
        <span className={cn("time")}>{formattedHour}</span>
        <span className={cn("title")}>에 가장 많이 저금했어요</span>
      </p>
    </div>
  );
}
