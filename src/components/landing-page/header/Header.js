import { ProductShowcase } from './Styles';

const PageHeader = () => {
  return (
    <section>
      <ProductShowcase>
        <div className="div-headline">
          <h3 className="page__info__headline">
            {`Homepage > Room > Home Office`}
          </h3>
        </div>
      </ProductShowcase>
    </section>
  );
};

export default PageHeader;
