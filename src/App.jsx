import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState, useEffect } from 'react';

import { ImagesPage, ImagePage, LogInPage } from 'pages';
import UserContext from 'utils/userContext';

import './App.scss';

const queryClient = new QueryClient();

const App = () => {

  let [user, setUser] = useState(localStorage.getItem('user'));

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', user)
    } else {
      localStorage.clear();
    }
  }, [user]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <UserContext.Provider value={{user, setUser}}>
          <BrowserRouter basename="https://julia-maliutsina.github.io/entexy-test-images">
            <Routes>
              {user &&
                <Route path="/images">
                  <Route index element={<ImagesPage />} />
                  <Route path=":imageId" element={<ImagePage />} />
                </Route>
              }
              <Route path="/login" element={<LogInPage />} />
              <Route path="*" element={user ? 
                <Navigate replace to="images" /> : 
                <Navigate replace to="login" />} 
              />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </div>
    </QueryClientProvider>
  )
};

export default App;
