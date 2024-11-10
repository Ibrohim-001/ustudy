import React from "react";
import { Carousel } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const CarouselCom = () => {
  const { t } = useTranslation();

  return (
    <Carousel arrows autoplay>
      <div className="flex">
        <div className="h-[100vh] flex gap-[150px] bg-slate-50 dark:bg-slate-900">
          <div className="ml-[100px]">
            <h1 className="text-6xl font-bold mb-16 mt-[150px] text-black dark:text-white">
              <span className="text-blue-500">{t("frontend")}</span>{" "}
              {t("study_with")} <br /> Ustudy <br /> {t("learn")}
            </h1>
            <Link
              to={"/frontend"}
              className="text-xl bg-slate-900 hover:bg-slate-800 dark:bg-[#fff] dark:hover:bg-slate-300 text-white dark:text-black w-[255px] h-[70px] rounded-[12px] py-4 px-6"
            >
              {t("join")}
            </Link>
          </div>
          <div className="mt-[150px]">
            <img
              className="w-[570px] h-[325px] rounded-[30px]"
              src="/public/img/Frontend.jpg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="h-[100vh] bg-black flex gap-[350px] bg-slate-50 dark:bg-slate-900">
          <div className="ml-[100px]">
            <h1 className="text-6xl font-bold mb-16 mt-[150px] text-black dark:text-white">
              <span className="text-purple-500">{t("cybersecurity")}</span>{" "}
              <br /> {t("study_with")} <br /> Ustudy <br /> {t("learn")}
            </h1>
            <Link
              to={"/cybersecurity"}
              className="text-xl bg-slate-900 hover:bg-slate-800 dark:bg-[#fff] dark:hover:bg-slate-300 text-white dark:text-black w-[255px] h-[70px] rounded-[12px] py-4 px-6"
            >
              {t("join")}
            </Link>
          </div>
          <div className="mt-[150px]">
            <img
              className="w-[570px] h-[325px] object-cover rounded-[30px]"
              src="https://ustudy.uz/storage/photos/shares/222%20(1).png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="h-[100vh] bg-black flex gap-[350px] bg-slate-50 dark:bg-slate-900">
          <div className="ml-[100px]">
            <h1 className="text-6xl font-bold mb-16 mt-[150px] text-black dark:text-white">
              <span className="text-yellow-500">{t("motion_design")}</span>{" "}
              <br /> {t("study_with")} <br /> Ustudy <br /> {t("learn")}
            </h1>
            <Link
              to={"/motion_design"}
              className="text-xl bg-slate-900 hover:bg-slate-800 dark:bg-[#fff] dark:hover:bg-slate-300 text-white dark:text-black w-[255px] h-[70px] rounded-[12px] py-4 px-6"
            >
              {t("join")}
            </Link>
          </div>
          <div className="mt-[150px]">
            <img
              className="w-[570px] h-[325px] bg-cover object-cover rounded-[30px]"
              src="/public/img/Motion.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="h-[100vh] bg-black flex gap-[350px] bg-slate-50 dark:bg-slate-900">
          <div className="ml-[100px]">
            <h1 className="text-6xl font-bold mb-16 mt-[150px] text-black dark:text-white">
              <span className="text-cyan-400">{t("graphic_design")}</span>{" "}
              <br /> {t("study_with")} <br /> Ustudy <br /> {t("learn")}
            </h1>
            <Link
              to={"/graphic_design"}
              className="text-xl bg-slate-900 hover:bg-slate-800 dark:bg-[#fff] dark:hover:bg-slate-300 text-white dark:text-black w-[255px] h-[70px] rounded-[12px] py-4 px-6"
            >
              {t("join")}
            </Link>
          </div>
          <div className="mt-[150px]">
            <img
              className="w-[570px] h-[325px] bg-cover object-cover rounded-[30px]"
              src="/public/img/Graphic.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="h-[100vh] bg-black flex gap-[350px] bg-slate-50 dark:bg-slate-900">
          <div className="ml-[100px]">
            <h1 className="text-6xl font-bold mb-16 mt-[150px] text-black dark:text-white">
              <span className="text-indigo-700">{t("backend")}</span> <br />{" "}
              {t("study_with")} <br /> Ustudy <br /> {t("learn")}
            </h1>
            <Link
              to={"/backend"}
              className="text-xl bg-slate-900 hover:bg-slate-800 dark:bg-[#fff] dark:hover:bg-slate-300 text-white dark:text-black w-[255px] h-[70px] rounded-[12px] py-4 px-6"
            >
              {t("join")}
            </Link>
          </div>
          <div className="mt-[150px]">
            <img
              className="w-[570px] h-[325px] bg-cover object-cover rounded-[30px]"
              src="/public/img/5.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default CarouselCom;
