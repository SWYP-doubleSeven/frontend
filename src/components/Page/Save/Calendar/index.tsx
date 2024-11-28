import {
  addDays,
  addMonths,
  endOfMonth,
  format,
  getDay,
  startOfMonth,
  subMonths,
} from "date-fns";

const cn = classNames.bind(styles);

import classNames from "classnames/bind";
import Image from "next/image";
import { useState } from "react";

import CalendarModal from "../CalendarModal";
import styles from "./calendar.module.scss";

export default function Calendar() {
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();
  const isCurrentMonth =
    format(currentDate, "yyyyMM") === format(today, "yyyyMM");

  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = endOfMonth(currentDate);

  const startDate = addDays(startOfCurrentMonth, -getDay(startOfCurrentMonth)); // 달력 시작일 계산
  const days = Array.from({ length: 35 }, (_, i) => addDays(startDate, i)); // 35칸 생성

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => {
    if (!isCurrentMonth) {
      setCurrentDate(addMonths(currentDate, 1));
    }
  };

  return (
    <div className={cn("container")}>
      <div className={cn("calendar")}>
        <div className={cn("header")}>
          <button onClick={handlePrevMonth}>
            <Image
              src={"/icons/ic-left-arrow-400.svg"}
              alt="화살표"
              width={24}
              height={24}
            />
          </button>
          <p>{format(currentDate, "M월")}</p>
          <button onClick={handleNextMonth}>
            <Image
              src={
                isCurrentMonth
                  ? "/icons/ic-right-arrow-600.svg"
                  : "/icons/ic-right-arrow-400.svg"
              }
              alt="화살표"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className={cn("weekdays")}>
          {week.map((day) => (
            <div key={day} className={cn("weekday")}>
              {day}
            </div>
          ))}
        </div>
        <div className={cn("dates")}>
          {days.map((day) => {
            const isCurrentMonth =
              day >= startOfCurrentMonth && day <= endOfCurrentMonth;
            const dayOfWeek = getDay(day);
            return (
              <div
                key={day.toISOString()}
                className={cn("date", {
                  current: isCurrentMonth,
                  other: !isCurrentMonth,
                  sunday: dayOfWeek === 0,
                  saturday: dayOfWeek === 6,
                })}
                onClick={() => {
                  if (isCurrentMonth) {
                    setSelectedDate(day);
                    setIsModalOpen(true);
                  }
                }}
              >
                {format(day, "d")}
              </div>
            );
          })}
        </div>
      </div>
      {isModalOpen && selectedDate && (
        <CalendarModal
          date={selectedDate}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedDate(null);
          }}
        />
      )}
    </div>
  );
}
