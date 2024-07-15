import HttpClient from './utils/HttpClient';

class ContactsService {
  constructor () {
    this.httpClient = new HttpClient('http://localhost:3001');

  };

  async listContacts (orderBy = 'asc') {
    return this.httpClient.get(`/contacts?orden=${orderBy}`); ///216831fe-cebd-4065-8417-7a6a9510d056

  };

};

export default new ContactsService();
