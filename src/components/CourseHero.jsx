import { useTranslation } from "react-i18next";

function CoureHero({ title, desc, course, img }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="dark:bg-slate-900 text-white mb-[100px]">
        <div className="max-w-[1111px] mx-auto dark:bg-slate-900 text-white">
          <h1 className="text-4xl text-left pt-24 mb-4 font-bold text-black dark:text-white">
            {t(course)} {t(title)}
          </h1>
          <p className="text-xl text-left text-black dark:text-white">
            {t(desc)}
          </p>
          <div className="flex text-black gap-6 justify-between mt-24 dark:text-white">
            <img src={img} alt="" className="w-[350px] mt-24" />
            <div className="flex flex-col gap-6 mt-24 font-bold">
              <p className="text-4xl">{t("About_course")}:</p>
              <p>{t(desc)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoureHero;
