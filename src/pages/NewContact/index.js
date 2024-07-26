import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';
import Toast from '../../utils/toast';

export default function NewContact() {
  async function handleSubmit(formData) {
    const contact = {
      name: formData.name, email: formData.email, phone: formData.phone, category_id: formData.categoryId

    };

    try {
      await ContactsService.createContact(contact);

      Toast({
        type: 'success',
        text: 'Contato cadastrado com sucesso!'

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

      <ContactForm buttonLabel='Cadastrar' onSubmit={ handleSubmit }/>

    </>

  );

};
