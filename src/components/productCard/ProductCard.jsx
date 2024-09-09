import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import styles from "./ProductCard.module.css";
import { currencyFormatter } from "../../util/formatting";
import Button from "../UI/Button";
import CartContext from "../../store/CartContext";
const { product_image, shop_price } = styles;
function ProductCard(props) {
  const { product } = props;
  const { id, image, title, price, discount } = product;

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
      <div className="d-block text-center g-4 pb-2">
        <h3 className="text-center text-body fs-5 pt-3">{title}</h3>
        {/* <span className="d-block text-center text-secondary">
          {currencyFormatter.format(price)}
        </span> */}
        <span
          className={
            discount
              ? [
                  shop_price,
                  "text-decoration-line-through",
                  "px-2",
                  "opacity-50",
                ].join(" ")
              : [shop_price].join(" ")
          }
        >
          ${price}
          {/* {currencyFormatter.format(price)} */}
        </span>
        {discount ? <span>{price - (discount * price) / 100}$</span> : null}
      </div>
      <div className="text-center">
        <Button onClick={handleAddProductToCart}>Add To Cart</Button>
      </div>
    </Card>
  );
}
export default ProductCard;
