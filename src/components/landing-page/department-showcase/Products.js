import { useContext } from 'react';
import { UserCart } from '../../../context/UserCart';

import Product from './Product';

const Products = () => {
  const { addToCart, products } = useContext(UserCart);

  return (
    <>
      {products.map((product, index) => (
        <div key={index}>
          <Product
            key={index}
            product={product}
            onClick={() => addToCart(product)}
          />
        </div>
      ))}
    </>
  );
};

export default Products;
