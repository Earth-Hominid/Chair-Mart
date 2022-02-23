import { useState } from 'react';
import chairProducts from '../../../../utils/chairProducts';
import materialIcon from '../../../../assets/images/icons/detail-page/material.png';
import upArrow from '../../../../assets/images/icons/detail-page/up-pink.png';
import downArrow from '../../../../assets/images/icons/detail-page/down-pink.png';

import {
  AccordianContainer,
  AccordianSummary,
  ImageIcon,
  SummaryTitle,
  AccordianContent,
  AccordianText,
} from './Styles';

const MaterialSection = () => {
  const [accordianOpen, setAccordianOpen] = useState(false);

  const handleAccordianClick = () => {
    setAccordianOpen(!accordianOpen);
  };

  return (
    <>
      <AccordianContainer>
        <details>
          <AccordianSummary onClick={handleAccordianClick}>
            <ImageIcon alt="materials-icon" src={materialIcon} />
            <SummaryTitle>Materials</SummaryTitle>
            {accordianOpen ? (
              <ImageIcon src={upArrow} alt="close" />
            ) : (
              <ImageIcon alt="open" src={downArrow} />
            )}
          </AccordianSummary>
          <AccordianContent>
            <AccordianText>{chairProducts[0].materials}</AccordianText>
          </AccordianContent>
        </details>
      </AccordianContainer>
    </>
  );
};

export default MaterialSection;
