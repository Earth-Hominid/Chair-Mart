import ImageColumn from '../image-section/ImageColumn';
import Details from '../detail-section/Details';
import { ProductPageSection, ProductPageRow } from './Styles';

const FilipSection = () => {
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

export default FilipSection;
