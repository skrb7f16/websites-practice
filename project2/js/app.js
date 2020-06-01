console.log('welcome to library');
// alert('hello')
dis();
//books object
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}


function Display() {

}




// it is to clear the form after submission
Display.prototype.clear=function(){
    let libraryform = document.getElementById('libraryform');
    libraryform.reset();
}





//function for validation of the book
Display.prototype.validate = function(book){
    if(book.name.length<2||book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}



//function for showing the message after submission
Display.prototype.show= function(type,mess){
    let message= document.getElementById('message');
    message.innerHTML=`  <div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>Message!</strong> ${mess}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>`;
  setTimeout(function() {
      message.innerHTML=''
  }, 2000);
}







//submit event listener to the library form
let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    console.log('u have submitted form')
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    //type 
    let type;
    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    //assigning type
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    // creating a display object for displaying purpose
    let display = new Display;
    //checking for valid books
    if(display.validate(book)){
    bookstorage=localStorage.getItem('bookstorage')
    if(bookstorage==null){
        books=[]
    }
    else{
        books = JSON.parse(bookstorage);
    }
    books.push(book);
    localStorage.setItem('bookstorage',JSON.stringify(books));
    dis();
    display.clear();
    display.show('success','Your book has been added');
    
}
    else{
        display.show('danger','sorry You cannot add this book')
    }
}







//function to display the book in the table
function dis(){
    bookstorage=localStorage.getItem('bookstorage')
    if(bookstorage==null){
        books=[]
    }
    else{
        books = JSON.parse(bookstorage);
    }
    let s='';
    books.forEach(function(element,index) {
        
                s+=`<tr>
                <td>${index+1}</td>
                <td>${element.name}</td>
                <td>${element.author}</td>
                <td>${element.type}</td>
                <td><a class='btn' id='${index}' onclick="deleteBook(this.id)">Delete</a></td>
            </tr>`;
        });
    let tbody= document.getElementById('tbody');
  tbody.innerHTML=s;
}





//function to delete the book from book storage
function deleteBook(bookno){
    console.log('Deleting your',bookno)
    bookstorage=localStorage.getItem('bookstorage')
    if(bookstorage==null){
        books=[]
    }
    else{
        books = JSON.parse(bookstorage);
    }

    books.splice(bookno,1);
    localStorage.setItem('bookstorage', JSON.stringify(books));
    dis();

}