import { Input, Tabs } from "antd";
import { color } from "framer-motion";
import { style } from "framer-motion/client";

// const onChange = (key) => {
//   console.log(key);
// };

const UzAbout = () => {
  return (
    <div className="items-center justify-center dark:bg-slate-900 mt-10 text-black dark:text-white transition-all duration-300 ease-in-out flex gap-7">
      <div className="flex flex-col">
        <h2 className="text-4xl">Biz sizga tanlashda yordam beramiz</h2>
        <p>Biz sizga to'g'ri kursni tanlashda yordam beramiz!</p>
      </div>
      <div className="bg-slate-300 p-[50px] rounded-2xl dark:bg-slate-700">
        <form className="flex flex-col gap-4">
          <p className="text-3xl">Kontaktlaringizni kiriting:</p>
          <Input
            placeholder="To'liq ismingizni kiriting"
            className=" text-white border-none"
          />
          <Input placeholder="Telefon raqamingizni kiriting" />
        </form>
      </div>
    </div>
  );
};

export default UzAbout;
