import categoryIcons from '../../utils/categoryIcons';
import Departments from './Departments';

const departmentIcons = categoryIcons;

const CategoryBar = () => {
  return (
    <>
      <div className="container-category">
        <div className="category-list" id="link-list">
          <Departments departments={departmentIcons} />
        </div>
      </div>
    </>
  );
};

export default CategoryBar;
