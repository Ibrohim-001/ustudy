import { useTranslation } from "react-i18next";
import CoureHero from "../components/CourseHero";

function Frontend() {
  const { t } = useTranslation();
  return (
    <>
      <CoureHero
        title={"development"}
        desc={"frontent"}
        course={t("Frontend")}
      />
    </>
  );
}

export default Frontend;
