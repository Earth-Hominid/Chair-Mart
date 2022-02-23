import { useState } from 'react';
import chairProducts from '../../../../utils/chairProducts';
import FinishIcon from '../../../../assets/images/icons/detail-page/finish.png';
import DownArrow from '../../../../assets/images/icons/detail-page/down-pink.png';
import UpArrow from '../../../../assets/images/icons/detail-page/up-pink.png';

import {
  AccordianNoBorderContainer,
  AccordianSummary,
  SummaryTitle,
  ImageIcon,
  AccordianContent,
  AccordianText,
} from './Styles';

const FinishSection = () => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  const handleAccordianClick = () => {
    setAccordianOpen(!accordianOpen);
  };

  return (
    <>
      <AccordianNoBorderContainer>
        <details>
          <AccordianSummary onClick={handleAccordianClick}>
            <ImageIcon src={FinishIcon} alt="Finish-icon" />
            <SummaryTitle>Finish</SummaryTitle>
            {accordianOpen ? (
              <ImageIcon src={UpArrow} alt="up-arrow" />
            ) : (
              <ImageIcon src={DownArrow} alt="down-arrow" />
            )}
          </AccordianSummary>
          <AccordianContent>
            <AccordianText>{chairProducts[1].finish}</AccordianText>
          </AccordianContent>
        </details>
      </AccordianNoBorderContainer>
    </>
  );
};

export default FinishSection;
