
// let form1=document.forms['form1'];
let divInfoUsers=document.getElementById("divInfoUsers");
// let buttonInfo=document.getElementById("buttonInfo");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
      console.log(users);
      for (const user of users) {
           console.log(user);
        let div = document.createElement("div");
        div.classList.add("div_user");

        let h2=document.createElement("h2");
        h2.classList.add("user_h2");
        h2.innerText = user.id;

       let p=document.createElement("p");
       p.classList.add("info_p");
       p.innerText = user.name;

       let button = document.createElement("button");
       button.classList.add("button_info");
       button.innerText = "info";

       // button.onsubmit = function (ev) {
       //   ev.preventDefault();
       //   fetch('https://jsonplaceholder.typicode.com/users/post'+ user.id )
       //   .then(users => users.json())
       //   .then(users => {
       //       for (const user of users) {
       //
       //       }
       //   })
       //   //+ user.id
       // }

       div.append(h2,p, button);

        divInfoUsers.appendChild(div);
        document. body.appendChild(divInfoUsers);
        // form1.appendChild(divInfoUsers);
      }


    })
