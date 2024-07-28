import PropTypes from 'prop-types';

import { Container } from './styles';

import checkCircleIcon from '../../../assets/images/icons/checkCircle.svg';
import xCircleIcon from '../../../assets/images/icons/xCircle.svg';
import { useEffect } from 'react';

function ToastMessage({ message, onRemoveMessage }) {
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onRemoveMessage(message.id);

    }, message.duration || 5000)

    return () => clearTimeout(timeOutId);

  }, [message, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(message.id);

  };

  return <Container
              type={ message.type }
              onClick={handleRemoveToast}
              tabIndex={0}
              role='button' >
            { message.type === 'success' && <img src={checkCircleIcon} alt='check'/> }
            { message.type === 'danger' && <img src={xCircleIcon} alt='X'/> }

            <strong>
              { message.text }

            </strong>

        </Container>

};

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number
  }),
  onRemoveMessage: PropTypes.func.isRequired

};

export default ToastMessage;
