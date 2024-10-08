import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { Link } from "react-router-dom";
export default function DropDown({ title, tabs = [] }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="flex  items-center gap-1 font-[600]">
          {title}
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          {tabs.map((tab , idx) => {
            return (
              <MenuItem  key = {tab?.title}>
                <Link
                  href= {tab?.href}
                  className="font-[600] block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 "
                >
                  {tab?.title}
                </Link>
              </MenuItem>
            );
          })}
         
        </div>
       
      </MenuItems>
    </Menu>
  );
}
