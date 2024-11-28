import styles from "./calendarView.module.scss";

const cn = classNames.bind(styles);

import classNames from "classnames/bind";

import Calendar from "../Calendar";
import CategoryFilter from "../CategoryFilter";

export default function CalendarView() {
  return (
    <div className={cn("container")}>
      <CategoryFilter />
      <Calendar />
    </div>
  );
}
