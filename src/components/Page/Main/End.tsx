import classNames from "classnames/bind";

import money from "@/../public/icons/icon_money.svg";
import { countMain } from "@/lib/atoms/main";
import { useAtom } from "jotai";
import Image from "next/image";
import styles from "./Main.module.scss";

const cn = classNames.bind(styles);

export default function End() {
  const [mainOrder, setMainOrder] = useAtom(countMain);

  return (
    <>
      <h2 className={cn("title")}>
        <Image src={money} alt="로고" width={100} height={100} />
      </h2>

      <h2 className={cn("subTitle")}>내가 해냄!</h2>
      <div className={cn("back")} onClick={() => setMainOrder(0)}>
        {"<- "}뒤로가기
      </div>
    </>
  );
}
