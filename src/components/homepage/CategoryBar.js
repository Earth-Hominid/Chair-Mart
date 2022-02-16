import categoryIcons from '../../utils/categoryIcons';
import { CategoryContainer } from './styles/CategoryContainer.styled';
import { CategoryList } from './styles/CategoryList.styled';
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
