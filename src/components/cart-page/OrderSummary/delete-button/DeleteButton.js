import Delete from '../../assets/images/icons/cart-counter/delete-black.png';

import React from 'react';

const DeleteButton = ({ onClick }) => {
  return (
    <button className="cart__delete__button" onClick={onClick}>
      <img
        src={Delete}
        alt="delete-button"
        className="cart__delete__image"
      ></img>
    </button>
  );
};

export default DeleteButton;
