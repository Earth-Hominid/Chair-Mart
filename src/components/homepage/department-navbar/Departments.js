import { Link, NavLink } from 'react-router-dom';
import Department from './Department';
import { CategoryList } from './Styles';

const Departments = ({ departments }) => {
  return (
    <>
      <CategoryList>
        {departments.map((department, index) => (
          <NavLink to={'/landing'} key={index}>
            <Department
              department={department}
              element={Link}
              to={'/landing'}
            />
          </NavLink>
        ))}
      </CategoryList>
    </>
  );
};

export default Departments;
