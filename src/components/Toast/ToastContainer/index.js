import { useState, useEffect } from 'react';

import ToastMessage from '../ToastMessage';

import { Container } from './styles';

import { toastEventManager } from '../../../utils/toast';

function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessages((prevState) => [
        ...prevState,
        { id: Math.random(), type, text }

      ]);

    };

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.on('addtoast', handleAddToast);

    };

  }, []);

  function handleRemoveMessage(id) {
    setMessages(prevState => prevState.filter(message => message.id !== id));

  };

  return <Container>
            { messages.map((message) => <ToastMessage
                                          key={message.id}
                                          id={message.id}
                                          type={message.type}
                                          text={message.text}
                                          onRemoveMessage={handleRemoveMessage}

                                        />)
            }

         </Container>

};

export default ToastContainer;
