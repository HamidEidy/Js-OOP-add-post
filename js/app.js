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
    ui.addPostToList(post)
    ui.clearfield();
    e.preventDefault();
})


