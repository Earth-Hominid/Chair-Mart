import { Link } from 'react-router-dom';
import Department from './Department';

const Departments = ({ departments }) => {
  return (
    <>
      {departments.map((department, index) => (
        <Link className="text-link" to={'/landing'} key={index}>
          <Department department={department} element={Link} to={'/landing'} />
        </Link>
      ))}
    </>
  );
};

export default Departments;
