import Image from "next/image";
import React from "react";
import APP from "../lib/constants";

export default function Logo({ size = 52, alwaysDetail = false }) {
  return (
    <div className="font-bold flex flex-row justify-start items-center">
      {/** Light Logo */}
      <Image
        width={size}
        height={size}
        src={"/favicon.png"}
        alt={"Logo"}
        className="dark:hidden me-3"
      />
      {/** Dark Logo */}
      <Image
        width={size}
        height={size}
        src={"/favicon-dark.png"}
        alt={"Logo"}
        className="dark:block hidden me-3"
      />
      {alwaysDetail ? (
        <span className="text-xl">{APP.name}</span>
      ) : (
        <>
          <span className="hidden md:block text-2xl">{APP.name}</span>
          <span className="md:hidden text-2xl">{APP.nameShort}</span>
        </>
      )}
    </div>
  );
}
