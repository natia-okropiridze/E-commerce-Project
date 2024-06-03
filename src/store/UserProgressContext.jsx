import { createContext, useState } from "react";
const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
});
export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");
  function showCart() {
    setUserProgress("cart");
  }
  function hideCart() {
    setUserProgress("");
  }
  const userProgressContext = {
    progress: userProgress,
    showCart,
    hideCart,
  };
  return (
    <UserProgressContext.Provider value={userProgressContext}>
      {children}
    </UserProgressContext.Provider>
  );
}
export default UserProgressContext;
