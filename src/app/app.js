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
		static showAlertAndAddText(str, info) {
			AlertArea.removeAlertAndText();
			this.alertDiv.classList.add('alert', `alert-${info}`);
			this.alertDiv.textContent = str;
		}
	}
	AlertArea.makeAlertDivArea();
	//Store class: handles Storage
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
			return AlertArea.showAlertAndAddText('Title is empty', 'danger');
		}
		if (author === '') {
			return AlertArea.showAlertAndAddText('Author is empty', 'danger');
		}
		if (pages === '') {
			return AlertArea.showAlertAndAddText('Pages is empty', 'danger');
		}
		if (isNaN(pages) === true) {
			return AlertArea.showAlertAndAddText('Pages is not a number', 'danger');
		} else {
			//instantiate book
			const book = new Book(title, author, pages);
			//add book to ui
			UI.addBookToList(book);
			AlertArea.showAlertAndAddText('Book successfully added', 'success');
			//clear fields
			UI.clearFields();
		}
	});
	//event:remove a Book
	document.querySelector('#book-list').addEventListener('click', e => {
		UI.deleteBook(e.target);
	});
}
