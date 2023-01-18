import { useState } from 'react';

import LoginForm from './LoginForm';

const LoginFormContainer = () => {
  
  let [hasError, setHasError] = useState(false);
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');


  const validateForm = () => {
    if (username.length < 4 || password.length < 4) {
      setHasError(true);
      return
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