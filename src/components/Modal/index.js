import PropTypes from 'prop-types';

import { Container, Overlay, Footer } from './styles';

import Button from '../Button';

export default function Modal({ title, body, textButton, danger }) {
  return (
    <>
      <Overlay>
        <Container danger={ danger }>
          <h1>
           { title }

          </h1>

          <p>
            { body }

          </p>

          <Footer>
            <button type='button' className='cancel-button'>
              Cancelar

            </button>

            <Button type='button' danger={ danger }>
              { textButton }

            </Button>

          </Footer>

        </Container>

      </Overlay>

    </>

  );

};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  danger: PropTypes.bool

};

Modal.defaultProps = {
  danger: false

};
