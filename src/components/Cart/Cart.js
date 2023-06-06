import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  const cartItemContent = items.map((item) => {
    return (
      <li className={classes.item} key={item.id}>
        <CartItem
          itemsData={{
            title: item.name,
            id: item.id,
            quantity: item.quantity,
            total: item.totalPrice,
            price: item.price,
          }}
        />
      </li>
    );
  });
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItemContent}
        {/* 
        <CartItem
          item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
        /> */}
      </ul>
    </Card>
  );
};

export default Cart;
