import React from "react";
// import { ChevronRightIcon } from "@heroicons/react/10/outline";
import styles from "./footer.module.scss";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import classNames from "classnames";
export default function Footerfeature({ title, features = [] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold leading-6  xl:text-2xl">{title}</h3>
      <ul role="list" className="mt-2 space-y-1">
        {features.map((item) => (
          <>
            <li
              key={item.name}
              className={classNames({
                [styles.footer_linkes]: true,

                " flex items-center justify-start gap-2 border-b   ": true,
              })}
            >
              <ChevronRightIcon className="-mr-1 h-4 w-4 text-gray-600" />
              <a
                href={item.href}
                className="text-[13px] leading-6 text-[#000] font-[500] "
              >
                {item.name}
              </a>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
