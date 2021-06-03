class Book{
    constructor(isbn,title,year){
        this.isbn=isbn;
        this.title=title;
        this.year=year;
    }

    instance = {};
    static loadAll(){
        const books=window.localStorage.getItem('books');
        const parsedbooks= JSON.stringify(books);
        this.instance={...parsedbooks};
        return parsedbooks;
    }
    

}