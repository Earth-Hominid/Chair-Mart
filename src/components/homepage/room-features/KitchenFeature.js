import { NavLink } from 'react-router-dom';
import {
  CategoryList,
  FeatureImage,
  Display,
  LeftCopy,
  LeftHeadline,
  LeftCopyParagraph,
} from './Styles';
import Kitchen from '../../../assets/images/rooms/kitchen.jpg';

const KitchenFeature = () => {
  return (
    <section>
      <Display>
        <LeftCopy>
          <LeftHeadline>Kitchen</LeftHeadline>
          <LeftCopyParagraph>
            Everything you need for a bedroom retreat. Clever storage keeps you
            clutter free, while bedroom lighting and curated bedding sets the
            mood.
          </LeftCopyParagraph>
          <CategoryList>
            <NavLink to="/landing" className="link">
              Shop all
            </NavLink>
          </CategoryList>
        </LeftCopy>
        <FeatureImage src={Kitchen} alt="bedroom" />
      </Display>
    </section>
  );
};

export default KitchenFeature;
