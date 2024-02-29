import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import styles from "./VegetablesSection.module.css";
const {
  vegetable,
  vegetable_banner_inner,
  vegetable_banner_content,
  vegetable_fruit_title,
  vegetable_fruit_subtitle,
  vegetable_fruit_col,
  vegetable_fruit_card,
  vegetable_title,
  vegetable_price,
} = styles;
function VegetablesSection(props) {
  const { vegetables, mainItemOrder, mainSectionTitles } = props;
  const [title, subtitle] = mainSectionTitles;
  const mainVegetable = vegetables[0];
  const otherVegetables = vegetables.slice(1);
  return (
    <Container fluid className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col
            md={6}
            style={{
              order: mainItemOrder,
            }}
          >
            <Card className="position-relative border-0">
              <Image src={mainVegetable.image} />
              <div className={[vegetable_banner_content].join(" ")}>
                <div className={[vegetable_banner_inner].join(" ")}>
                  <h3 className={[vegetable_fruit_title].join(" ")}>{title}</h3>
                  <h4 className={[vegetable_fruit_subtitle].join(" ")}>
                    {subtitle}
                  </h4>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={6}>
            <Row>
              {otherVegetables.map(({ id, title, image, price, discount }) => (
                <Col
                  xs={6}
                  key={id}
                  className={[vegetable_fruit_col].join(" ")}
                >
                  <Card
                    className={[vegetable_fruit_card, "py-2", "border-0"].join(
                      " "
                    )}
                  >
                    <Image src={image} className={[vegetable].join(" ")} />
                    <div className="text-center">
                      <h3 className={[vegetable_title].join(" ")}>{title}</h3>
                      <Row>
                        <Col>
                          <span
                            className={
                              discount
                                ? [
                                    vegetable_price,
                                    "text-decoration-line-through",
                                    "px-2",
                                    "opacity-50",
                                  ].join(" ")
                                : [vegetable_price].join(" ")
                            }
                          >
                            ${price}
                          </span>
                          {discount ? (
                            <span>{price - (discount * price) / 100}$</span>
                          ) : null}
                        </Col>
                      </Row>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default VegetablesSection;
