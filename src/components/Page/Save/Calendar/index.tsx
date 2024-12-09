import {
  addDays,
  addMonths,
  endOfMonth,
  format,
  getDay,
  startOfMonth,
  subMonths,
} from "date-fns";

import classNames from "classnames/bind";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

import CalendarModal from "../CalendarModal";
import CalendarItem from "../CalendarItem";
import styles from "./calendar.module.scss";
import { getVirtualItemCalendar } from "@/lib/apis/virtualItems";
import { CalendarData } from "@/types/virtualItems";

interface CalendarProps {
  selectedCategories: string[];
}

const cn = classNames.bind(styles);

export default function Calendar({ selectedCategories }: CalendarProps) {
  const week = ["일", "월", "화", "수", "목", "금", "토"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarData, setCalendarData] = useState<CalendarData | null>(null);

  const today = new Date();
  const isCurrentMonth =
    format(currentDate, "yyyyMM") === format(today, "yyyyMM");

  const startOfCurrentMonth = startOfMonth(currentDate);
  const endOfCurrentMonth = endOfMonth(currentDate);

  const startDate = addDays(startOfCurrentMonth, -getDay(startOfCurrentMonth));
  const days = Array.from({ length: 35 }, (_, i) => addDays(startDate, i));

  const fetchCalendarData = useCallback(async () => {
    try {
      const year = parseInt(format(currentDate, "yyyy"));
      const month = parseInt(format(currentDate, "M"));
      const data = await getVirtualItemCalendar(year, month);
      setCalendarData(data);
    } catch (error) {
      console.error("Failed to fetch calendar data:", error);
    }
  }, [currentDate]);

  useEffect(() => {
    fetchCalendarData();
  }, [fetchCalendarData]);

  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => {
    if (!isCurrentMonth) {
      setCurrentDate(addMonths(currentDate, 1));
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedDate(null);
    fetchCalendarData(); // 모달이 닫힐 때 캘린더 데이터도 새로고침
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
            const dayNumber = parseInt(format(day, "d"));
            const dayData = calendarData?.days.find(
              (item) => item.day === dayNumber
            );

            // Filter category summaries based on selected categories
            const filteredSummaries = dayData?.categorySummaries.filter(
              (summary) =>
                selectedCategories.length === 0 ||
                selectedCategories.includes(summary.categoryName)
            );

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
                {dayData && isCurrentMonth && filteredSummaries ? (
                  <CalendarItem
                    day={dayNumber}
                    categorySummaries={filteredSummaries}
                  />
                ) : (
                  format(day, "d")
                )}
              </div>
            );
          })}
        </div>
      </div>
      {isModalOpen && selectedDate && (
        <CalendarModal
          date={selectedDate}
          day={parseInt(format(selectedDate, "d"))}
          onClose={handleModalClose}
          onUpdate={fetchCalendarData}
        />
      )}
    </div>
  );
}
