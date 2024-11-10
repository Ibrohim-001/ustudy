import CoureHero from "../components/CourseHero";
import UzAbout from "./uzAbout";
function ciberSecurityPage() {
  return (
    <>
      <CoureHero
        title={"cybersecurity"}
        desc={"ciber"}
        course={"cybersecurity"}
        img={"https://ustudy.uz/storage/photos/shares/222%20(1).png"}
      />
      <UzAbout />
      <section id="section3" className="mt-24">
        <Footer />
      </section>
    </>
  );
}

export default ciberSecurityPage;
