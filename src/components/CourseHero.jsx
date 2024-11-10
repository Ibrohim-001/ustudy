import { useTranslation } from "react-i18next";
import Img from "../../public/img/Frontend.jpg";

function CoureHero({ title, desc, course }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="dark:bg-slate-900 text-white h-100vh">
        <div className="max-w-[1111px] mx-auto dark:bg-slate-900 text-white">
          <h1 className="text-4xl text-center pt-24 mb-4 font-bold text-black dark:text-white">
            {t(course)} {t(title)}
          </h1>
          <p className="text-xl text-center text-black dark:text-white">
            {t(desc)}
          </p>
        </div>
      </div>
    </>
  );
}

export default CoureHero;
