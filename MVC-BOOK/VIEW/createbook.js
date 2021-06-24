init.view.createbook={
    show:()=>{
        document.forms['Book'].addEventListner('click',init.views.createbook.make);
        //Book.loadAll();
    },
    make:()=>{
        var data=document.forms['Book'];
        var book={
             isbn:data.isbn.value,
             title:data.title.value,
             year:data.title.value
        }
        Book.create(book);
        data.reset();
        
    }
}