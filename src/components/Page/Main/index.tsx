import classNames from "classnames/bind";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import arrowOn from "@/../public/icons/arrowOn.svg";
import mainImg from "@/../public/icons/ic-coffee.svg";

import { countMain, mainChoice } from "@/lib/atoms/main";
import { useAtom } from "jotai";
import styles from "./Main.module.scss";

const cn = classNames.bind(styles);

export default function Main1() {
  const [mainOrder, setMainOrder] = useAtom(countMain);
  const [choice, setChoice] = useAtom(mainChoice);
  const handleChoice = (item: string) => {
    setChoice((prevChoice) => ({
      ...prevChoice,
      item: item,
    }));
    setMainOrder(1);
  };
  return (
    <>
      <h2 className={cn("title")}>커피</h2>
      <div className="swiper-button-prev">
        <Image src={arrowOn} alt="화살표" width={32} height={17} />
      </div>
      <Swiper
        id="mainSlide"
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: ".swiper-button-prev", // Attach custom navigation
          nextEl: ".swiper-button-next", // Attach custom navigation
        }}
        modules={[Navigation, Pagination]}
        loop={true}
        className={cn("slide")}
      >
        <SwiperSlide>
          <Image
            src={mainImg}
            alt="메인 슬라이드 이미지"
            width={300}
            height={300}
            onClick={() => handleChoice("커피")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={mainImg}
            alt="메인 슬라이드 이미지"
            width={300}
            height={300}
            onClick={() => handleChoice("커피")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={mainImg}
            alt="메인 슬라이드 이미지"
            width={300}
            height={300}
            onClick={() => handleChoice("커피")}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={mainImg}
            alt="메인 슬라이드 이미지"
            width={300}
            height={300}
            onClick={() => handleChoice("커피")}
          />
        </SwiperSlide>
      </Swiper>

      <div className="swiper-button-next">
        <Image src={arrowOn} alt="화살표" width={32} height={17} />
      </div>

      <h2 className={cn("subTitle")}>마셨다치고</h2>
    </>
  );
}
