let url = new URL(window.location.href);
let postId = url.searchParams.get('id');

let blockPost=document.createElement("blockPost");

let buttonComment=document.createElement("button");
buttonComment.classList.add("button_comment");
buttonComment.innerText='comments';

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
            console.log(post);
            let divBlockPost = document.createElement('div');
            divBlockPost.classList.add('div_post');
            divBlockPost.innerText = `
            userId: ${post.userId},
            id: ${post.id},
            title: ${post.title},
            body:${post.body}, `;

            blockPost.appendChild(divBlockPost);
            document.body.append(blockPost,buttonComment);
    })

let commentContainer = document.createElement('div');
commentContainer.classList.add('posts_container');

buttonComment.onclick = function () {

    commentContainer.innerHTML = ''; //  очищення

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then(res => res.json())
    .then(comments => {
        console.log(comments);
        for (const comment of comments) {

            let divComments = document.createElement("div");
            divComments.classList.add("div_comments");

             let elementComment =document.createElement("div");
             elementComment.classList.add('comment_element');
             elementComment.innerText = comment.body;

             divComments.appendChild(elementComment);
             commentContainer.appendChild(divComments);
        }

    })
    document.body.appendChild(commentContainer);
};
