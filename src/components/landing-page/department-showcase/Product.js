const Product = ({ product, onClick }) => {
  return (
    <div className="chair__product__container">
      <div className="chair__product__background">
        <img
          className="chair__product__image"
          key={product.id}
          src={product.image}
          alt={product.name}
          data-id={product.id}
        />
      </div>
      <div className="align-center">
        <h2 className="showcase-product-name">{product.name}</h2>
        <h2 className="showcase-product-price">{product.amount}</h2>
        <button className="showcase-add-button" onClick={onClick}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
