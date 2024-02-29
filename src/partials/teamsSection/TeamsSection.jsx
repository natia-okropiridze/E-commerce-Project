import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TeamCard from "../../components/teamCard/TeamCard";
import styles from "./TeamsSection.module.css";
const { team_container, team_title } = styles;
function TeamsSection(props) {
  const { teams } = props;
  return (
    <Container fluid className={[team_container].join(" ")}>
      <Container>
        <h2 className={[team_title].join(" ")}>Our Team</h2>
        <Row>
          {teams.map((team) => (
            <Col key={crypto.randomUUID()}>
              <TeamCard team={team} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
export default TeamsSection;
