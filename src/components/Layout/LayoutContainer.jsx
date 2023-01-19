import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import UserContext from 'utils/userContext';

import Layout from './Layout';

const LayoutContainer = ({ children }) => {
  let {user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const LogOut = () => {
    setUser(null);
    navigate('/login');
  }

  console.log(user);

  return <Layout children={children} user={user} LogOut={LogOut} />
};

export default LayoutContainer;