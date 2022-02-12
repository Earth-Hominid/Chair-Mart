# Chair-Mart

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

An online furniture store featuring a shopping-cart. The website is built with React and uses React-Router, Jest, and the React Testing Library.

## Description

The live version can be found here:

## Testing

Learned: React-Router 6 relies on React context to work, thus, when testing components that use Router components (such as Link, Route,useNavigate etc.), you need to wrap your test component in one of the Router components.

I used BrowserRouter in my RouteSwitch file, thus, my unit tests require:

```js
it('renders logo link', () => {
  render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
  const linkElement = screen.getByAltText(/chair-mart logo/i);
  expect(linkElement).toBeInTheDocument();
});
```
