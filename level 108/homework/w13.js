import createUser, { deleteUser } from './userService.js';

const user = createUser("Alice");
console.log(user);
deleteUser(user.id);