import CoureHero from "../components/CourseHero";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import UzAbout from "./uzAbout";

function Backend() {
  const { t } = useTranslation();
  return (
    <>
      <CoureHero title={"development"} desc={"backent"} course={"Back-end"} />
      {/* <section id="section3">
        <Footer />
      </section> */}
      <UzAbout />
    </>
  );
}

export default Backend;
