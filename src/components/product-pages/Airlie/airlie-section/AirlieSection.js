import AirlieImageColumn from '../image-section/AirlieImageColumn';
import AirlieDetails from '../detail-section/AirlieDetails';
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
