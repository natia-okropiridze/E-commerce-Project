import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import styles from "./ProductCard.module.css";
const { product_image } = styles;
function ProductCard(props) {
  const { product } = props;
  const { id, image, title, price } = product;
  return (
    <Card className="rounded-0 border-0">
      <Image
        src={["images", "products", image].join("/")}
        className={[product_image].join(" ")}
      />
      <div>
        <h3 className="text-center text-body fs-5 pt-3">{title}</h3>
        <span className="d-block text-center text-secondary">${price}</span>
      </div>
    </Card>
  );
}
export default ProductCard;
