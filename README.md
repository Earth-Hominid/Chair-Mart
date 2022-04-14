# Chair-Mart

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)

A furniture store mock-up featuring a shopping-cart. The app is built with React and utilizes both the React-Router and the React Testing Library. Unit tests were created with Jest. React Styled-Components were implemented for the CSS.

The live version can be found [here](https://earth-hominid.github.io/chair-mart/).

## Description

The idea for this project is taken from **The Odin Project | Full Stack [Course](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/shopping-cart)**.

## Features

- Written with modern React, functional components with hooks
- Simple React state managment, (no usage of redux, mobx etc)
- Simple project structure, easy to understand

### Install

```js
git clone https://github.com/Earth-Hominid/chair-mart.git
cd shopping-cart
npm install
npm start
```

## Testing

Unit tests were built with Jest.

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

### Technology

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![Adobe XD](https://img.shields.io/badge/Adobe%20XD-470137?style=for-the-badge&logo=Adobe%20XD&logoColor=#FF61F6) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

### Favorite Discoveries

One technique I learned was being able to simply insert the Navigation Component above the Router paths, and the navigation bar would be added to all of the pages.

Pior to this, I built all of the pages with Navigation bar being imported into the component page:

```js
import Nav from '../../navigation/Nav';
import AirlieSection from './AirlieSection';
import Footer from '../../footer/Footer';

const AirliePage = () => {
  return (
    <>
      <Nav />
      <AirlieSection />
      <Footer />
    </>
  );
};

export default AirliePage;
```

After refactoring the Route Switch file:

```js
import Nav from './components/navigation/Nav';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <UserCart.Provider value="hello from UserCart">
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/Airlie" element={<Airlie />} />
        </Routes>
      </UserCart.Provider>
    </BrowserRouter>
  );
};
```

This allowed me to pass my shopping-cart object (holding the users cart 'state' info ) into my Navigation component which is now available to every page.

I learned the Outlet Hook from React Router 6, which allowed me to have a standard navigation bar for all of my pages, except on the checkout page. I made two separate components, one with the Nav component and Outlet, and one without the Nav component:

```js
import { Outlet } from 'react-router';

const WithNav = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

const WithOutNav = () => {
  return (
    <>
      <Outlet />
    </>
  );
};
```

I was then able to import these into my router app, and the elements in a Route with either component:

```js
return (
    <BrowserRouter>
      <UserCart.Provider value={{ cart, setCart }}>
        <Routes>
          <Route element={<WithOutNav />}>
            <Route path="/Checkout" element={<Checkout />} />
          </Route>
          <Route element={<WithNav />}>
            <Route path="/" element={<App />} />
          </Route>
        </Routes>
      </UserCart.Provider>
    </BrowserRouter>
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

I added the checkBagQuantity() inside the functions which dealt with either adding or removing products from the cart. This allowed my cart icon and cart page to dynamically render whenever a product was added or removed, or the cart was cleared.

## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details

## Acknowledgments

- [The Odin Project](https://www.theodinproject.com)
- [Adobe XD Altura UI Kit](https://www.adobe.com/ca/products/xd/features/ui-kits.html)
- [Webpack](https://webpack.js.org/)
- [ESLint](https://eslint.org/)
- [Airbnb Style Guide](https://github.com/airbnb/javascript)
