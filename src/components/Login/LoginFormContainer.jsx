import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import validateUser from 'utils/validateUser';
import UserContext from 'utils/userContext';

import LoginForm from './LoginForm';

const LoginFormContainer = () => {

  let {setUser} = useContext(UserContext);
  let [hasError, setHasError] = useState(false);
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  const navigate = useNavigate();


  const validateForm = () => {
    if (username.length < 4 || password.length < 4) {
      setHasError(true);
      return
    } 
    let userFound = validateUser(username, password)
    if(userFound.id){
      setUser(userFound.name);
      navigate('/images');
    } else {
      setHasError(true);
    }
  }

  return (
    <LoginForm 
      username={username} 
      password={password} 
      setUsername={setUsername} 
      setPassword={setPassword} 
      validateForm={validateForm} 
      hasError={hasError} 
    />
  )
}

export default LoginFormContainer;