import axios from 'axios'

class HttpRequest { 
  async get(url, options= {}) {
    return axios.get(url, {...options})
  }

  async post (url,data, options = {}) {
    return axios.post(url, data, {...options})
  }
}

const httpRequest = new HttpRequest()

export default httpRequest