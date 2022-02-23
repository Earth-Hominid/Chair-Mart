const CartProduct = () => {
  return (
    <div className="order___summary">
      <div className="order__summary__section__content">
        <table className="product__table">
          <thead product__table__header>
            <tr>
              <th scope="col">
                <span className="visually-hidden">Product image</span>
              </th>
              <th scope="col">
                <span className="visually-hidden">Description</span>
              </th>
              <th scope="col">
                <span className="visually-hidden">Quantity</span>
              </th>
              <th scope="col">
                <span className="visually-hidden">Price</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="product">
              <td classname="product__image">
                <div className="product__thumbnail">
                  {/* <img alt={product.name} className="product__thumbnail__image"/> */}
                  <span className="product__thumbnail__quantity">1</span>{' '}
                </div>
              </td>
            </tr>
          </tbody>
          <tbody product__table__body></tbody>
        </table>
      </div>
    </div>
  );
};
