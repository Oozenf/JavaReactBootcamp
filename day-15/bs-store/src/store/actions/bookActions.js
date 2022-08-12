import BookService from "../../services/BookService";
export const GET_ALL_BOOKS = "GET_ALL_BOOKS";
export const GET_ONE_BOOK = "GET_ONE_BOOK"
export const DELETE_ONE_BOOK = "DELETE_ONE_BOOK";
export const POST_ONE_BOOK = "POST_ONE_BOOK";
export const PUT_ONE_BOOK = "PUT_ONE_BOOK";

const bookService = new BookService();

export function getAllBooks() {
  return function (dispatch) {
    bookService
      .getAllBooks()
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: GET_ALL_BOOKS, payload: resp }));
  };
}

// Servise gitmeden Store üzerinden okuma yap!
export function getOneBook(id) {
    return function (dispatch) {
      dispatch({ type: GET_ONE_BOOK, payload: id });
    };
  }

export function deleteOneBook(id,accessToken) {
  return function (dispatch) {
    bookService
      .deleteOneBook(id,accessToken)
      .then(() => dispatch({ type: DELETE_ONE_BOOK, payload: id }));
  };
}

export function postOneBook(book,accessToken) {
  return function (dispatch) {
    bookService
      .postOneBook(book,accessToken)
      .then((resp) => resp.data)
      .then((resp) => console.log(resp))
      .then((resp) => dispatch({ type: POST_ONE_BOOK, payload: resp }));
  };
}
export function putOneBook(id,book) {
  return function (dispatch) {
    bookService
      .putOneBook(id,book)
      .then((resp) => resp.data)
      .then((resp) => dispatch({ type: POST_ONE_BOOK, payload: resp }));
  };
}
