import Image from "next/image";

import styles from "./categoryFilter.module.scss";

const cn = classNames.bind(styles);
import classNames from "classnames/bind";

import { category, categoryNameMap } from "@/constants/category";

export default function CategoryFilter() {
  return (
    <div className={cn("container")}>
      {category.map((item) => (
        <button key={item} type="button" className={cn("iconWrapper")}>
          <div>
            <Image
              src={`/icons/ic-${item}.svg`}
              alt={`${categoryNameMap[item]} 아이콘`}
              width={16}
              height={16}
            />
          </div>
          <span className={cn("label")}>{categoryNameMap[item]}</span>
        </button>
      ))}
    </div>
  );
}
