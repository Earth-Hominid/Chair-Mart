const NotFoundHeader = () => {
  return (
    <>
      <header className="not__found__header">
        <b>404.</b> <ins>Not Found</ins>
      </header>
      <p className="not__found__paragraph">
        It appears the page you are looking for is not on this server.{' '}
        <ins>Click the logo to navigate to our homepage.</ins>
      </p>
    </>
  );
};

export default NotFoundHeader;
