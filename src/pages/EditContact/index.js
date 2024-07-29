import { useEffect, useRef, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import Loader from '../../components/Loader';

import ContactsService from '../../services/ContactsService';
import Toast from '../../utils/toast';


export default function EditContact() {
  const { id } = useParams();
  const [contactName, setContactName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const contactFormRef = useRef(null);

  async function handleSubmit(formData) {
    const contact = {
      name: formData.name, email: formData.email, phone: formData.phone, category_id: formData.categoryId

    };

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

        contactFormRef.current.setFieldsValues(contactData);

        setContactName(contactData.name);

        setIsLoading(false);

      } catch {
        history.push('/');

        Toast({ type: 'danger', text: 'Contato não encontrado!' });

        setIsLoading(false);

      };

    })();

  }, [id, history]);


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
