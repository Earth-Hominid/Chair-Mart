import { NavLink } from 'react-router-dom';
import {
  CategoryList,
  FeatureImage,
  Display,
  LeftCopy,
  LeftHeadline,
  LeftCopyParagraph,
} from './Styles';
import Office from '../../../assets/images/rooms/office.jpg';

const OfficeFeature = () => {
  return (
    <section>
      <Display>
        <LeftCopy>
          <LeftHeadline>Home Office</LeftHeadline>
          <LeftCopyParagraph>
            It might be work, but it doesn't have to feel like it. All it takes
            is ergonomic yet comfortable and stylish home office furniture to
            keep things organized, and the right lighting for the job.
          </LeftCopyParagraph>
          <CategoryList>
            <NavLink to="/landing" className="link">
              Shop all
            </NavLink>
          </CategoryList>
        </LeftCopy>
        <FeatureImage src={Office} alt="home office" />
      </Display>
    </section>
  );
};

export default OfficeFeature;
