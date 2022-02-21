# Chair-Mart

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

An online furniture store featuring a shopping-cart. The website is built with React and uses React-Router, Jest, and the React Testing Library.

## Description

The live version can be found here:

## Features

- Written with modern React, functional components with hooks
- Simple React state managment, (no usage of redux, mobx etc)
- Simple project structure, easy to understand

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

## Aha moments

I was using useEffect, with an empty [], when trying to dynamically update the shopping cart icon and the cart product page.

When the cart is empty, the icon should be just show a bag and the cart product page needs to show 'cart is empty'. When the user adds a product to the cart or clears the cart, the bag icon needs to show the quatity of items in the cart, and the cart page needs to show the products.

Using useEffect, only showed the updated values when I clicked refresh on the page.

In order to get the values to appear immediately, I made functions which updated the state, I added these into useContext, and called these changes whenever a button was clicked.

```js
const [bagFilled, setBagFilled] = useState();

const checkBagQuantity = () => {
  if (cart.length <= 0) {
    setBagFilled(false);
  } else if (cart.length > 0) {
    setBagFilled(!bagFilled);
  }
};
```

I added the checkBagQuantity() inside any functions that dealt with either adding or removing products from the cart. This allowed my cart icon, and cart page to dynamically render whenever a product was added or removed, or the cart was cleared.
