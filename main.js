function addBook() {
    const idValue = id.value.trim();
    const bookNameValue = bookName.value.trim();
    const authorValue = author.value.trim();
    const describValue = describ.value.trim();

    if (idValue === '') {
        document.getElementById("error_1").innerHTML = "Book id cannot be blank";
        return;
    } else if (bookNameValue === '') {
        document.getElementById("error").innerHTML = "Book name cannot be blank";
        return;
    } else if (authorValue === '') {
        document.getElementById("error_2").innerHTML = "Author cannot be blank";
        return;
    } else {
        if (bookNameValue in localStorage) {
            document.getElementById("error").innerHTML = "Book already added";
        } else {
            var collection = { id: idValue, bookName: bookNameValue, author: authorValue, describ: describValue };
            localStorage.setItem(bookNameValue, JSON.stringify(collection));
            document.querySelectorAll('input').forEach(input => input.value = '');
            document.getElementById('describ').value = "";
            document.getElementById("error_1").innerHTML = "";
            document.getElementById("error").innerHTML = ""; 
            document.getElementById("error_2").innerHTML = "";

        }
    }
}

function search() {
    const searchBookName = document.getElementById("bookName").value;
    const detailsContainer = document.querySelector(".details");
    if (searchBookName in localStorage) {
        const searchobj = JSON.parse(localStorage.getItem(searchBookName));
        document.getElementById("id_1").innerHTML = searchobj.id;
        document.getElementById("name_1").innerHTML = searchobj.bookName;
        document.getElementById("author_1").innerHTML = searchobj.author;
        detailsContainer.style.display = "block";
        setTimeout(function () {
            detailsContainer.style.display = "none";
        }, 7000);
    } else {
        alert("book not found!!!!")
    }
}

