const users = {}
const user1 = {name: 'asad'}
const user2 = {name: 'ali'}

users[user1] = {...user1, id: 1}
users[user2] = {...user2, id: 2}

console.log(users[user1])