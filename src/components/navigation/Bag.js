import BagIcon from '../../assets/images/icons/navbar/Bag.svg';

const Bag = () => {
  return (
    <div className="bag__div">
      <div className="bag">
        <img
          src={BagIcon}
          className="nav__icons"
          alt="shopping cart"
          id="bag"
        />
      </div>
    </div>
  );
};

export default Bag;
