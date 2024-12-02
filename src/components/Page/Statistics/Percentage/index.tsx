import classNames from "classnames/bind";

import styles from "./percentage.module.scss";

const cn = classNames.bind(styles);

import { categoryColorMap, categoryNameMap } from "@/constants/category";

import { data } from "./data";

export default function Percentage() {
  return (
    <div className={cn("grid")}>
      {data.map((item, index) => (
        <div key={index} className={cn("item")}>
          <div className={cn("colorWrap")}>
            <div
              className={cn("color")}
              style={{
                backgroundColor: categoryColorMap[item.categoryName],
              }}
            ></div>
            <div className={cn("category")}>
              {categoryNameMap[item.categoryName]}
            </div>
          </div>
          <div className={cn("amount")}>{item.percentage}%</div>
        </div>
      ))}
    </div>
  );
}
