import { NavLink } from 'react-router-dom';
import Chair from './Chair';
import { CategoryList } from './Styles';

const Chairs = ({ chairs }) => {
  return (
    <>
      <CategoryList>
        {chairs.map((chair, index) => (
          <NavLink to={`/${chair.name}`} key={index}>
            <Chair chair={chair} />
          </NavLink>
        ))}
      </CategoryList>
    </>
  );
};

export default Chairs;
