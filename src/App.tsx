import { Routes, Route } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from '../amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashPage />} />
      <Route
        path="/home"
        element={
          <Authenticator>
            {({ signOut, user }) => (
              <div>
                <HomePage />
                <button onClick={signOut}>Sign out</button>
              </div>
            )}
          </Authenticator>
        }
      />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default App;
