import QuantityAdjuster from '../quantity-adjuster/QuantityAdjuster';
import DeleteButton from '../delete-button/DeleteButton';

const Item = ({ product, onClick }) => {
  return (
    <div className="cart__product__container">
      <div className="cart__product__background">
        <img
          className="cart__product__image"
          key={product.id}
          src={product.image}
          alt={product.name}
          data-id={product.id}
        />
      </div>
      <div className="align-center">
        <h2 className="showcase-product-name">{product.name}</h2>
        <h2 className="showcase-product-price">{product.amount}</h2>
        <h2 className="showcase-product-color">Color: {product.color}</h2>
      </div>
      <div className="adjuster__container">
        <QuantityAdjuster product={product} />
        <DeleteButton onClick={onClick} />
      </div>
    </div>
  );
};

export default Item;
