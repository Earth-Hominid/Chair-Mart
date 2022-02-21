import chairProducts from '../../../../utils/chairProducts';

import {
  MainImageColumn,
  MainImageContainer,
  MainProductImage,
  SecondaryImageGroup,
  SecondaryImageColumn,
} from '../../Styles';

const AirlieImageColumn = () => {
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
              alt="Airle chair"
              width="100%"
            />
          </SecondaryImageColumn>
          <SecondaryImageColumn>
            <img
              src={chairProducts[0].imageThree}
              alt=" Airliechair"
              width="100%"
            />
          </SecondaryImageColumn>
        </SecondaryImageGroup>
        <SecondaryImageGroup>
          <SecondaryImageColumn>
            <img
              src={chairProducts[0].imageFour}
              alt=" Airliechair"
              width="100%"
            />
          </SecondaryImageColumn>
          <SecondaryImageColumn>
            <img
              src={chairProducts[0].imageFive}
              alt=" Airliechair"
              width="100%"
            />
          </SecondaryImageColumn>
        </SecondaryImageGroup>
      </MainImageColumn>
    </>
  );
};

export default AirlieImageColumn;
