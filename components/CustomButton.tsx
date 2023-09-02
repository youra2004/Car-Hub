"use client";
import { ICustomButtonProps } from "@/types";
import Image from "next/image";

const CustomButton = ({
  title,
  handleClick,
  containerStyles,
  textStyles,
  rightIcon,
}: ICustomButtonProps) => (
  <button
    type="button"
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1 ${textStyles}`}>{title}</span>
    {rightIcon && (
      <div className="relative w-6 h-6">
        <Image
          src={rightIcon}
          alt="arrow_left"
          fill
          className="object-contain"
        />
      </div>
    )}
  </button>
);

export default CustomButton;
