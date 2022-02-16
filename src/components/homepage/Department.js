import { CategoryBox } from './styles/CategoryBox.styled';

const Department = ({ department }) => {
  return (
    <CategoryBox>
      <img
        src={department.image}
        key={department.id}
        className="drop-icon"
        alt={department.name}
      />
      <span>{department.name}</span>
    </CategoryBox>
  );
};

export default Department;
