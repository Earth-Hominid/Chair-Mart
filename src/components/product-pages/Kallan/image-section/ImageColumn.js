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
            src={chairProducts[4].image}
            alt={chairProducts[4].name}
          />
        </MainImageContainer>
        <SecondaryImageGroup>
          <SecondaryImageColumn>
            <img
              src={chairProducts[4].imageTwo}
              alt={chairProducts[4].name}
              width="100%"
            />
          </SecondaryImageColumn>
          <SecondaryImageColumn>
            <img
              src={chairProducts[4].imageThree}
              alt={chairProducts[4].name}
              width="100%"
            />
          </SecondaryImageColumn>
        </SecondaryImageGroup>
        <SecondaryImageGroup>
          <SecondaryImageColumn>
            <img
              src={chairProducts[4].imageFour}
              alt={chairProducts[4].name}
              width="100%"
            />
          </SecondaryImageColumn>
          <SecondaryImageColumn>
            <img
              src={chairProducts[4].imageFive}
              alt={chairProducts[4].name}
              width="100%"
            />
          </SecondaryImageColumn>
        </SecondaryImageGroup>
      </MainImageColumn>
    </>
  );
};

export default ImageColumn;
