




fetch('https://jsonplaceholder.typicode.com/users/post'+ user.id )
    .then(users => users.json())
    .then(users => {
        for (const user of users) {

        }
    })
