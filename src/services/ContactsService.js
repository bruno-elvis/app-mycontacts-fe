import HttpClient from './utils/HttpClient';

import ContactMapper from './mappers/ContactMapper';


class ContactsService {
  constructor () {
    this.httpClient = new HttpClient('http://localhost:3001');

  };

  async listContacts(orderBy = 'asc') {
    const listContacts = await this.httpClient.get(`/contacts?orden=${orderBy}`);

    return listContacts.map(ContactMapper.toDomain);

  };

  async getContactById(id) {
    const contact = await this.httpClient.get(`/contacts/${id}`);

    return ContactMapper.toDomain(contact);

  };

  createContact(contact) {
    const contactMapped = ContactMapper.toPersistence(contact);

    return this.httpClient.post('/contacts', contactMapped);

  };

  updateContact(id, contact) {
    const contactMapped = ContactMapper.toPersistence(contact);

    return this.httpClient.put(`/contacts/${id}`, contactMapped);

  };

  deleteContact(id) {
    return this.httpClient.delete(`/contacts/${id}`);

  };

};

export default new ContactsService();
