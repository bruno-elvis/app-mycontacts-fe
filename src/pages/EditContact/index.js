import { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';

import ContactsService from '../../services/ContactsService';
import useSafeAsyncAction from '../../hooks/useSafeAsyncAction';

import Toast from '../../utils/toast';


export default function EditContact() {
  const { id } = useParams();
  const [contactName, setContactName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const contactFormRef = useRef(null);
  const safeAsyncAction = useSafeAsyncAction();

  async function handleSubmit(contact) {
    try {
      const updatedContact = await ContactsService.updateContact(id, contact);

      setContactName(updatedContact.name);

      Toast({
        type: 'success',
        text: 'Contato editado com sucesso!',
        duration: 3000

      });

    } catch {
      Toast({
        type: 'danger',
        text: 'Ocorreu um erro ao editar o contato!'

      });

    };

  };

  useEffect(() => {
    (async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id);

        safeAsyncAction(() => {
          contactFormRef.current.setFieldsValues(contactData);

          setContactName(contactData.name);

          setIsLoading(false);

        });

      } catch {
        safeAsyncAction(() => {
          history.push('/');

          Toast({ type: 'danger', text: 'Contato não encontrado!' });

          setIsLoading(false);

        });

      };

    })();

  }, [id, history, safeAsyncAction]);


  return (
    <>
      <Loader isloading={ isLoading } />

      <PageHeader title={ isLoading ? 'Carregando...' : `Editar ${contactName}` } />

      <ContactForm
        ref={ contactFormRef }
        buttonLabel='Salvar alterações'
        onSubmit={ handleSubmit } />

    </>

  );

}
