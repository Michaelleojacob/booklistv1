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
			const books = Store.getBooks();
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
		static deleteBook(targetEl) {
			if (targetEl.classList.contains('delete')) {
				targetEl.parentElement.parentElement.remove();
			}
		}

		static clearFields() {
			document.querySelector('#title').value = '';
			document.querySelector('#author').value = '';
			document.querySelector('#pages').value = '';
		}
	}
	class AlertArea {
		static makeAlertDivArea() {
			this.alertDiv = document.createElement('div');
			this.alertDiv.setAttribute('id', 'alertDiv');
			const form = document.querySelector('#book-form');
			form.prepend(this.alertDiv);
		}
		static clearText() {
			this.alertDiv.textContent = '';
		}
		static removeAlertAndText() {
			this.alertDiv.className = '';
			this.alertDiv.textContent = '';
		}
		static addSetTimeOut() {
			this.myVar = setTimeout(() => {
				AlertArea.removeAlertAndText();
			}, 3000);
		}
		static clearSetTimeOut() {
			clearTimeout(this.myVar);
		}
		static showAlert(str, info) {
			AlertArea.removeAlertAndText();
			AlertArea.clearSetTimeOut();
			this.alertDiv.classList.add('alert', `alert-${info}`);
			this.alertDiv.textContent = str;
			AlertArea.addSetTimeOut();
		}
	}
	AlertArea.makeAlertDivArea();
	class Store {
		static getBooks() {
			let books;
			if (localStorage.getItem('books') === null) {
				books = [];
			} else {
				books = JSON.parse(localStorage.getItem('books'));
			}
			return books;
		}
		static addBook(book) {
			const books = Store.getBooks();
			books.push(book);
			localStorage.setItem('books', JSON.stringify(books));
		}
		static removeBook(title) {
			const books = Store.getBooks();
			books.forEach((book, index) => {
				if (book.title === title) {
					books.splice(index, 1);
				}
			});
			localStorage.setItem('books', JSON.stringify(books));
		}
	}

	//event: display Books
	document.addEventListener('DOMContentLoaded', UI.displayBooks);
	//event: add a Book
	document.querySelector('#book-form').addEventListener('submit', e => {
		e.preventDefault();
		//get form values
		const title = document.querySelector('#title').value;
		const author = document.querySelector('#author').value;
		const pages = document.querySelector('#pages').value;
		//validate
		if (title === '') {
			return AlertArea.showAlert('Title is empty', 'danger');
		}
		if (author === '') {
			return AlertArea.showAlert('Author is empty', 'danger');
		}
		if (pages === '') {
			return AlertArea.showAlert('Pages is empty', 'danger');
		}
		if (isNaN(pages) === true) {
			return AlertArea.showAlert('Pages is not a number', 'danger');
		} else {
			//instantiate book
			const book = new Book(title, author, pages);
			//add book to ui
			UI.addBookToList(book);
			Store.addBook(book);
			//alert book was added
			AlertArea.showAlert('Book successfully added', 'success');
			//clear fields
			UI.clearFields();
		}
	});
	//event:remove a Book
	document.querySelector('#book-list').addEventListener('click', e => {
		if (e.target.className.includes('delete')) {
			UI.deleteBook(e.target);
			Store.removeBook(
				e.target.parentElement.parentElement.children[0].textContent
			);
			AlertArea.showAlert('Book was successfully removed', 'info');
		}
	});
}
