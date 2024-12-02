"use client";

import classNames from "classnames/bind";

import styles from "./statistics.module.scss";

const cn = classNames.bind(styles);

import MonthHeader from "@/components/commons/MonthHeader";
import Bar from "@/components/Page/Statistics/Bar";
import Line from "@/components/Page/Statistics/Line";
import MostSavedTime from "@/components/Page/Statistics/MostSavedTime";
import Percentage from "@/components/Page/Statistics/Percentage";

export default function Statistics() {
  return (
    <div className={cn("container")}>
      <MonthHeader />
      <p className={cn("total")}>이번 달 지킨 돈 0000원</p>
      <div className={cn("chartWrap")}>
        <div className={cn("title")}>절약 카테고리</div>
        <div className={cn("barWrap")}>
          <Bar />
          <Percentage />
        </div>
      </div>
      <div className={cn("chartWrap")}>
        <p className={cn("title")}>시간별 절약</p>
        <div className={cn("timeWrap")}>
          <Line />
          <MostSavedTime />
        </div>
      </div>
    </div>
  );
}
