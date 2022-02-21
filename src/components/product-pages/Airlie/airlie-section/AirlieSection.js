import AirlieImageColumn from './AirlieImageColumn';
import AirlieDetails from './AirlieDetails';
import { ProductPageSection, ProductPageRow } from '../../Styles';

const AirlieSection = () => {
  return (
    <>
      <ProductPageSection>
        <ProductPageRow>
          <AirlieImageColumn />
          <AirlieDetails />
        </ProductPageRow>
      </ProductPageSection>
    </>
  );
};

export default AirlieSection;
