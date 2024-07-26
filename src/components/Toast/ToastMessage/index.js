import PropTypes from 'prop-types';

import { Container } from './styles';

import checkCircleIcon from '../../../assets/images/icons/checkCircle.svg';
import xCircleIcon from '../../../assets/images/icons/xCircle.svg';

function ToastMessage({ id, text, type, onRemoveMessage }) {
  function handleRemoveToast() {
    onRemoveMessage(id);

  };

  return <Container type={ type } onClick={handleRemoveToast}>
            { type === 'success' && <img src={checkCircleIcon} alt='check'/> }
            { type === 'danger' && <img src={xCircleIcon} alt='X'/> }

            <strong>
              { text }

            </strong>

        </Container>

};

ToastMessage.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger']),
  onRemoveMessage: PropTypes.func.isRequired

};

export default ToastMessage;
