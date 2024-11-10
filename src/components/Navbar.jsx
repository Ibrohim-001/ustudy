// Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }

    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <nav className="top-0 left-0 bg-slate-50 right-0 bg-[#fff] dark:bg-slate-900 mb-0 text-white gap-8 py-6 px-10 flex justify-between items-center z-50 shadow-mb drop-shadow-2xl transition-all duration-300">
      <div className="flex items-center">
        <ScrollLink
          to="section1"
          smooth={true}
          duration={500}
          className="cursor-pointer flex items-center"
        >
          <img
            src="https://ustudy.uz/img/logo.svg"
            alt="U Study Logo"
            className="w-[50px] h-[50px]"
          />
          <span className="w-[5px] h-[30px] mx-5 bg-[#3b82f6]"></span>
          <span className="uppercase font-normal text-[#3b82f6]">
            Ustudy
            <br />
            <span className="text-sm text-[#3b82f6]">by Uzinfocom</span>
          </span>
        </ScrollLink>
      </div>

      {/* Section Links */}
      <ul className="flex gap-12 text-white font-bold list-none">
        <Link
          to={"/"}
          className="uppercase relative group cursor-pointer text-blue-500 hover:text-[#40d09d] transition "
        >
          {t("mainPage")}
          <span className="block h-[3px] bg-[#40d09d] absolute bottom-[-5px] left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
        </Link>
        {["courses", "advice", "contact"].map((key, index) => (
          <li key={index} className="uppercase relative group">
            <ScrollLink
              to={`section${index + 1}`}
              smooth={true}
              duration={500}
              className="cursor-pointer text-blue-500 hover:text-[#40d09d] transition"
            >
              {t(key)}
            </ScrollLink>
            <span className="block h-[3px] bg-[#40d09d] absolute bottom-[-5px] left-0 right-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
          </li>
        ))}
      </ul>

      {/* Language Switcher */}
      <div className="text-sm font-xl text-white flex gap-4">
        {["uz", "ru", "en"].map((lang) => (
          <button
            key={lang}
            onClick={() => changeLanguage(lang)}
            className={`uppercase px-2 py-1 ${
              i18n.language === lang
                ? "font-bold text-[#40d09d]"
                : "text-blue-500"
            }`}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Theme Toggle Button */}
      <button onClick={toggleTheme}>
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <g fill="" stroke="rgb(59 130 246)" strokeWidth="2.5">
              <circle cx="12" cy="12" r="4" strokeLinejoin="round" />
              <path
                strokeLinecap="round"
                fill="Currentcolor"
                d="M20 12h1M3 12h1m8 8v1m0-18v1m5.657 13.657l.707.707M5.636 5.636l.707.707m0 11.314l-.707.707M18.364 5.636l-.707.707"
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="rgb(59 130 246)"
              d="m20.996 11.712l1.249-.04a1.25 1.25 0 0 0-1.605-1.159zm-8.707-8.707l1.198.355a1.25 1.25 0 0 0-1.16-1.605zm8.35 7.508A5.8 5.8 0 0 1 19 10.75v2.5a8.3 8.3 0 0 0 2.351-.34zM19 10.75A5.75 5.75 0 0 1 13.25 5h-2.5A8.25 8.25 0 0 0 19 13.25zM13.25 5c0-.572.083-1.122.237-1.64l-2.397-.71A8.3 8.3 0 0 0 10.75 5zM12 4.25q.124 0 .25.004l.078-2.499A10 10 0 0 0 12 1.75zM4.25 12A7.75 7.75 0 0 1 12 4.25v-2.5C6.34 1.75 1.75 6.34 1.75 12zM12 19.75A7.75 7.75 0 0 1 4.25 12h-2.5c0 5.66 4.59 10.25 10.25 10.25zM19.75 12A7.75 7.75 0 0 1 12 19.75v2.5c5.66 0 10.25-4.59 10.25-10.25zm-.004-.25q.004.126.004.25h2.5q0-.165-.005-.328z"
            />
          </svg>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
