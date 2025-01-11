function displayBorrowed() {
    const bookborrow = JSON.parse(localStorage.getItem('borrowedBook'));
    if (book) {
        const bookDetails = document.getElementById('container');
        bookDetails.innerHTML = `
            <img src="${book.cover}" alt="Cover Image" style="width: 100px; height: 150px;">
            <h2>${book.title}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
        `;
    } else {
        document.getElementById('bookDetails').innerHTML = '<p>No book borrowed.</p>';
    }
}
// displayBorrowed();
console.log("he");