import {
  ProductContainer,
  ProductBackground,
  ProductImage,
  TextContainer,
  ProductName,
  ProductPrice,
  AddToCartButton,
} from './Styles';

const Product = ({ product, onClick }) => {
  return (
    <ProductContainer>
      <ProductBackground>
        <ProductImage
          className="chair__product__image"
          key={product.id}
          src={product.image}
          alt={product.name}
          data-id={product.id}
        />
      </ProductBackground>
      <TextContainer>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.amount}</ProductPrice>
        <AddToCartButton onClick={onClick}>Add to cart</AddToCartButton>
      </TextContainer>
    </ProductContainer>
  );
};

export default Product;
