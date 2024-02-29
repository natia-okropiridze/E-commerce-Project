import Cart from "../../components/cart/Cart";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import herber_logo from "/images/herber_logo.png";
import Image from "react-bootstrap/Image";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import SidebarButton from "../../components/sidebarButton/SidebarButton";
const { header_container, header_items, header_item, active } = styles;
function Header(props) {
  const { setToggle } = props;
  return (
    <Container fluid className={[header_container].join(" ")}>
      <Container>
        <Row className="align-items-center">
          <Col lg={2}>
            <Card className="border-0">
              <Image src={herber_logo} />
            </Card>
          </Col>
          <Col lg={8}>
            <Card className="border-0">
              <ListGroup className={[header_items].join(" ")}>
                <ListGroup.Item className={[header_item, active].join(" ")}>
                  <Link
                    className="text-decoration-none text-secondary fw-bold"
                    to="/"
                  >
                    HOME
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className={[header_item].join(" ")}>
                  <Link
                    className="text-decoration-none text-secondary fw-bold"
                    to="/about"
                  >
                    ABOUT US
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className={[header_item].join(" ")}>
                  <Link
                    className="text-decoration-none text-secondary fw-bold"
                    to="/shop"
                  >
                    SHOP
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className={[header_item].join(" ")}>
                  <Link
                    className="text-decoration-none text-secondary fw-bold"
                    to="/blog"
                  >
                    BLOG
                  </Link>
                </ListGroup.Item>
                <ListGroup.Item className={[header_item].join(" ")}>
                  <Link
                    className="text-decoration-none text-secondary fw-bold"
                    to="/contact"
                  >
                    CONTACT US
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col lg={2}>
            <Card className="border-0">
              <div className="d-flex gap-5">
                <Cart />
                <SidebarButton setToggle={setToggle} />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Header;
