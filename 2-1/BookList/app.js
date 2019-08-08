//Book Constructor
function Book(title, author, isbn){
	this.title = title;
	this.author = author;
	this.isbn = isbn;
}

//UI constructor
function UI() {}

UI.prototype.addBookToList = function(book){
	const list = document.getElementById('book-list');
	const row =document.createElement('tr');
	//Insert cols
	row.innerHTML=`
<td>${book.title}</td>
<td>${book.author}</td>
<td>${book.isbn}</td>
<td><a href="#" class="delete">X</a></td>
`;
	list.appendChild(row);
	console.log(row);
};

UI.prototype.clearBook = function(){
	document.getElementById('title').value='';
	document.getElementById('author').value='';
	document.getElementById('isbn').value='';
};

//Event Listeners
document.getElementById('book-form').addEventListener('submit',
	function(e){
		const title = document.getElementById('title').value,
			author = document.getElementById('author').value,
			isbn = document.getElementById('isbn').value;

		const book = new Book(title, author, isbn);
		const ui = new UI();

		ui.addBookToList(book);

		console.log(book);

		e.preventDefault();

});
