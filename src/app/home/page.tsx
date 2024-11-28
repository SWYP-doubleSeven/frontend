import classNames from "classnames/bind";

import styles from "./home.module.scss";

const cn = classNames.bind(styles);

export default function Home() {
  return (
    <>
      <div className={cn("page")}></div>
    </>
  );
}
