"use client";

import classNames from "classnames/bind";

import styles from "./admin.module.scss";

const cn = classNames.bind(styles);

import AdminLogin from "@/components/Page/Admin/AdminLogin";

export default function AdminHomePage() {
  return (
    <div>
      <AdminLogin />
    </div>
  );
}
