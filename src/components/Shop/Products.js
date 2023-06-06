import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "MyFirst book I ever wrote",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "MySecond book I ever wrote",
  },
];
const Products = (props) => {
  const productsItemContent = DUMMY_PRODUCT.map((item) => {
    return (
      <li className={classes.item} key={item.id}>
        <ProductItem
          title={item.title}
          price={item.price}
          id={item.id}
          description={item.description}
        />  
      </li>
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsItemContent}
        {/* <ProductItem
          title="Test"
          price={6}
          id={1}
          description="This is a first product - amazing!"
        /> */}
      </ul>
    </section>
  );
};

export default Products;
