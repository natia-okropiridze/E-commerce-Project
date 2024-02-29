import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ProductCard from "../../components/productCard/ProductCard";

function ShopSection({ products }) {
  const prePage = 6;
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setDisplayProducts(products);
  }, [products]);

  const filteredProducts = checkboxValues.length
    ? products.filter((product) => checkboxValues.includes(product.category))
    : products;

  const totalPages = Math.ceil(filteredProducts.length / prePage);

  const renderProducts = filteredProducts.slice(
    (currentPage - 1) * prePage,
    currentPage * prePage
  );

  function handleCheckboxChange(event) {
    const { value, checked } = event.target;
    if (checked) {
      setCheckboxValues((prevValues) => [...prevValues, value]);
    } else {
      setCheckboxValues((prevValues) =>
        prevValues.filter((item) => item !== value)
      );
    }
  }

  return (
    <Container fluid className="py-5">
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              {renderProducts.map((product) => (
                <Col lg={4} md={6} key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col lg={4}>
            <Card className="rounded-0 border-0">
              <h3>Categories</h3>
              <ul>
                <li className="d-flex gap-3">
                  <input
                    type="checkbox"
                    value="fruit"
                    onChange={handleCheckboxChange}
                  />
                  <span>fruits</span>
                </li>
                <li className="d-flex gap-3">
                  <input
                    type="checkbox"
                    value="vegetable"
                    onChange={handleCheckboxChange}
                  />
                  <span>vegetables</span>
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
