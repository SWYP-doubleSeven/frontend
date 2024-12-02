const cn = classNames.bind(styles);
import classNames from "classnames/bind";

import styles from "./listCard.module.scss";

export default function ListCard() {
  return (
    <div className={cn("container")}>
      <div>카테고리</div>
      <div>배지 이름</div>
      <div>조건</div>
    </div>
  );
}
