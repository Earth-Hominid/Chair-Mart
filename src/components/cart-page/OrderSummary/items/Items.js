import { useContext } from 'react';
import { UserCart } from '../../../../context/UserCart';
import { NavLink } from 'react-router-dom';
import Item from './Item.js';

const Items = () => {
  const { cart, removeFromCart } = useContext(UserCart);

  return (
    <>
      {cart.map((product, index) => (
        <NavLink to={`/${product.name}`} key={index}>
          <Item
            key={index}
            product={product}
            onClick={() => removeFromCart(product)}
          />
        </NavLink>
      ))}
    </>
  );
};

export default Items;
