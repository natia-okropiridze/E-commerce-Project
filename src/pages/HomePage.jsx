import SliderSection from "../partials/sliderSection/SliderSection";
import VegetablesSection from "../partials/vegetablesSection/VegetablesSection";
import GalleriesSection from "../partials/galleriesSection/GalleriesSection";
import PartnersSection from "../partials/partnersSection/PartnersSection";
import TeamsSection from "../partials/teamsSection/TeamsSection";
import database from "../../database/database";

function HomePage() {
  return (
    <>
      <SliderSection />
      <VegetablesSection
        vegetables={database.vegetables}
        mainItemOrder={0}
        mainSectionTitles={["organic", "vegetables"]}
      />
      <VegetablesSection
        vegetables={database.fruits}
        mainItemOrder={1}
        mainSectionTitles={["fresh", "fruits"]}
      />
      <GalleriesSection galleries={database.galleries} />
      <PartnersSection partners={database.partners} />
      <TeamsSection teams={database.teams} />
    </>
  );
}
export default HomePage;
