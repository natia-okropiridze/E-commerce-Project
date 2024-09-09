// import { createContext, useReducer } from "react";
// const CartContext = createContext({
//   items: [],
//   addItem: (item) => {},
//   removeItem: (id) => {},
//   clearCart: () => {},
// });
// function cartReducer(state, action) {
//   if (action.type === "ADD_ITEM") {
//     // ...update the state to add a mean item
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.item.id
//     );
//     const updatedItems = [...state.items];
//     if (existingCartItemIndex > -1) {
//       const existingItem = state.items[existingCartItemIndex];
//       const updatedItem = {
//         ...existingItem,
//         quantity: existingItem.quantity + 1,
//       };
//       updatedItems[existingCartItemIndex] = updatedItem;
//     } else {
//       updatedItems.push({ ...action.item, quantity: 1 });
//     }
//     return { ...state, items: updatedItems };
//   }
//   if (action.type === "REMOVE_ITEM") {
//     // ...remove an item from the state
//     const existingCartItemIndex = state.items.findIndex(
//       (item) => item.id === action.id
//     );
//     const existingCartItem = state.items[existingCartItemIndex];
//     const updatedItems = [...state.items];
//     if (existingCartItem.quantity === 1) {
//       updatedItems.splice(existingCartItemIndex, 1);
//     } else {
//       const updatedItem = {
//         ...existingCartItem,
//         quantity: existingCartItem.quantity - 1,
//       };
//       updatedItems[existingCartItemIndex] = updatedItem;
//     }
//     return { ...state, items: updatedItems };
//   }
//   if (action.type === "CLEAR_CART") {
//     return { ...state, items: [] };
//   }
//   return state;
// }
// export function CartContextProvider({ children }) {
//   const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

//   function addItem(item) {
//     dispatchCartAction({ type: "ADD_ITEM", item });
//   }
//   function removeItem(id) {
//     dispatchCartAction({ type: "REMOVE_ITEM", id });
//   }
//   function clearCart() {
//     dispatchCartAction({ type: "CLEAR_CART" });
//   }

//   const cartContext = {
//     items: cart.items,
//     addItem,
//     removeItem,
//     clearCart,
//   };
//   return (
//     <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
//   );
// }
// export default CartContext;

import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const CLEAR_CART = "CLEAR_CART";

const initialState = {
  items: [],
};

function calculateDiscountedPrice(price, discount) {
  return price - (price * discount) / 100;
}

function cartReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM: {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );
      const updatedItems = [...state.items];
      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const discountedPrice = calculateDiscountedPrice(
          action.item.price,
          action.item.discount || 0
        );
        updatedItems.push({
          ...action.item,
          price: discountedPrice,
          quantity: 1,
        });
      }
      return { ...state, items: updatedItems };
    }
    case REMOVE_ITEM: {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      const updatedItems = [...state.items];
      if (existingCartItem.quantity === 1) {
        updatedItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      return { ...state, items: updatedItems };
    }
    case CLEAR_CART:
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(cartReducer, initialState);

  function addItem(item) {
    dispatchCartAction({ type: ADD_ITEM, item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: REMOVE_ITEM, id });
  }

  function clearCart() {
    dispatchCartAction({ type: CLEAR_CART });
  }

  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
