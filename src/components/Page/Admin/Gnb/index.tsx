"use client";

import classNames from "classnames/bind";

import styles from "./gnb.module.scss";

const cn = classNames.bind(styles);
import { usePathname, useRouter } from "next/navigation";

export default function Gnb() {
  const router = useRouter();
  const pathname = usePathname();
  const isLoggedIn = pathname !== "/admin";

  const handleLogout = () => {
    router.push("/admin");
  };

  return (
    <div className={cn("container")}>
      <div>제로코스트 관리자 페이지</div>
      {isLoggedIn && (
        <button className={cn("logoutButton")} onClick={handleLogout}>
          로그아웃
        </button>
      )}
    </div>
  );
}
