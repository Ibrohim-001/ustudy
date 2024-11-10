import { Tabs } from "antd";
import { color } from "framer-motion";
import { style } from "framer-motion/client";

// const onChange = (key) => {
//   console.log(key);
// };

const items = [
  {
    key: "1",
    label: "Tab 1",
    children: "Malakali mentorlar bilan masterklasslar",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "<h1>Hello</h1>",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
    style: {
      color: "black",
    },
  },
];
const UzAbout = () => {
  return (
    <div className=" items-center justify-center dark:bg-slate-900 text-black dark:text-white transition-all duration-300 ease-in-out">
      <Tabs
        defaultActiveKey="1"
        className="text-black dark:text-white"
        items={items}
      />
      ;
    </div>
  );
};

export default UzAbout;
