import chairProducts from '../../../../utils/chairProducts';

import {
  MainImageColumn,
  MainImageContainer,
  MainProductImage,
  SecondaryImageGroup,
  SecondaryImageColumn,
} from './Styles';

const ImageColumn = () => {
  return (
    <>
      <MainImageColumn>
        <MainImageContainer>
          <MainProductImage src={chairProducts[0].image} alt="Airlie Sofa" />
        </MainImageContainer>
        <SecondaryImageGroup>
          <SecondaryImageColumn>
            <img
              src={chairProducts[0].imageTwo}
              alt={chairProducts[0].name}
              width="100%"
            />
          </SecondaryImageColumn>
          <SecondaryImageColumn>
            <img
              src={chairProducts[0].imageThree}
              alt={chairProducts[0].name}
              width="100%"
            />
          </SecondaryImageColumn>
        </SecondaryImageGroup>
        <SecondaryImageGroup>
          <SecondaryImageColumn>
            <img
              src={chairProducts[0].imageFour}
              alt={chairProducts[0].name}
              width="100%"
            />
          </SecondaryImageColumn>
          <SecondaryImageColumn>
            <img
              src={chairProducts[0].imageFive}
              alt={chairProducts[0].name}
              width="100%"
            />
          </SecondaryImageColumn>
        </SecondaryImageGroup>
      </MainImageColumn>
    </>
  );
};

export default ImageColumn;
