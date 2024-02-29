import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./Galleries.module.css";
import GalleryCard from "../../components/galleryCard/GalleryCard";
const { gallery_title } = styles;
function GalleriesSection(props) {
  const { galleries } = props;

  return (
    <Container fluid>
      <Container>
        <h2 className={[gallery_title].join(" ")}>Our Gallery</h2>
        <Row>
          {galleries.map((gallery) => (
            <Col md={4} key={crypto.randomUUID()} className="m-0">
              <GalleryCard gallery={gallery} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
export default GalleriesSection;
