import { useContext } from "react";
import Btn from "./style";

import { CartContext } from "../../providers/cart";
import { CatalogueContext } from "../../providers/catalogue";

const Button = ({ type, item }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { catalogue, addToCatalogue, removeFromCatalogue } =
    useContext(CatalogueContext);

  const text = type === "catalogue" ? "Add to cart" : "Remove from cart";

  const handleClick = () => {
    if (type === "catalogue") {
      removeFromCatalogue(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addToCatalogue(item);
    }
  };

  return <Btn onClick={handleClick}>{text}</Btn>;
};

export default Button;