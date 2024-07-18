import PropTypes from 'prop-types';

import { Container } from './styles';
import { Spinner } from '../Spinner';

export default function FormGroup({ children, error = false, isloading = false }) {
  return (
    <Container>
      <div className='form-item'>
        { children }

        { isloading && <div className='loader'><Spinner size={16} /></div> }

      </div>

      { error && <small>{ error }</small> }

    </Container>

  );

};

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.bool,
  isloading: PropTypes.bool

};
