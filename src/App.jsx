import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ImagesPage, ImagePage, LogInPage } from './pages';

import './App.scss';

export const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="images" />} />
        <Route path="/images">
          <Route index element={<ImagesPage />} />
          <Route path=":imageId" element={<ImagePage />} />
        </Route>
        <Route path="/login" element={<LogInPage />} />
        <Route path="*" element={<Navigate replace to="/images" />} />
      </Routes>
    </BrowserRouter>
    </div>
    </QueryClientProvider>
  );

export default App;
