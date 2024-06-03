import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import styles from "./ProductCard.module.css";
import { currencyFormatter } from "../../util/formatting";
import Button from "../UI/Button";
import CartContext from "../../store/CartContext";
const { product_image } = styles;
function ProductCard(props) {
  const { product } = props;
  const { id, image, title, price } = product;

  const cartProductContext = useContext(CartContext);
  function handleAddProductToCart() {
    cartProductContext.addItem(product);
  }

  return (
    <Card className="rounded-0 border-0">
      <Image
        src={["images", "products", image].join("/")}
        className={[product_image].join(" ")}
      />
      <div>
        <h3 className="text-center text-body fs-5 pt-3">{title}</h3>
        <span className="d-block text-center text-secondary">
          {currencyFormatter.format(price)}
        </span>
      </div>
      <div className="text-center">
        <Button onClick={handleAddProductToCart}>Add To Cart</Button>
      </div>
    </Card>
  );
}
export default ProductCard;
