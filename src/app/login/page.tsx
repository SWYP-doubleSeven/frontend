"use client";
import logo from "@/../public/icons/ic-logo.svg";
import google from "@/../public/icons/icon_google.svg";
import kakao from "@/../public/icons/icon_kakaotalk.svg";
import YesNoModal from "@/components/commons/Modal/YesNoModal";
import { loginGuest } from "@/lib/apis/login";
import { loginData, loginState } from "@/lib/atoms/login";
import { useMutation } from "@tanstack/react-query";
import classNames from "classnames/bind";
import { useAtom } from "jotai";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./login.module.scss";

const cn = classNames.bind(styles);

export default function Login() {
  const [modal, setModal] = useState(false);
  const [, setLogin] = useAtom(loginState);
  const [, setLoginData] = useAtom(loginData);
  const router = useRouter();

  const { mutate: postGuest } = useMutation({
    mutationKey: ["postGuest"],
    mutationFn: loginGuest,
    onSuccess: (res) => {
      setLoginData(res);
      console.log(res);
    },
  });

  return (
    <>
      <div className={cn("loginWrap")}>
        <div className={cn("title")}>
          <Image src={logo} alt="logo" width={130} height={130} />
          <p>소비의 가치를 지키다</p>
          <h1>ZERO COST</h1>
        </div>

        <div className={cn("loginBox")}>
          <div
            className={cn("loginBtn")}
            onClick={() => router.push("/loginNick")}
          >
            <Image src={kakao} alt="kakao login" width={24} height={24} />
            <p>카카오 시작하기</p>
          </div>
          <div
            className={cn("loginBtn")}
            onClick={() => router.push("/loginNick")}
          >
            <Image src={google} alt="google login" width={24} height={24} />
            <p>구글로 시작하기</p>
          </div>
          <div
            className={cn("guest")}
            onClick={() => {
              setModal(true);
            }}
          >
            게스트로 시작하기
          </div>
        </div>

        <div className={cn("agreeWrap")}>
          계속 진행함에 따라 Zerocost의 <span>이용약관</span>과{" "}
          <span>개인정보 보호정책</span>에
          <br />
          동의하는 것으로 간주됩니다.
        </div>
      </div>
      {modal && (
        <YesNoModal
          back={() => setModal(false)}
          confirm={() => {
            postGuest();
            setLogin("guest");
            router.push("/");
          }}
        >
          게스트 이용 시 기록들은 저장되지 않으며
          <br />
          일정 기간 미접속 시 삭제될 수 있습니다.
          <br />
          계속 진행하시겠습니까?
        </YesNoModal>
      )}
    </>
  );
}
