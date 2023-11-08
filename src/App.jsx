// import { useState } from "react";
// import Cart from "./day3/coffeeShop/Cart";
// import Menu from "./day3/coffeeShop/Menu";
// import Navbar from "./day3/coffeeShop/Navbar";
// import categories from "./day3/coffeeShop/products";

import Counter from "./day3/Counter";
import DynamicRendering from "./day3/DynamicRendering";
import ToggleMessage from "./day3/ToggleMessage";

function App() {
  // const [activeCategory, setActiveCategory] = useState(categories[0]);
  // const [products, setProducts] = useState([]);

  // const handleClick = (index) => {
  //   setActiveCategory(categories[index]);
  // };

  // const handleAddToCart = (item) => {
  //   setProducts([...products, item]);
  // };

  return (
    <div className="flex space-x-4 my-4">
      {/* <Navbar category={categories} handleClick={handleClick} />
      <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
      <Cart products={products} /> */}
      {/* <Button label="Green Button" color="green" /> */}
      {/* <Button label="Yellow Button" color="yellow" />
      <Button label="Black Button" color="gray" />
      <Button label="Red Button" color="red" /> */}
      <h1>Hello</h1>
      <ToggleMessage />
      <Counter />
    </div>
  );
}

export default App;
