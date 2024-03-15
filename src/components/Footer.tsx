import React from "react";
import Link from "next/link";
import { ReactNode } from "react";

export default function Footer({
  logo,
  children,
  appName,
  description,
  socialMedia,
}: {
  logo?: ReactNode;
  children: ReactNode;
  appName?: string;
  description?: ReactNode;
  socialMedia?: ReactNode;
}) {
  return (
    <footer className="">
      <div className="mx-auto w-full max-w-screen-xl p-4 pb-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href={"/"}>{logo}</Link>
            <div className="py-3 ">{description}</div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {children}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <Link href={"/"}>{appName}</Link>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {socialMedia}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}) {
  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title}
      </h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium text-sm">
        {children}
      </ul>
    </div>
  );
}
function FooterItem({
  href,
  children,
}: {
  href: string;
  children?: ReactNode;
}) {
  return (
    <li className="mb-3">
      <Link className="hover:underline" href={href}>
        {children}
      </Link>
    </li>
  );
}

Footer.Section = FooterSection;
Footer.Item = FooterItem;
