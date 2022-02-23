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
            src={chairProducts[6].image}
            alt={chairProducts[6].name}
          />
        </MainImageContainer>
        <SecondaryImageGroup>
          <SecondaryImageColumn>
            <img
              src={chairProducts[6].imageTwo}
              alt={chairProducts[6].name}
              width="100%"
            />
          </SecondaryImageColumn>
          <SecondaryImageColumn>
            <img
              src={chairProducts[6].imageThree}
              alt={chairProducts[6].name}
              width="100%"
            />
          </SecondaryImageColumn>
        </SecondaryImageGroup>
        <SecondaryImageGroup>
          <SecondaryImageColumn>
            <img
              src={chairProducts[6].imageFour}
              alt={chairProducts[6].name}
              width="100%"
            />
          </SecondaryImageColumn>
          <SecondaryImageColumn>
            <img
              src={chairProducts[6].imageFive}
              alt={chairProducts[6].name}
              width="100%"
            />
          </SecondaryImageColumn>
        </SecondaryImageGroup>
      </MainImageColumn>
    </>
  );
};

export default ImageColumn;
