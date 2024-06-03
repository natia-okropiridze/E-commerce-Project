import { useContext } from "react";
import Modal from "./Modal";
import CartContext from "../../store/CartContext";
import { currencyFormatter } from "../../util/formatting";
import Button from "./Button";
import UserProgressContext from "../../store/UserProgressContext";
import CartItem from "./CartItem";

function Cart() {
  const cartProductContext = useContext(CartContext);
  const userProgressContext = useContext(UserProgressContext);
  const cartTotal = cartProductContext.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
  function handleCloseCart() {
    userProgressContext.hideCart();
  }

  return (
    <Modal
      className="cart"
      open={userProgressContext.progress === "cart"}
      onClose={userProgressContext.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartProductContext.items.map((item) => (
          <CartItem
            key={item.id}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartProductContext.addItem(item)}
            onDecrease={() => cartProductContext.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseCart}>Close</Button>
      </p>
    </Modal>
  );
}
export default Cart;
