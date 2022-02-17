import { Link } from 'react-router-dom';
import Chair from './Chair';

const Chairs = ({ chairs }) => {
  return (
    <>
      {chairs.map((chair, index) => (
        <Link to={`/${chair.name}`} key={index}>
          <Chair chair={chair} />
        </Link>
      ))}
    </>
  );
};

export default Chairs;
