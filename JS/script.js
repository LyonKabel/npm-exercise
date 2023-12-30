import {getUsers} from '@faker-js/faker';



(() => {
    const numUsers = 50;
    const users = getUsers(numUsers);
    
    alert(users);
})();
  


