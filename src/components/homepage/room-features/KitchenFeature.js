import { NavLink } from 'react-router-dom';
import { KitchenImage } from './Styles';
import Kitchen from '../../../assets/images/rooms/kitchen.jpg';

const KitchenFeature = () => {
  return (
    <section>
      <KitchenImage src={Kitchen} alt="Kitchen" />
    </section>
  );
};

export default KitchenFeature;
