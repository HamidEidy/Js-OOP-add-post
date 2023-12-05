class Post {
    constructor(title, author, body) {
        this.title = title;
        this.author = author;
        this.body = body;
    }
}



class UI {
    addPostToList(post) {
        const list = document.getElementById("post-list");
        const row = document.createElement("tr");
        row.innerHTML = `
              <th> ${post.title} </th>
              <td>${post.author}</td>
              <td>${post.body}</td>
              <td> <i class="fas fa-times text-danger delete"></i> </td>
         `;
        list.appendChild(row);
    }
    showAlert(message, className) {
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const col = document.querySelector('.col-sm-8');
        const form = document.querySelector('#post-form');
        col.insertBefore(div, form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    clearfield() {
        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.getElementById("body").value = '';
    }

}




document.getElementById("post-form").addEventListener("submit", function (e) {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const body = document.getElementById("body").value;

    const post = new Post(title, author, body)

    const ui = new UI();

    if (title === '' | author === '' | body === '') {
        ui.showAlert('تمام فیلد هارا وارد کنید', 'danger');

    } else {
        ui.addPostToList(post);
        ui.showAlert('پست اضافه شد', 'success')
        ui.clearfield();
 
    }
    e.preventDefault();



})


