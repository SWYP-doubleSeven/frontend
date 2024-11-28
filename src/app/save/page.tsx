"use client";

import classNames from "classnames/bind";

import styles from "./save.module.scss";

const cn = classNames.bind(styles);

import { useState } from "react";

import CalendarView from "@/components/Page/Save/CalendarView";
import SaveGnb from "@/components/Page/Save/Gnb";
import Listview from "@/components/Page/Save/ListView";

export default function SavePage() {
  const [isCalendarView, setIsCalendarView] = useState(true);

  return (
    <div className={cn("wrap")}>
      <SaveGnb
        isCalendarView={isCalendarView}
        setIsCalendarView={setIsCalendarView}
      />

      {isCalendarView ? <CalendarView /> : <Listview />}
    </div>
  );
}
