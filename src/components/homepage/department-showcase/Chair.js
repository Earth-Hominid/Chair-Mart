import {
  ProductBackground,
  ProductContainer,
  ShowcaseImage,
  ProductName,
  ProductPrice,
} from './Styles';

const Chair = ({ chair }) => {
  return (
    <ProductContainer>
      <ProductBackground>
        <ShowcaseImage
          key={chair.id}
          src={chair.image}
          alt={chair.name}
          data-id={chair.id}
        />
      </ProductBackground>
      <ProductName>{chair.name}</ProductName>
      <ProductPrice>{chair.amount}</ProductPrice>
    </ProductContainer>
  );
};

export default Chair;
