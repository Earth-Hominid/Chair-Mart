import Products from './Products';
import { DepartmentContainer } from './Styles';

const DepartmentShowcase = () => {
  return (
    <section>
      <DepartmentContainer>
        <Products />
      </DepartmentContainer>
    </section>
  );
};

export default DepartmentShowcase;
