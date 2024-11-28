import classNames from "classnames/bind";
import Image from "next/image";
import { useState } from "react";

import styles from "./checkBox.module.scss";

const cn = classNames.bind(styles);

interface CheckBoxProps {
  onChange?: (checked: boolean) => void;
  defaultChecked?: boolean;
}

export default function CheckBox({
  onChange,
  defaultChecked = false,
}: CheckBoxProps) {
  const [isChecked, setIsChecked] = useState(defaultChecked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <label className={cn("checkboxWrap")}>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      <Image
        src={`/icons/ic-check-state-${isChecked ? "on" : "off"}.svg`}
        alt="체크박스"
        width={24}
        height={24}
      />
    </label>
  );
}
