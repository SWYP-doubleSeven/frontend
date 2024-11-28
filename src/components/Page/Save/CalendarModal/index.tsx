import classNames from "classnames/bind";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Image from "next/image";
import { useState } from "react";

import styles from "./calendarModal.module.scss";

const cn = classNames.bind(styles);
import Button from "@/components/commons/Button";

interface CalendarModalProps {
  date: Date;
  onClose: () => void;
}

export default function CalendarModal({ date, onClose }: CalendarModalProps) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <div>
      <div className={cn("modalBack")} onClick={handleClose}></div>
      <div className={cn("modalWrap", { closing: isClosing })}>
        <div className={cn("bar")}></div>
        <div className={cn("time")}>
          {format(date, "M월 d일 (eee)", { locale: ko })}
        </div>
        <Button className={cn("button")}>
          <div className={cn("plus")}>
            <Image
              src="/icons/ic-plus.svg"
              alt="더하기 아이콘"
              width={18}
              height={18}
            />
            <div>저금하기</div>
          </div>
        </Button>
      </div>
    </div>
  );
}
