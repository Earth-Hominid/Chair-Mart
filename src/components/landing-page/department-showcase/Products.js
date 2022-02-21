import { useContext } from 'react';
import { UserCart } from '../../../context/UserCart';
import { NavLink } from 'react-router-dom';
import Product from './Product';

const Products = () => {
  const { addToCart, products } = useContext(UserCart);

  return (
    <>
      {products.map((product, index) => (
        <NavLink to={`/${product.name}`} key={index}>
          <Product
            key={index}
            product={product}
            onClick={() => addToCart(product)}
          />
        </NavLink>
      ))}
    </>
  );
};

export default Products;
