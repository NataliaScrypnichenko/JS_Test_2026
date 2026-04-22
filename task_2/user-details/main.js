 let url = new URL(window.location.href);
 let userId = url.searchParams.get('id');

let blockUser = document.getElementById('blockUser');
blockUser.classList.add('block_user');

 let buttonUserPost = document.createElement('button');
 buttonUserPost.classList.add('btn_user');
 buttonUserPost.innerText = `post of current user`;

 fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
 .then(res => res.json())
 .then(user => {
     // console.log(user)
      let userDiv = document.createElement('div');
        userDiv.classList.add('user_div');

     userDiv.innerText = `
        ID: ${user.id}
        Name: ${user.name}
        Username: ${user.username}
        Email: ${user.email}
        Address:
          Street: ${user.address.street}
          Suite: ${user.address.suite}
          City: ${user.address.city}
          Zipcode: ${user.address.zipcode}
        Geo:
          Lat: ${user.address.geo.lat}
          Lng: ${user.address.geo.lng}
        Phone: ${user.phone}
        Website: ${user.website}
        Company:
          Name: ${user.company.name}
          CatchPhrase: ${user.company.catchPhrase}
          BS: ${user.company.bs}
     `;

      blockUser.append(userDiv,buttonUserPost);

      document.body.append(blockUser, );

 });

 let postsContainer = document.createElement('div');
 postsContainer.classList.add('posts_container');

 buttonUserPost.onclick = function () {

     postsContainer.innerText='';

     fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
         .then(res => res.json())
         .then(posts => {
             for (const post of posts) {
                 console.log(post);
                 let divBlockPost = document.createElement('div');
                 divBlockPost.classList.add('div_block_post');

                 let postDivElement = document.createElement('div');
                 postDivElement.classList.add('post_div');
                 postDivElement.innerHTML = post.title;

                 let buttonPostComment = document.createElement('button');
                 buttonPostComment.classList.add('btn_comment');
                 buttonPostComment.innerText='details';

                 buttonPostComment.onclick = function () {
                     window.location.href = `../post-details/post-details.html?id=${post.id}`
                 };

                 divBlockPost.append(postDivElement, buttonPostComment);
                 postsContainer.appendChild(divBlockPost);
             };
         });
     document.body.appendChild(postsContainer);
 };
