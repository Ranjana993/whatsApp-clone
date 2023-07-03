import './App.css';
import Messanger from './components/Messanger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';

function App() {
  const clientID = "116793581247-nvjafm102qnpqsoqot1k7l3ufuqrbrn6.apps.googleusercontent.com"
  return (
    <GoogleOAuthProvider clientId={clientID}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
