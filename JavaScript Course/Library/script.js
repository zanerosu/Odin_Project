const myLibrary = [];

class myBook{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const testBook = new myBook('Bruh', 'Frank Herbert', 450, false);

console.log(testBook);

//Adds some default books into library for styling purposes
function addDefaultBooks(){
    const Book_1 = new myBook('The Hobbit', 'JRR Tolkein', 500, false);
    const Book_2 = new myBook('Dune', 'Frank Herbert', 450, false);
    const Book_3 = new myBook('Dune Messiah', 'Frank Herbert', 740, false);
    const Book_4 = new myBook('A New Hope', 'George Lucas', 340, false);
    const Book_5 = new myBook('The Empire Strikes Back', 'George Lucas', 540, false);

    myLibrary.push(Book_1);
    myLibrary.push(Book_2);
    myLibrary.push(Book_3);
    myLibrary.push(Book_4);
    myLibrary.push(Book_5);
}
addDefaultBooks();


//Test comment
const library = document.querySelector('#Library');
const page_header = document.querySelector("#Page-Header");

const btn_newBook = document.querySelector("#new-book-btn");
const page_content = document.querySelector("#page-content");

btn_newBook.addEventListener('click', (event)=>{
    new_book_dialog.showModal();
    page_content.style.filter = "brightness(30%)";
});

const btn_create = document.querySelector('#create-book');
const btn_cancel = document.querySelector('#cancel-book');
const new_book_dialog = document.querySelector("#form-dialog");

btn_cancel.addEventListener('click', ()=> {
    new_book_dialog.close("No book created")
    page_content.style.filter = "brightness(100%)";
});

btn_create.addEventListener('click', ()=>{
    event.preventDefault();
    new_book_dialog.close("No book created")
    page_content.style.filter = "brightness(100%)"
    addBookToLibrary();
    displayBooks();
    document.querySelector('#input-title').value = '';
    document.querySelector('#input-author').value = '';
    document.querySelector('#input-pages').value = '';
    document.querySelector('#input-status').checked = false;
})


function addBookToLibrary(){
    const new_title = document.querySelector('#input-title').value;
    const new_author = document.querySelector('#input-author').value;
    const new_pages = document.querySelector('#input-pages').value;

    let new_status = document.querySelector('#input-status').checked;
    console.log(new_status);

    //Change for class.
    let new_Book = new myBook(new_title, new_author, new_pages, new_status);
    myLibrary.push(new_Book);
}

function displayBooks(){
    library.innerHTML = '';
    myLibrary.forEach((book) => {
        const book_container = document.createElement("div");
        book_container.classList.add("book");

        const book_title = document.createElement("h1");
        book_title.classList.add("b-title");
        book_title.textContent = book.title;

        const book_author = document.createElement("h3");
        book_author.classList.add("b-author");
        book_author.textContent = book.author;
        
        const book_pages = document.createElement("p");
        book_pages.classList.add("b-pages");
        book_pages.textContent = book.pages;

        const book_status = document.createElement("p");
        book_status.classList.add("b-status");
        book_status.textContent = book.read ? "Read" : "Not Read";

        book_container.appendChild(book_title);
        book_container.appendChild(book_author);
        book_container.appendChild(book_pages);
        book_container.appendChild(book_status);

        library.appendChild(book_container);
    });
};

displayBooks();

