import React from "react";

interface IconProps {
  size?: number;
  name:
    | string
    | "content_copy"
    | "back_arrow_ios"
    | "chevron_right"
    | "volume_up";
  color?: string;
  className?: string;
}

export default function Icon(props: IconProps) {
  return (
    <span
      className={`material-icons ${props.className}`}
      style={{
        fontSize: props.size ? `${props.size}px` : "inherit",
        color: props.color,
      }}
    >
      {props.name}
    </span>
  );
}
