import { library } from "../index.js";
import { Storage } from "./storage.js";

/* Display books in DOM */
const writeBook = (book) => {
  return library.innerHTML += `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>
        <button type="button" class="remove">Remove</button>
      </td>
    </tr>
  `
};

class UI {
  static displayBook = () => {
    let cabinet = Storage.getBook();
    cabinet.map(writeBook).join('');
  }

  /* Delete book */
  static deleteBook = (title) => {
    let cabinet = Storage.getBook();
    cabinet.forEach((book, index) => {
      if (book.title === title) {
        cabinet.splice(index, 1)
      }
    });
    localStorage.setItem('books list', JSON.stringify(cabinet));
  }
}

export {writeBook, UI};