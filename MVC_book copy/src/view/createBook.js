init.view.createBook = {
  setupUI: function () {
    const saveBtn = document.forms['Book'].commit; 
    Book.loadAll();
    saveBtn.addEventListener('click', ()=>{
        const formElement = document.forms['Book'];
        const book = {
        isbn: formElement.isbn.value,
        title: formElement.title.value,
        year: formElement.year.value,
    };
    Book.create(book);
    formElement.reset();
    });
  }
};
