class Book {
    constructor(isbn, title, year) {
      this.isbn = isbn;
      this.title = title;
      this.year = year;
    }
   
  
    instances = {}; //object intilization //membe varaibale
  
    static loadAll() { // function based constructor
      const books = window.localStorage.getItem('books'); // geting data from localstorage 
  
      const parsedBooks = JSON.parse(books);  //converts text to JavaScript Object
  
      this.instances = { ...parsedBooks };
  
      return parsedBooks;
    }

    static save() { //Single books
        const books = JSON.parse(window.localStorage.getItem('books'));
        const updatedBooks = JSON.stringify({ ...books, ...this.instances });
    
        try {
          window.localStorage.setItem('books', updatedBooks);
        } catch {
          throw Error('Can not save books to local storage');
        }
      }
      static create({ isbn, title, year }) {
        const book = new Book(isbn, title, year);
    
        const updatedInstances = { ...this.instances }; //Array + geting the exisitng books instances
    
        updatedInstances[`${isbn}`] = book;
    
        this.instances = updatedInstances;
    
        Book.save();
      }

}