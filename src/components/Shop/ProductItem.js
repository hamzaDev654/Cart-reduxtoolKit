import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const { id, title, price, description } = props;

  const items = {
    id,
    price,
    title,
  };
  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart(items));
  };

  return (
    <Card>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </header>
      <p>{description}</p>
      <div className={classes.actions}>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </Card>
  );
};

export default ProductItem;
