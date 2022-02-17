import { NavLink } from 'react-router-dom';
import Bedroom from '../../../assets/images/rooms/bedroom.jpg';
import {
  CategoryList,
  FeatureImage,
  Display,
  LeftCopy,
  LeftHeadline,
  LeftCopyParagraph,
  SmallScreen,
  BigScreen,
} from './Styles';

const BedroomFeature = () => {
  return (
    <section>
      <SmallScreen>
        <Display>
          <LeftCopy>
            <LeftHeadline>Bedroom</LeftHeadline>
            <LeftCopyParagraph>
              Everything you need for a bedroom retreat. Clever storage keeps
              you clutter free, while bedroom lighting and curated bedding sets
              the mood.
            </LeftCopyParagraph>
            <CategoryList>
              <NavLink to="/landing" className="link">
                Shop all
              </NavLink>
            </CategoryList>
          </LeftCopy>
          <FeatureImage src={Bedroom} alt="bedroom" />
        </Display>
      </SmallScreen>
      <BigScreen>
        <Display>
          <FeatureImage src={Bedroom} alt="bedroom" />
          <LeftCopy>
            <LeftHeadline>Bedroom</LeftHeadline>
            <LeftCopyParagraph>
              Everything you need for a bedroom retreat. Clever storage keeps
              you clutter free, while bedroom lighting and curated bedding sets
              the mood.
            </LeftCopyParagraph>
            <CategoryList>
              <NavLink to="/landing" className="link">
                Shop all
              </NavLink>
            </CategoryList>
          </LeftCopy>
        </Display>
      </BigScreen>
    </section>
  );
};

export default BedroomFeature;
