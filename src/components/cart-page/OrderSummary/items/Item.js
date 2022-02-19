import QuantityAdjuster from './QuantityAdjuster';
import DeleteButton from './DeleteButton';

const Item = ({ product, onClick }) => {
  return (
    <>
      <div className="cart-item-container">
        <div className="cart__product__background">
          <img
            className="cart__product__image"
            key={product.product.id}
            src={product.product.image}
            alt={product.product.name}
            data-id={product.product.id}
          />
        </div>
        <div className="cart__item__details">
          <h4 className="cart__product__name bottom__small__margin">
            {product.product.name}
          </h4>
          <h4 className="cart__product__price bottom__small__margin font_fourteen">
            {product.product.amount}
          </h4>
          <h2 className="cart__product__color  bottom__small__margin font_fourteen">
            Color: {product.product.color}
          </h2>
          <div className="cart__counter">
            <button className="quantity__button" name="minus" type="button">
              <img
                className="quantity__icon"
                src={minusIcon}
                alt="minus-icon"
              ></img>
            </button>
            <input
              type="number"
              name="quantity"
              className="quantity__input"
              value={quantity}
            />
            <button className="quantity__button">
              <img
                className="quantity__icon"
                src={plusIcon}
                alt="plus-icon"
              ></img>
            </button>
          </div>
        </div>
        <div className="cart__total__cost">${}</div>
      </div>
    </>
  );
};

export default Item;
