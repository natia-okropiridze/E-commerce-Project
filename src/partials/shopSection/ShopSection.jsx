import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ProductCard from "../../components/productCard/ProductCard";
import styles from "./ShopSection.module.css";
const { vegetable_checkbox, fruit_checkbox } = styles;
function ShopSection({ products }) {
  const prePage = 6;
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = checkboxValues.length
    ? products.filter((product) => checkboxValues.includes(product.category))
    : products;

  const totalPages = Math.ceil(filteredProducts.length / prePage);

  const renderProducts = filteredProducts.slice(
    (currentPage - 1) * prePage,
    currentPage * prePage
  );

  useEffect(() => {
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [checkboxValues, products]);

  function handleCheckboxChange(event) {
    const { value, checked } = event.target;
    setCheckboxValues((prevValues) =>
      checked
        ? [...prevValues, value]
        : prevValues.filter((item) => item !== value)
    );
  }

  function goToPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <Container fluid className="py-5">
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              {renderProducts.map((product) => (
                <Col lg={4} md={6} className="pb-4" key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
            <Row>
              <Col className="d-flex justify-content-center py-3">
                {Array.from({ length: totalPages }, (_, index) => (
                  <Button
                    key={index}
                    onClick={() => goToPage(index + 1)}
                    disabled={currentPage === index + 1}
                    className="mx-1"
                  >
                    {index + 1}
                  </Button>
                ))}
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <Card className="rounded-0 border-0">
              <h3 className="fs-1">Categories</h3>
              <ul>
                <li className="d-flex gap-3">
                  <input
                    className={[fruit_checkbox].join(" ")}
                    type="checkbox"
                    value="fruit"
                    onChange={handleCheckboxChange}
                  />
                  <span className="fs-2">Fruits</span>
                </li>
                <li className="d-flex gap-3">
                  <input
                    className={[vegetable_checkbox].join(" ")}
                    type="checkbox"
                    value="vegetable"
                    onChange={handleCheckboxChange}
                  />
                  <span className="fs-2">Vegetables</span>
                </li>
              </ul>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ShopSection;
