import { useRef } from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

import ContactsService from '../../services/ContactsService';

import Toast from '../../utils/toast';


export default function NewContact() {
  const contactFormRef = useRef(null);

  async function handleSubmit(formData) {
    const contact = {
      name: formData.name, email: formData.email, phone: formData.phone, category_id: formData.categoryId

    };

    try {
      await ContactsService.createContact(contact);

      contactFormRef.current.resetFields();

      Toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!',
        duration: 3000

      });

    } catch {
      Toast({
        type: 'danger',
        text: 'Ocorreu um erro ao cadastrar o contato!'

      });

    };

  };

  return (
    <>
      <PageHeader title='Novo contato'/>

      <ContactForm
        ref={ contactFormRef }
        buttonLabel='Cadastrar'
        onSubmit={ handleSubmit }/>

    </>

  );

};
