// Home.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UzAbout from "./uzAbout";
import Footer from "../components/Footer";
import { FloatButton } from "antd";
import CarouselCom from "../components/Carousel";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center justify-center min-h-screen"
          >
            <div className="text-center">Loading...</div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="dark:bg-slate-900 bg-slate-100"
          >
            <section id="section1">
              <CarouselCom />
            </section>
            <section id="section2">
              <UzAbout />
            </section>
            <section id="section3">
              <Footer />
            </section>
            <FloatButton.BackTop />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
