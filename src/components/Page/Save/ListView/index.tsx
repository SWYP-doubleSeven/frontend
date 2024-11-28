import classNames from "classnames/bind";

import styles from "./listView.module.scss";

const cn = classNames.bind(styles);

import Image from "next/image";

import Card from "../Card";

export default function Listview() {
  return (
    <div className={cn("listWrap")}>
      <div className={cn("saveMoney")}>
        <span>이번 달 지킨 돈</span>
        <span>0000원</span>
      </div>
      <div className={cn("date")}>날짜</div>
      <Card category={"dessert"} />
    </div>
    // <div className={cn("empty")}>
    //   <Image
    //     src="/icons/ic-logo.svg"
    //     alt="로고 이미지"
    //     width={74}
    //     height={74}
    //   />
    //   <div className={cn("emptyState")}>아직 지킨 돈이 없어요</div>
    // </div>
  );
}
