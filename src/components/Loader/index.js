import { Overlay } from './styles';
import { Spinner } from '../Spinner';

import ReactPortal from '../ReactPortal';

import PropTypes from 'prop-types';
import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';


export default function Loader ({ isloading }) {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(isloading);

  if (!shouldRender) return null;

  return <ReactPortal containerId='loader-root'>
            <Overlay ref={ animatedElementRef } isleaving={ !isloading } >
              <Spinner size={90} />

            </Overlay>

          </ReactPortal>

};

Loader.propTypes = {
  isloading: PropTypes.bool.isRequired

};
