import axios from "axios";

class AuthorService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASE_ENDPOINT}/authors`;
  }

  async getAllAuthors() {
    return await axios
      .get(this.baseUrl)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async getOneAuthor(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios
      .get(url)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async postOneAuthor(payload,accessToken) {
      const url = this.baseUrl;
        const config = {
            url,
            data: payload,
            method: "post",
            headers: {
              Authorization: accessToken,
            },
          };
        return await axios(config).then(resp => resp.data).catch((err) => console.log(err));
  }

  async putOneAuthor(id, author) {
    return await axios
      .put(id, author)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async deleteOneAuthor(id,accessToken) {
    const url = `${this.baseUrl}/${id}`;

    const config = {
      url,
      method:"delete",
      headers: {
        Authorization: accessToken,
      },
    };

    return await axios(config).then(resp => resp).catch((err) => console.error("DELETE ERROR", err));


  }
}

export default AuthorService;
