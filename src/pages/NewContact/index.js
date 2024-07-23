import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function NewContact() {
  async function handleSubmit(formData) {
    const contact = {
      name: formData.name, email: formData.email, phone: formData.phone, category_id: formData.categoryId

    };

    try {
      await ContactsService.createContact(contact);

    } catch (error) { console.log(error); }

  };

  return (
    <>
      <PageHeader title='Novo contato'/>

      <ContactForm buttonLabel='Cadastrar' onSubmit={ handleSubmit }/>

    </>

  );

};
