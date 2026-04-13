



const url = new URL(window.location.href);
const userId = url.searchParams.get("id");

fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(user => {
        console.log(user);

    })

