import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import styles from "./PartnersSection.module.css";
const { partners_container, partners_card, partners_title } = styles;
function PartnersSection(props) {
  const { partners } = props;
  return (
    <Container fluid className={[partners_container].join(" ")}>
      <Container>
        <h2 className={[partners_title].join(" ")}>Our Partners</h2>
        <Row>
          {partners.map(({ id, image }) => (
            <Col lg={3} key={id}>
              <Card className={[partners_card].join(" ")}>
                <Image src={image} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
export default PartnersSection;
