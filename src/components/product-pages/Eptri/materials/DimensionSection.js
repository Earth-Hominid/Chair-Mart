import { useState } from 'react';
import chairProducts from '../../../../utils/chairProducts';
import DimensionIcon from '../../../../assets/images/icons/detail-page/ruler.png';
import DownArrow from '../../../../assets/images/icons/detail-page/down-pink.png';
import UpArrow from '../../../../assets/images/icons/detail-page/up-pink.png';

import {
  AccordianContainer,
  AccordianSummary,
  SummaryTitle,
  ImageIcon,
  AccordianContent,
  AccordianText,
} from './Styles';

const DimensionSection = () => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  const handleAccordianClick = () => {
    setAccordianOpen(!accordianOpen);
  };

  return (
    <>
      <AccordianContainer>
        <details>
          <AccordianSummary onClick={handleAccordianClick}>
            <ImageIcon src={DimensionIcon} alt="Finish-icon" />
            <SummaryTitle>Dimensions</SummaryTitle>
            {accordianOpen ? (
              <ImageIcon src={UpArrow} alt="up-arrow" />
            ) : (
              <ImageIcon src={DownArrow} alt="down-arrow" />
            )}
          </AccordianSummary>
          <AccordianContent>
            <AccordianText>{chairProducts[3].dimensions}</AccordianText>
          </AccordianContent>
        </details>
      </AccordianContainer>
    </>
  );
};

export default DimensionSection;
