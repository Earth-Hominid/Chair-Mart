import ImageColumn from '../image-section/ImageColumn';
import Details from '../detail-section/Details';
import { ProductPageSection, ProductPageRow } from './Styles';

const AirlieSection = () => {
  return (
    <>
      <ProductPageSection>
        <ProductPageRow>
          <ImageColumn />
          <Details />
        </ProductPageRow>
      </ProductPageSection>
    </>
  );
};

export default AirlieSection;
