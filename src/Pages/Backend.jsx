import CoureHero from "../components/CourseHero";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import UzAbout from "./uzAbout";
import Py from "../assets/pythonImage.jpg";
import Vazifalarimiz from "../components/Vazifa";

function Backend() {
  const { t } = useTranslation();
  return (
    <>
      <CoureHero
        title={"development"}
        desc={"backent"}
        course={"Back-end"}
        img={Py}
      />
      <UzAbout />
      <Vazifalarimiz />
      <section id="section3" className="mt-24">
        <Footer />
      </section>
    </>
  );
}

export default Backend;
