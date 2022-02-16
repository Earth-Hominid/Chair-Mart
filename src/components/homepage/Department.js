const Department = ({ department }) => {
  return (
    <div className="drop-box" id="new-in">
      <img
        src={department.image}
        key={department.id}
        className="drop-icon"
        alt={department.name}
      />
      <span>{department.name}</span>
    </div>
  );
};

export default Department;
