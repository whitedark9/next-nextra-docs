import Link from "next/link";
import React from "react";
import Button from "./Button";
import Icon from "./Icon";

export default function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href}>
      <Button
        className="ps-5 text-lg"
        right={<Icon name={"chevron_right"} size={30} />}
      >
        {children}
      </Button>
    </Link>
  );
}
