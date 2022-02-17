const Chair = ({ chair }) => {
  return (
    <div className="product-container">
      <div className="product-background">
        <img
          className="showcase-image"
          key={chair.id}
          src={chair.image}
          alt={chair.name}
          data-id={chair.id}
        />
      </div>
      <h2 className="showcase-product-name">{chair.name}</h2>
      <h2 className="showcase-product-price">{chair.amount}</h2>
    </div>
  );
};

export default Chair;
