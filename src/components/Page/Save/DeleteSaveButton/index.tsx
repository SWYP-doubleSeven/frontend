import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./deleteSaveButton.module.scss";

const cn = classNames.bind(styles);
import { useAtom } from "jotai";

import { listEditState } from "@/lib/atoms/list";

export default function DeleteSaveButton() {
  const [isEdit, setIsEdit] = useAtom(listEditState);

  const handleDeleteClick = () => {
    setIsEdit(false);
  };

  return (
    <>
      <div className={cn("selected")}>{1}개 선택</div>
      <button className={cn("delete")} onClick={handleDeleteClick}>
        <Image
          src="/icons/ic-delete-state-on.svg"
          alt="삭제 아이콘"
          width={24}
          height={24}
        />
      </button>
    </>
  );
}
