import classNames from "classnames/bind";

import styles from "./admin.module.scss";

const cn = classNames.bind(styles);
import Gnb from "@/components/Page/Admin/Gnb";

interface Props {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div style={{ color: "black" }} className={cn("layout")}>
      <Gnb />
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
