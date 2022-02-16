import categoryIcons from '../../../utils/categoryIcons';
import { CategoryContainer } from './Styles';
import Departments from './Departments';

const departmentIcons = categoryIcons;

const CategoryBar = () => {
  return (
    <>
      <CategoryContainer>
        <Departments departments={departmentIcons} />
      </CategoryContainer>
    </>
  );
};

export default CategoryBar;
