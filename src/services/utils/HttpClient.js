import { APIError } from '../../errors/APIError';

class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;

  };

  async get(path) {
    const response = await fetch(`${this.baseURL + path}`);

    let body = null;

    const responseType = response.headers.get('Content-Type');

    if (responseType.includes('application/json')) {
      body = await response.json();

    };

    if (response.ok) return body;

    throw new APIError(response, body);

  };

  async post(path, body) {
    const headers = new Headers({ 'Content-Type': 'application/json' });

    const response = await fetch(`${this.baseURL + path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers

    });

    let responseBody = null;

    const contentType = response.headers.get('Content-Type');

    if (contentType?.includes('application/json')) {
      responseBody = await response.json();

    };

    if (response.ok) return responseBody;

    throw new APIError(response, responseBody);

  };

  async put(path, body) {
    const headers = new Headers({ 'Content-Type': 'application/json' });

    const response = await fetch(`${this.baseURL + path}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers

    });

    let responseBody = null;

    const contentType = response.headers.get('Content-Type');

    if (contentType?.includes('application/json')) {
      responseBody = await response.json();

    };

    if (response.ok) return responseBody;

    throw new APIError(response, responseBody);

  };

};

export default HttpClient;
