import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay } from './styles';

export default function Loader ({ isloading }) {
  if (!isloading) return null;

  return createPortal(
    <Overlay>
      <div className='loader' />

    </Overlay>,

    document.getElementById('loader-root')

  );

};

Loader.propTypes = {
  isloading: PropTypes.bool.isRequired

};
