import TeamsSection from "../partials/teamsSection/TeamsSection";
import database from "../../database/database";
function AboutUsPage() {
  return (
    <>
      <TeamsSection teams={database.teams} />
    </>
  );
}
export default AboutUsPage;
