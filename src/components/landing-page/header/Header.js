import { ProductShowcase, HeadlineContainer, Headline } from './Styles';

const PageHeader = () => {
  return (
    <section>
      <ProductShowcase>
        <HeadlineContainer>
          <Headline>{`Homepage > Room > Home Office`}</Headline>
        </HeadlineContainer>
      </ProductShowcase>
    </section>
  );
};

export default PageHeader;
