import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const RegisterPage = () => {
  return (
    <Authenticator>
      {({ signOut }) => (
        <>
          <h1>Welcome to the Registration Page</h1>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </Authenticator>
  );
};

export default RegisterPage;