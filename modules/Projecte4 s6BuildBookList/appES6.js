class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}

class UI{
    addBookToList(book){
        const list =document.getElementById('book-list');
        // Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;
        list.appendChild(row);
    }
    
    showAlert(message,className){
        // Create div
        const div = document.createElement('div');
        //Add classes
        div.className=`alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parrent 
        const container= document.querySelector('.container');
        // Get form
        const form=document.querySelector('#book-form');
        // Insert alert
        container.insertBefore(div,form);
        
        // Timeout after 3 second
        setTimeout(function(){
           document.querySelector('.alert').remove(); 
        },3000);    
    }
    
    deleteBook(target){
        if(target.className==='delete'){
            target.parentElement.parentElement.remove();
        }
    }
    
    clearFields(){
        document.getElementById('title').value='';
        document.getElementById('author').value='';
        document.getElementById('isbn').value='';
    }
}

// Local Storage Class
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books')===null){
            books=[];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    
    static displayBook(){
        
    }
    
    static addBook(book){
        const books = Store.getBooks();
        
        books.push(book);
        
        localStorage.setItem('books',JSON.stringify(books));
    }
    
    static romoveBook(){
        
    }
}


// Event Listeners for add book
document.getElementById('book-form').addEventListener('submit',function(e){
    // Get form values
    const title= document.getElementById('title').value,
          author= document.getElementById('author').value,
          isbn=document.getElementById('isbn').value;
          
    // Instantiate 
    const book = new Book(title,author,isbn);
    
    // Instantiate UI
    const ui = new UI();
    console.log(ui);
    // Validate
    if(title==='' || author === '' || isbn===''){
        // Error alert
        ui.showAlert('Please fill in all fields','error');
        
    }else{
        // Add book to list
        ui.addBookToList(book);
        
        // Add to LS
        Store.addBook(book);
        
        // Show succes
        ui.showAlert('Book Added!','succes');
        
        // Clear fields
        ui.clearFields(); 
    }
    
    e.preventDefault();
});

// Event listener for delete
document.getElementById('book-list').addEventListener('click',function(e){
    // Instantiate UI
    const ui = new UI();
    ui.deleteBook(e.target);
    
    // Show message
    ui.showAlert('Book Removed!','succes');
    
    e.preventDefault();
})