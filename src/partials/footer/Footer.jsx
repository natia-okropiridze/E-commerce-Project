import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import herber_logo from "/images/herber_logo.png";
import footer_gallery_1 from "/images/footerGallery/footer_gallery_1.jpg";
import footer_gallery_2 from "/images/footerGallery/footer_gallery_2.jpg";
import footer_gallery_3 from "/images/footerGallery/footer_gallery_3.jpg";
import footer_gallery_4 from "/images/footerGallery/footer_gallery_4.jpg";
import styles from "./Footer.module.css";
const {
  footer_container,
  footer_card,
  footer_herber_logo,
  footer_herber_text,
  footer_herber_title,
  footer_input,
  footer_button,
  footer_gallery_inner,
} = styles;
function Footer() {
  return (
    <Container fluid className={[footer_container].join(" ")}>
      <Container>
        <Row className="justify-content-between align-content-center">
          <Col md={3} className="p-0">
            <Card className={[footer_card].join(" ")}>
              <Image
                src={herber_logo}
                className={[footer_herber_logo].join(" ")}
              />
              <Card.Text className={[footer_herber_text].join(" ")}>
                Herber is an organic farm located in California. We offer
                healthy foods and products to our clients.
              </Card.Text>
              <div className="d-flex gap-3 align-items-center">
                <span>
                  <i className="bi bi-telephone-fill text-secondary"></i>
                </span>
                <span className="text-light">+1 323-913-4688</span>
              </div>
              <div className="d-flex gap-3 align-items-center py-3">
                <span>
                  <i className="bi bi-clock text-secondary"></i>
                </span>
                <span className="text-light">Mon-Sat: 07:00AM - 05:00PM</span>
              </div>
              <div className="d-flex gap-3">
                <span>
                  <i className="bi bi-pin-map text-secondary"></i>
                </span>
                <span className="text-light">
                  4730 Crystal Springs Dr, Los Angeles, CA 90027
                </span>
              </div>
            </Card>
          </Col>
          <Col md={4} className={[footer_card].join(" ")}>
            <Card className={[footer_card].join(" ")}>
              <Card.Title className={[footer_herber_title].join(" ")}>
                Newsletter
              </Card.Title>
              <Card.Text className={[footer_herber_text].join(" ")}>
                Join our email newsletter for news and tips.
              </Card.Text>
              <form>
                <input
                  type="text"
                  placeholder="Enter Your E-mail"
                  className={[footer_input].join(" ")}
                ></input>
                <button type="submit" className={[footer_button].join(" ")}>
                  SUBSCRIBE
                </button>
              </form>
            </Card>
          </Col>
          <Col md={3} className="p-0">
            <Card className={[footer_card].join(" ")}>
              <h3 className={[footer_herber_title].join(" ")}>Gallery</h3>
              <Row>
                <Col>
                  <Card className={[footer_card].join(" ")}>
                    <Image src={footer_gallery_1} />
                    <div className={[footer_gallery_inner].join(" ")}>
                      <span>
                        <i className="bi bi-search-heart"></i>
                      </span>
                    </div>
                  </Card>
                </Col>
                <Col>
                  <Card className={[footer_card].join(" ")}>
                    <Image src={footer_gallery_2} />
                    <div className={[footer_gallery_inner].join(" ")}>
                      <span>
                        <i className="bi bi-search-heart"></i>
                      </span>
                    </div>
                  </Card>
                </Col>
                <Col>
                  <Card className={[footer_card].join(" ")}>
                    <Image src={footer_gallery_3} />
                    <div className={[footer_gallery_inner].join(" ")}>
                      <span>
                        <i className="bi bi-search-heart"></i>
                      </span>
                    </div>
                  </Card>
                </Col>
                <Col>
                  <Card className={[footer_card].join(" ")}>
                    <Image src={footer_gallery_4} />
                    <div className={[footer_gallery_inner].join(" ")}>
                      <span>
                        <i className="bi bi-search-heart"></i>
                      </span>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Footer;
