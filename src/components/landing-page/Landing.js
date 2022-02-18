import PageHeader from './header/Header';
import DepartmentHero from './department-hero/DepartmentHero';
import DepartmentShowcase from './department-showcase/DepartmentShowcase';
import Footer from '../footer/Footer';

const Landing = () => {
  return (
    <>
      <PageHeader />
      <DepartmentHero />
      <DepartmentShowcase />
      <Footer />
    </>
  );
};

export default Landing;
