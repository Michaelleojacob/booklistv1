import './app.css';
export default function myapp() {
	//Book class: represents a Book
	class Book {
		constructor(title, author, pages) {
			this.title = title;
			this.author = author;
			this.pages = pages;
		}
	}

	//UI class: handle UI tasks
	class UI {
		static displayBooks() {
			const StoredBooks = [
				{
					title: 'Book one',
					author: 'John Doe',
					pages: '50',
				},
				{
					title: 'Book two',
					author: 'Jane Doe',
					pages: '75',
				},
			];

			const books = StoredBooks;

			books.forEach(book => UI.addBookToList(book));
		}
		static addBookToList(book) {
			const list = document.querySelector('#book-list');

			const row = document.createElement('tr');

			row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>`;

			list.appendChild(row);
		}
	}

	//Store class: handles Storage

	//event: display Books
	document.addEventListener('DOMContentLoaded', UI.displayBooks);

	//event: add a Book

	//event:remove a Book
}
