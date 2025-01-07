

let books=JSON.parse(localStorage.getItem('books'))||[];


function saveBooks(){
    localStorage.setItem('books',JSON.stringify(books));
}



sessionStorage.setItem("islogged","false");
const btndisplay=document.querySelectorAll(".afterlogin");
const btnhide=document.getElementById("login")
const btnlogout=document.getElementById("logout")
const loginform=document.getElementById('container2');
const managebtn=document.getElementById('manage');
const managebox=document.getElementById('manageBox');
const mainpage=document.getElementById('mainpage')
const addbookpop=document.getElementById('addbookblock');
const addbookbtn=document.getElementById('addBook');
let bookName=document.getElementById('addinput1').value;
let bookCover=document.getElementById('addinput2').files[0];
let bookAuthor=document.getElementById('addinput3').value;
let bookrating=document.getElementById('addinput4').value;
const bookGenre=document.getElementById('addinput5').value;



function addBook(){
    console.log("books added");
    if (bookName !== '' && bookAuthor !== '' && bookCover) {
        const reader = new FileReader();
        console.log("inside if");
        reader.onload = function(e) {
            console.log("annoymous function");
            const book = { 
                
                title: bookNitle, 
                author: bookAuthor, 
                rating:bookrating,
                genre:bookGenre,
                cover: e.target.result, 
                isEditing: false 
            };
            books.push(book);
            // document.getElementById('bookTitle').value = '';
            // document.getElementById('bookAuthor').value = '';
            // document.getElementById('bookDate').value = '';
            // document.getElementById('bookCover').value = '';
            bookName='';
            bookAuthor='';
            bookCover='';
            bookGenre='';
            bookrating='';
            saveBooks();
            renderBooks();
        };
        reader.readAsDataURL(bookCover);
}
}


function deleteBook(index) {
    books.splice(index, 1);
    saveBooks();
    renderBooks();
}

function toggleEditBook(index) {
    books[index].isEditing = !books[index].isEditing;
    renderBooks();
}

function saveBook(index) {
    const editTitle = document.getElementById(`editName-${index}`).value.trim();
    const editAuthor = document.getElementById(`editAuthor-${index}`).value.trim();
    const editRating = document.getElementById(`editRating-${index}`).value.trim();
    const editGenre = document.getElementById(`editGenre-${index}`).value.trim();
    const editCover = document.getElementById(`editCover-${index}`).files[0];

    if (editTitle !== '' && editAuthor !== '' && !isNaN(editDate)) {
        if (editCover) {
            const reader = new FileReader();
            reader.onload = function(e) {
                books[index].cover = e.target.result;
                books[index].title = editTitle;
                books[index].author = editAuthor;
                books[index].rating = editRating;
                books[index].genre = editGenre;
                
                books[index].isEditing = false;
                saveBooks();
                renderBooks();
            };
            reader.readAsDataURL(editCover);
        } else {
            books[index].title = editTitle;
            books[index].author = editAuthor;
            books[index].rating = editRating;
            books[index].genre = editGenre;
            books[index].isEditing = false;
            saveBooks();
            renderBooks();
        }
    }
}

function renderBooks(){
    console.log("render function");
    const bookTableBody = document.querySelector('#manageBox tbody');
    bookTableBody.innerHTML = '';
    books.forEach((book, index) => {
        const row = document.createElement('tr');
        if (book.isEditing) {
            row.innerHTML = `
                <td><input type="file" id="editCover-${index}" accept="image/*"></td>
                <td><input type="text" id="editTitle-${index}" value="${book.title}"></td>
                <td><input type="text" id="editAuthor-${index}" value="${book.author}"></td>
                <td><input type="text" id="editGenre-${index}" value="${book.author}"></td>
                <td><input type="number" id="editRating-${index}" value="${book.author}"></td>
                
                <td>
                    <button onclick="saveBook(${index})">Save</button>
                    <button onclick="toggleEditBook(${index})">Cancel</button>
                </td>
            `;
        } else {
            console.log("printing data");
            row.innerHTML = `
                <td><img src="${book.cover}" alt="Cover Image" style="width: 50px; height: 75px;"></td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.date.toLocaleDateString()}</td>
                <td>
                    <button onclick="toggleEditBook(${index})">Edit</button>
                    <button onclick="deleteBook(${index})">Delete</button>
                </td>
            `;
        }
        bookTableBody.appendChild(row);
    });

}

function logged(){
    loginform.style.display="flex";
    console.log("pressed");
}

btnlogout.addEventListener("click",()=>{
    sessionStorage.setItem("islogged","false");
    history.go(0);
})

function authenticate(){
    const user=document.getElementById('username');
    const pass=document.getElementById('pwd');
    
    if(user.value==="admin" && pass.value==="admin123")
    {
        sessionStorage.setItem("islogged","true");
        btndisplay.forEach(element =>{
            element.classList.add('afterloginbtn');
        });
        btnhide.style.display="none";
        loginform.style.display="none";
    }
    else{
        alert("Wrong credentials");
    }

}

function manage(){
    managebox.style.display='flex';
    mainpage.style.display='none';

}

addbookbtn.addEventListener('click',()=>{
    addbookpop.style.display='flex';
    console.log("addbtn");
})

function goBack(){
    addbookpop.style.display='none';
    inputadd1="";
    inputadd2="";
    inputadd3="";
    inputadd4="";
}