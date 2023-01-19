import './style.scss';

const LoginForm = ({
  username, 
  password, 
  setUsername, 
  setPassword, 
  validateForm, 
  hasError
}) => (
  <div className='LogIn-container'>
    <div className='LogIn-form'>
      <div className='LogIn-form-title'>Log In</div>
      <div className='LogIn-form-inputs'>
        <input 
          className='LogIn-form-inputs-name' 
          placeholder='Enter your name' 
          value={username} 
          onChange={(e)=>{setUsername(e.target.value)}}
        />
        <input 
          className='LogIn-form-inputs-password' 
          placeholder='Enter password' 
          value={password} 
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        {hasError &&
        <div className='LogIn-form-error'>Wrong name or password. Please, try again</div>}
        <div className='LogIn-form-submit' onClick={validateForm}>Continue</div>
      </div>
    </div>
  </div>
)

export default LoginForm;