import Image from "next/image";

import styles from "./categorySelector.module.scss";

const cn = classNames.bind(styles);
import classNames from "classnames/bind";

import { category, categoryNameMap } from "@/constants/category";

export default function CategorySelector() {
  return (
    <div className={cn("container")}>
      <div className={cn("grid")}>
        {category.map((item) => (
          <button key={item} type="button" className={cn("iconWrapper")}>
            <div>
              <Image
                src={`/icons/ic-${item}.svg`}
                alt={`${categoryNameMap[item]} 아이콘`}
                width={40}
                height={40}
              />
            </div>
            <span className={cn("label")}>{categoryNameMap[item]}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
