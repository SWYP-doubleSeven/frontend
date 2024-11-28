import classNames from "classnames/bind";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import logo from "@/../public/icons/ic-logo.svg";
import { countMain, mainChoice } from "@/lib/atoms/main";
import { useAtom } from "jotai";
import Image from "next/image";
import { useState } from "react";
import styles from "./Main.module.scss";

const cn = classNames.bind(styles);

export default function Main1() {
  const [mainOrder, setMainOrder] = useAtom(countMain);
  const [choice, setChoice] = useAtom(mainChoice);
  const [num, setNum] = useState<number[]>([]);
  const numBox = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(num.join(""));
  const handleChoice = () => {
    setChoice((prevChoice) => ({
      ...prevChoice,
      price: Number(num.join("")),
    }));
    setMainOrder(2);
  };

  const handleSlideChange = (swiper: any, index: number) => {
    setNum((prev) => {
      const updatedNum = [...prev];
      updatedNum[index] = numBox[swiper.realIndex];
      return updatedNum;
    });
  };

  return (
    <>
      <h2 className={cn("title")}>
        <Image src={logo} alt="로고" width={158} />
      </h2>

      <div className={cn("countWrap")}>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <Swiper
              key={`swiper-${index}`}
              id="mainSlide2"
              direction={"vertical"}
              slidesPerView={3}
              centeredSlides={true}
              spaceBetween={0}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
              loop={true}
              className={cn("slide")}
              onSlideChange={(swiper) => handleSlideChange(swiper, index)}
            >
              {numBox.map((item) => (
                <SwiperSlide key={item}>
                  <p className={cn("countNum")}>{item}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          ))}
        <p className={cn("countNum")}>원</p>
      </div>
      <h2 className={cn("subTitle")} onClick={handleChoice}>
        지키기
      </h2>
      <div className={cn("back")} onClick={() => setMainOrder(0)}>
        {"<- "}뒤로가기
      </div>
    </>
  );
}
