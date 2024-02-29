import ShopSection from "../partials/shopSection/ShopSection";
import database from "../../database/database";

function ShopPage() {
  return (
    <>
      <ShopSection products={database.products} />
    </>
  );
}
export default ShopPage;
