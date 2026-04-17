 let url = new URL(window.location.href);
 let userId = url.searchParams.get('id');

let blockUser = document.getElementById('blockUser');


 fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
 .then(res => res.json())
 .then(user => {
     console.log(user)

      let userDiv = document.createElement('div');
        userDiv.classList.add('userDiv');

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

 })


 let buttonUserPost = document.createElement('button');
 buttonUserPost.classList.add('btn_user');

 buttonUserPost.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts?limit=5`)
             .then(res => res.json())
             .then(posts => {
                   for (const post of posts) {
                       console.log(post);
                        let divBlockPost = document.createElement('div');
                        divBlockPost.classList.add('div_block_post');

                       let postDivElement = document.createElement('div');
                       postDivElement.classList.add('postDiv');

                       postDivElement.innerHTML += `titel: ${post.title}`

                       let userPostComment = document.createElement('button');
                       userPostComment.classList.add('btn_comment');

                       userPostComment.onclick = function () {
                           window.location.href = `../post-details/post-details.html?id=${post.id}`
                       }



                       divBlockPost.append(postDivElement, userPostComment);
                       document.body.append(divBlockPost);
                   }



             })


// потрібно подумати про ліміт
 }

