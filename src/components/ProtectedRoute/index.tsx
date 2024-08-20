import { useAuthenticator } from '@aws-amplify/ui-react';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { authStatus } = useAuthenticator();

  if (authStatus === 'authenticated') {
    return children;
  }

  return (
    <div>
      <h1>Please register or sign in.</h1>
      <p>You need an account to access this page.</p>
    </div>
  );
};

export default ProtectedRoute;