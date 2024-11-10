import React, { useState, useEffect } from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import English from '../Language/English';


const RuNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('O\'zb'); // По умолчанию язык - Узбекский

  // Проверка и установка темы при загрузке
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }

    // Установка языка из localStorage
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Переключение темы
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // Переключение языка
  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang); // Сохранение выбранного языка
  };

  return (
    <nav className=" top-0 left-0 right-0 bg-[#0b0d44] dark:bg-gray-800 text-white gap-8 py-6 px-10 flex justify-between items-center z-50 shadow-md transition-all duration-300">
      <div className="flex items-center">
        {/* Логотип и текст */}
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
          <span className="w-[5px] h-[30px] mx-5 bg-white"></span>
          <span className="uppercase font-normal text-white">
            Ustudy
            <br />
            <span className="text-sm">by Uzinfocom</span>
          </span>
        </ScrollLink>
      </div>

      {/* Ссылки на секции */}
      <ul className="flex gap-12 text-white font-bold list-none">
        <li className="uppercase">
          <ScrollLink
            to="section1"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-[#40d09d] transition"
          >
            Курсы
          </ScrollLink>
        </li>
        <li className="uppercase">
          <ScrollLink
            to="section2"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-[#40d09d] transition"
          >
            Консультация    
          </ScrollLink>
        </li>
        <li className="uppercase">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer text-blue-500 hover:text-[#40d09d] transition"
          >
            Контакты

          </ScrollLink>
        </li>
      </ul>

      {/* Переключатель языка */}
      <div className="text-sm font-xl text-zinc-100 flex gap-4">
      <Link to='/'className={`hover:text-[#40d09d] transition ${language === 'Rus' ? 'font-bold' : ''}`} >
          O'zb
        </Link>
        <Link to='/ru'className={`hover:text-[#40d09d] transition ${language === 'Rus' ? 'font-bold' : ''}`} >
          Rus
        </Link>

        <Link to='/en'className={`hover:text-[#40d09d] transition ${language === 'Rus' ? 'font-bold' : ''}`} >
          Eng
        </Link>
      </div>

      {/* Кнопка переключения темы */}
      <button
        onClick={toggleTheme}
        className="ml-4 py-2 px-6 bg-blue-500 dark:bg-gray-600 text-white rounded-full hover:bg-blue-700 dark:hover:bg-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-gray-500"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
};

export default RuNavbar;
