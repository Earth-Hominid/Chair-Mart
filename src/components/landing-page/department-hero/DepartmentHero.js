import Office from '../../../assets/images/rooms/office.jpg';
import {
  BottomBorder,
  HeroContainer,
  HeroHeadline,
  HeroImage,
  HeroParagraph,
  TextContainer,
  BigScreen,
  SmallScreen,
} from './Styles';

const DepartmentHero = () => {
  return (
    <>
      <SmallScreen>
        <HeroContainer>
          <TextContainer>
            <HeroHeadline>Home Office</HeroHeadline>
            <HeroParagraph>
              It might be work, but it doesn't have to feel like it. All it
              takes is ergonomic yet comfortable and stylish home office
              furniture to keep things organized, and the right lighting for the
              job.
            </HeroParagraph>
          </TextContainer>
          <HeroImage src={Office} alt="home office" />
        </HeroContainer>
      </SmallScreen>
      <BigScreen>
        <HeroContainer>
          <HeroImage src={Office} alt="home office" />
          <TextContainer>
            <HeroHeadline>Home Office</HeroHeadline>
            <HeroParagraph>
              It might be work, but it doesn't have to feel like it. All it
              takes is ergonomic yet comfortable and stylish home office
              furniture to keep things organized, and the right lighting for the
              job.
            </HeroParagraph>
          </TextContainer>
        </HeroContainer>
      </BigScreen>

      <BottomBorder></BottomBorder>
    </>
  );
};

export default DepartmentHero;
