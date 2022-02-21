import { ProductDetailsContainer, ProductTitle } from '../../Styles';
import chairProducts from '../../../../utils/chairProducts';
const AirlieDetails = () => {
  return (
    <>
      <ProductDetailsContainer>
        <ProductTitle>{chairProducts[0].name}</ProductTitle>
      </ProductDetailsContainer>
    </>
  );
};

export default AirlieDetails;
