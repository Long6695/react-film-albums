import axios from 'axios';

class HttpRequest {
  async get(url, options = {}) {
    return axios.get(url, { ...options });
  }

  async post(url, data, options = {}) {
    return axios.post(url, data, { ...options });
  }

  async delete(url, id, options = {}) {
    return axios.delete(`${url}/${id}`, { ...options });
  }

  async put(url, id, data, options = {}) {
    return axios.put(`${url}/${id}`, data, { ...options });
  }
}

const httpRequest = new HttpRequest();

export default httpRequest;
