import PropTypes from 'prop-types';

import { StyledButton } from './styles';
import { Spinner } from '../Spinner';


function Button({
                  type = 'button',
                  disabled = false,
                  isLoading = false,
                  children,
                  danger,
                  onClick = undefined

                }) {
  return <StyledButton
            type={ type }
            disabled={ disabled || isLoading }
            danger={ danger }
            onClick={ onClick } >

            { !isLoading && children }
            { isLoading && <Spinner size={16}/> }

        </StyledButton>

};

Button.propTypes = {
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  danger: PropTypes.bool,
  onClick: PropTypes.func

};

export default Button;
