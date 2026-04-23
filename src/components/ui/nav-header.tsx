"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface NavHeaderProps {
  tabs?: Array<{
    label: string;
    href: string;
  }>;
}

function NavHeader({ tabs }: NavHeaderProps) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const defaultTabs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "About", href: "/about" },
  ];

  const navTabs = tabs || defaultTabs;

  return (
    <ul
      className="relative mx-auto flex w-fit p-1.5"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      {navTabs.map((tab) => (
        <Tab key={tab.href} setPosition={setPosition} href={tab.href}>
          {tab.label}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  href,
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="relative z-10 block cursor-pointer px-4 py-2 text-sm font-medium uppercase text-white mix-blend-lighten md:px-6 md:py-3 md:text-base font-montserrat transition-colors hover:text-gray-100"
    >
      <Link to={href} className="block">
        {children}
      </Link>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="absolute z-0 h-9 rounded-full bg-gradient-to-r from-white to-gray-300 md:h-12 shadow-lg shadow-white/40"
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default NavHeader;
