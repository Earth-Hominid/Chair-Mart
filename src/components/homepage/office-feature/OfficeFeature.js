import { Link } from 'react-router-dom';
import { CategoryList, FeatureImage } from './Styles';
import Office from '../../../assets/images/rooms/office.jpg';
import { Display, LeftCopy, LeftHeadline, LeftCopyParagraph } from './Styles';

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
            <Link to="/landing" className="link">
              Shop all
            </Link>
          </CategoryList>
        </LeftCopy>
        <div>
          <FeatureImage src={Office} alt="home office" />
        </div>
      </Display>
    </section>
  );
};

export default OfficeFeature;
