import { useState, useEffect } from 'react';
import CategoryBar from './department-navbar/CategoryBar';
import HeroHome from './hero/HeroHome.js';
import Showcase from './department-showcase/Showcase';
import chairProducts from '../../utils/chairProducts';
import OfficeFeature from './room-features/OfficeFeature';
import BedroomFeature from './room-features/BedroomFeature';
import KitchenFeature from './room-features/KitchenFeature';
import Footer from '../footer/Footer';

const Home = () => {
  const [newIn, setNewIn] = useState([]);

  const getFirstFourProducts = () => {
    const firstFourProducts = [];

    for (let i = 0; i < 4; i++) {
      const product = chairProducts[i];
      firstFourProducts.push(product);
    }
    setNewIn(firstFourProducts);
  };

  useEffect(() => {
    getFirstFourProducts();
  }, []);

  const getNextFourProducts = () => {
    const nextFourProducts = [];

    for (let i = 4; i < 8; i++) {
      const product = chairProducts[i];
      nextFourProducts.push(product);
    }
    setNewIn(nextFourProducts);
  };

  const handleForwardClick = () => getNextFourProducts();
  const handleBackwardClick = () => getFirstFourProducts();

  return (
    <>
      <CategoryBar />
      <HeroHome />
      <Showcase
        chairs={newIn}
        forward={handleForwardClick}
        backward={handleBackwardClick}
      />
      <OfficeFeature />
      <BedroomFeature />
      <KitchenFeature />
      <Footer />
    </>
  );
};

export default Home;
