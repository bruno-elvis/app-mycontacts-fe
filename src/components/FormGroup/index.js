import PropTypes from 'prop-types';

import { Container } from './styles';

export default function FormGroup({ children }) {
  return (
    <Container>
      { children }

    </Container>

  );

};

FormGroup.PropTypes = {
  children: PropTypes.node.isRequired

};
