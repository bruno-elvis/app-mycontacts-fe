import PropTypes from 'prop-types';

import { Container } from './styles';

import checkCircleIcon from '../../../assets/images/icons/checkCircle.svg';
import xCircleIcon from '../../../assets/images/icons/xCircle.svg';

function ToastMessage({ text, type }) {
  return <Container type={ type }>
            { type === 'success' && <img src={checkCircleIcon} alt='check'/> }
            { type === 'danger' && <img src={xCircleIcon} alt='X'/> }

            <strong>
              { text }

            </strong>

        </Container>

};

ToastMessage.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'danger'])

};

export default ToastMessage;
