"use client";

import classNames from "classnames/bind";

import styles from "./add.module.scss";

const cn = classNames.bind(styles);
import AddBadge from "@/components/Page/Admin/AddBadge";

export default function page() {
  return (
    <div className={cn("container")}>
      <AddBadge />
    </div>
  );
}
