import axios from "axios";

class BookService{
    constructor(){
        this.baseUrl = `${process.env.REACT_APP_BASE_ENDPOINT}/books`;
    }

    async getAllBooks(){
        return await axios.get(this.baseUrl).then(resp => resp.data);
    }

    async getOneBook(id){
        const url = `${this.baseUrl}/${id}`;
        return await axios.get(url).then(resp => resp.data);
    }

    async postOneBook(payload,accessToken){
        const url = this.baseUrl;
        const config = {
            url,
            data: payload,
            method: "post",
            headers: {
              Authorization: accessToken,
            },
          };
        return await axios(config).then(resp => resp.data);
    }

    async putOneBook(id,payload){
        const url = `${this.baseUrl}/${id}`;
        return await axios.put(url,payload).then(resp => resp.data);
    }

    async deleteOneBook(id, accessToken){
        const url = `${this.baseUrl}/${id}`;
        const config = {
            url,
            method: "delete",
            headers: {
              Authorization: accessToken,
            },
          };
        return await axios(config).then(resp => resp);
    }
}

export default BookService;