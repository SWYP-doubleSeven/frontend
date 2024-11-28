// components/common/Button/Button.tsx
import classNames from "classnames/bind";

import styles from "./button.module.scss";

const cn = classNames.bind(styles);

import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "large" | "medium";
  width?: number;
  className?: string;
}

export const Button = ({
  children,
  variant = "large",
  width,
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn("button", variant, className)}
      style={{ width: width ? `${width}px` : "100%" }}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
