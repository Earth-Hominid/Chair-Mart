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
          <MainProductImage
            src={chairProducts[7].image}
            alt={chairProducts[7].name}
          />
        </MainImageContainer>
        <SecondaryImageGroup>
          <SecondaryImageColumn>
            <img
              src={chairProducts[7].imageTwo}
              alt={chairProducts[7].name}
              width="100%"
            />
          </SecondaryImageColumn>
          <SecondaryImageColumn>
            <img
              src={chairProducts[7].imageThree}
              alt={chairProducts[7].name}
              width="100%"
            />
          </SecondaryImageColumn>
        </SecondaryImageGroup>
        <SecondaryImageGroup>
          <SecondaryImageColumn>
            <img
              src={chairProducts[7].imageFour}
              alt={chairProducts[7].name}
              width="100%"
            />
          </SecondaryImageColumn>
          <SecondaryImageColumn>
            <img
              src={chairProducts[7].imageFive}
              alt={chairProducts[7].name}
              width="100%"
            />
          </SecondaryImageColumn>
        </SecondaryImageGroup>
      </MainImageColumn>
    </>
  );
};

export default ImageColumn;
