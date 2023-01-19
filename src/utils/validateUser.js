import USERS from "constants/users"

const validateUser = (name, password) => {
  let user = {};
  for (let u=0; u<USERS.length; u++) {
    if ((USERS[u].name === name) && (USERS[u].password === password)) {
      user = {
        id: USERS[u].id,
        name: name
      };
      break;
    }
  };
  return user;
};

export default validateUser;