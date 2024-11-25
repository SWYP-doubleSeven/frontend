import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import pig from "@/../public/icons/ic-logo.svg";
import setting from "@/../public/icons/ic-setting.svg";

import style from "./gnb.module.scss";

const cn = classNames.bind(style);

export default function Gnb() {
  const [gnbMore, setGnbMore] = useState();
  return (
    <div className={cn("gnbWrap")}>
      <Link href={"/"}>
        <Image src={pig} alt={"로고"} width={40} height={40} />
      </Link>
      <div>{gnbMore}</div>

      <Image src={setting} alt={"메뉴"} width={30} height={30} />
    </div>
  );
}
