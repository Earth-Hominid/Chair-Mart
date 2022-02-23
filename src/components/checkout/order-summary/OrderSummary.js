import { useState } from 'react';
import Cart from '../../../assets/images/icons/checkout/cart.png';
import UpArrow from '../../../assets/images/icons/checkout/up-blue.png';
import DownArrow from '../../../assets/images/icons/checkout/down-blue.png';

const OrderSummary = ({}) => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  const handleAccordianClick = () => {
    setAccordianOpen(!accordianOpen);
  };

  return (
    <>
      <div className="order__accordian">
        <details>
          <summary className="order__summary" onClick={handleAccordianClick}>
            <img className="cart__icon" src={Cart} alt="cart-icon" />
            {accordianOpen ? (
              <div className="order__title__container">
                <h2 className="order__summary__title">Show Order Summary</h2>
                <img
                  src={UpArrow}
                  alt="up-arrow"
                  className="blue__arrow__icon"
                />
              </div>
            ) : (
              <div className="order__title__container">
                <h2 className="order__summary__title">Hide Order Summary </h2>
                <img
                  src={DownArrow}
                  alt="down-arrow"
                  className="blue__arrow__icon"
                />
              </div>
            )}
            <div className="order__total__amount">$420.00</div>
          </summary>
          <div className="accordian__content"></div>
        </details>
      </div>
    </>
  );
};

export default OrderSummary;
