"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const cn = classNames.bind(styles);
import classNames from "classnames/bind";

import styles from "./adminLogin.module.scss";

interface LoginFormInputs {
  username: string;
  password: string;
}

export default function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [loginError, setLoginError] = useState<boolean>(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    if (data.username === "admin" && data.password === "zerocost1!") {
      router.push("/admin/list");
    } else {
      setLoginError(true);
    }
  };

  const goBack = () => {
    router.back();
  };

  return (
    <div>
      <div className={cn("container")}>
        <div className={cn("notice")}>관리자만 접속이 가능합니다.</div>
        <form onSubmit={handleSubmit(onSubmit)} className={cn("headerWrap")}>
          <div className={cn("inputWrap")}>
            <div className={cn("header")}>
              <div className={cn("labelWrap")}>
                <div className={cn("title")}>아이디</div>
                <input
                  type="text"
                  className={cn("input")}
                  {...register("username", {
                    required: "아이디는 필수 입력입니다.",
                  })}
                />
              </div>
              {errors.username && (
                <span className={cn("error")}>{errors.username.message}</span>
              )}
            </div>
            <div className={cn("header")}>
              <div className={cn("labelWrap")}>
                <div className={cn("title")}>비밀번호</div>
                <input
                  type="password"
                  className={cn("input")}
                  {...register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                  })}
                />
              </div>
              {errors.password && (
                <span className={cn("error")}>{errors.password.message}</span>
              )}
            </div>
          </div>

          <div className={cn("buttonWrap")}>
            <button type="submit" className={cn("loginButton")}>
              LOGIN
            </button>
            {loginError && (
              <div className={cn("errorMessage")}>다시 시도해 주세요.</div>
            )}
          </div>
        </form>
        <button type="button" className={cn("backButton")} onClick={goBack}>
          돌아가기
        </button>
      </div>
    </div>
  );
}
