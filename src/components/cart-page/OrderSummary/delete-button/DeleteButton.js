import Delete from '../../../../assets/images/icons/cart-counter/delete-black.png';
import { StyledDeleteButton, StyledDeleteIcon } from './Styles';

const DeleteButton = ({ onClick }) => {
  return (
    <StyledDeleteButton onClick={onClick}>
      <StyledDeleteIcon src={Delete} alt="delete-button"></StyledDeleteIcon>
    </StyledDeleteButton>
  );
};

export default DeleteButton;
