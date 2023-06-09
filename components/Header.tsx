"use client";

import Link from "./CustomLink";
import { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import ThemeSwitch from "./ThemeSwitcher";
import Logo from "./Logo";

function useIsScrollTop() {
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    function onScroll() {
      setIsTop(window.scrollY <= 0);
    }
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return isTop;
}

function useToggleMenu() {
  const [menuShow, setMenuShow] = useState(false);
  const onMenuToggle = () => {
    setMenuShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };
  return [menuShow, onMenuToggle] as const;
}

export default function Header() {
  const [menuShow, onMenuToggle] = useToggleMenu();
  const isTop = useIsScrollTop();

  return (
    <>
      <header
        className={`w-full sticky z-20 top-0 flex items-center justify-between py-4  ${
          isTop
            ? "border-none"
            : "border-b border-ctp-overlay0 dark:border-ctp-mauve"
        } bg-ctp-base dark:bg-ctp-base backdrop-filter backdrop-saturate-150 backdrop-blur-lg`}
      >
        <nav className="flex items-center justify-between w-full max-w-2xl px-4 mx-auto sm:px-6 sm:py-2 xl:max-w-3xl xl:px-0">
          <div className="flex items-center text-ctp-black leading-5 dark:text-ctp-white">
            <div className="hidden sm:block sm:space-x-8">
              <Logo />
            </div>
            <div className="flex items-center sm:hidden">
              <MenuButton onClick={onMenuToggle} isOpened={menuShow} />
            </div>
          </div>
          <ThemeSwitch />
        </nav>
      </header>
      {/* Mobile side menu */}
      <div
        className={`sm:hidden fixed w-full h-screen right-0 bg-ctp-base dark:bg-ctp-base z-20 transform ease-in-out duration-500 ${
          menuShow ? "translate-x-0" : " -translate-x-full"
        } backdrop-filter bg-opacity-30 dark:bg-opacity-30 backdrop-saturate-150 backdrop-blur-lg firefox:bg-opacity-100 dark:firefox:bg-opacity-100`}
      >
        <nav className="h-full mt-8 space-y-8">
          <div className="px-12">
            <Logo />
          </div>
        </nav>
      </div>
    </>
  );
}
