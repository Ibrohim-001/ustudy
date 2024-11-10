import { Button, Input } from "antd";
import { color } from "framer-motion";
import { style } from "framer-motion/client";
import { useTranslation } from "react-i18next";

// const onChange = (key) => {
//   console.log(key);
// };

const UzAbout = () => {
  const { t } = useTranslation();
  return (
    <div className="items-center justify-center dark:bg-slate-900 mt-[100px] text-black dark:text-white transition-all duration-300 ease-in-out flex gap-7">
      <div className="flex flex-col">
        <p className="text-4xl">{t("help")}</p>
      </div>
      <div className="bg-slate-300 p-[50px] rounded-2xl dark:bg-slate-700">
        <form className="flex flex-col gap-4">
          <p className="text-3xl">Kontaktlaringizni kiriting:</p>
          <Input
            placeholder="To'liq ismingizni kiriting"
            className=" text-white border-none"
          />
          <Input placeholder="Telefon raqamingizni kiriting" />
          <Button className="bg-green-500">Murojat</Button>
        </form>
      </div>
    </div>
  );
};

export default UzAbout;
