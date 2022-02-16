import { CategoryBox, DepartmentIcon } from './Styles';

const Department = ({ department }) => {
  return (
    <CategoryBox>
      <DepartmentIcon
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
