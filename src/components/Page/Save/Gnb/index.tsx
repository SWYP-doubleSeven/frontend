"use client";

import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./gnb.module.scss";

const cn = classNames.bind(styles);

import { useAtom } from "jotai";

import { listEditState } from "@/lib/atoms/list";

import DeleteSaveButton from "../DeleteSaveButton";

interface SaveGnbProps {
  isCalendarView: boolean;
  setIsCalendarView: (value: boolean) => void;
}

export default function SaveGnb({
  isCalendarView,
  setIsCalendarView,
}: SaveGnbProps) {
  const [isEdit, setIsEdit] = useAtom(listEditState);

  return (
    <div className={cn("gnbWrap")}>
      <div className={cn("iconWrap")}>
        <Image
          src={`/icons/ic-cal-state-${isCalendarView ? "on" : "off"}.svg`}
          alt="달력 아이콘"
          width={24}
          height={24}
          className={cn("icon")}
          onClick={() => setIsCalendarView(true)}
        />
        <Image
          src={`/icons/ic-list-state-${!isCalendarView ? "on" : "off"}.svg`}
          alt="목록 아이콘"
          width={24}
          height={24}
          className={cn("icon")}
          onClick={() => setIsCalendarView(false)}
        />
      </div>
      {isEdit ? (
        <div
          className={cn("cancel", { hidden: isCalendarView })}
          onClick={() => setIsEdit(false)}
        >
          취소
        </div>
      ) : (
        <Image
          src="/icons/ic-edit-state-on.svg"
          alt="수정 아이콘"
          width={24}
          height={24}
          className={cn("icon", { hidden: isCalendarView })}
          onClick={() => setIsEdit(true)}
        />
      )}
      {isEdit && <DeleteSaveButton />}
    </div>
  );
}
