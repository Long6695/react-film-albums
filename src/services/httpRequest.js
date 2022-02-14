import axios from 'axios'

class HttpRequest { 
  async getFilms(url, options= {}) {
    return axios.get(url, options)
  }
}

const httpRequest = new HttpRequest()

export default httpRequest