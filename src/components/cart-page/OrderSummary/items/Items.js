import { useContext } from 'react';
import { UserCart } from '../../../../context/UserCart';

import Item from './Item.js';

const Items = () => {
  const { cart, removeFromCart, productSubtotal } = useContext(UserCart);

  return (
    <>
      {cart.map((product, index) => (
        <div key={index}>
          <Item
            key={index}
            product={product}
            onClick={() => removeFromCart(product)}
            productSubtotal={productSubtotal}
          />
        </div>
      ))}
    </>
  );
};

export default Items;
