const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//Adds some default books into library for styling purposes
function addDefaultBooks(){
    const Book_1 = new Book('The Hobbit', 'JRR Tolkein', 500, false);
    const Book_2 = new Book('Dune', 'Frank Herbert', 450, false);
    const Book_3 = new Book('Dune Messiah', 'Frank Herbert', 740, false);
    const Book_4 = new Book('A New Hope', 'George Lucas', 340, false);
    const Book_5 = new Book('The Empire Strikes Back', 'George Lucas', 540, false);

    myLibrary.push(Book_1);
    myLibrary.push(Book_2);
    myLibrary.push(Book_3);
    myLibrary.push(Book_4);
    myLibrary.push(Book_5);
}
addDefaultBooks();

console.log(myLibrary)


function addBookToLibrary(userInput){

    
}



function displayBooks(){
    let library = document.querySelector('#Library');
    
    myLibrary.forEach((book) => {
        let book_container = document.createElement("div");
        book_container.classList.add("book");

        let book_title = document.createElement("h1");
        book_title.classList.add("b-title");
        book_title.textContent = book.title;

        let book_author = document.createElement("h3");
        book_author.classList.add("b-author");
        book_author.textContent = book.author;
        
        let book_pages = document.createElement("p");
        book_pages.classList.add("b-pages");
        book_pages.textContent = book.pages;

        let book_status = document.createElement("p");
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

