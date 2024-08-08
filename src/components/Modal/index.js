import { Container, Overlay, Footer } from './styles';

import Button from '../Button';
import ReactPortal from '../ReactPortal';

import PropTypes from 'prop-types';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';


export default function Modal({ title,
                                danger = false,
                                children,
                                cancelLabel='Cancelar',
                                confirmLabel='Confirmar',
                                onConfirm,
                                onCancel,
                                visible,
                                isLoading = false

                              }) {

  const { animatedElementRef, shouldRender } = useAnimatedUnmount(visible);

  if(!shouldRender) return null;


  return <ReactPortal containerId='modal-root'>
            <Overlay ref={ animatedElementRef } isleaving={ !visible } >
              <Container danger={ danger } >
                <h1>
                { title }

                </h1>

                <div className='modal-body'>{ children }</div>

                <Footer>
                  <button
                    type='button'
                    className='cancel-button'
                    onClick={ onCancel }
                    disabled={ isLoading }>

                      { cancelLabel }

                  </button>

                  <Button
                    type='button'
                    danger={ danger }
                    onClick={ onConfirm }
                    isLoading={ isLoading } >

                      { confirmLabel }

                  </Button>

                </Footer>

              </Container>

            </Overlay>

          </ReactPortal>

};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  danger: PropTypes.bool,
  children: PropTypes.node.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool

};
