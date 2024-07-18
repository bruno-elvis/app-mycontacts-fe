import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Overlay } from './styles';
import { Spinner } from '../Spinner';

export default function Loader ({ isloading }) {
  if (!isloading) return null;

  return createPortal(
    <Overlay>
      <Spinner size={90} />

    </Overlay>,

    document.getElementById('loader-root')

  );

};

Loader.propTypes = {
  isloading: PropTypes.bool.isRequired

};
