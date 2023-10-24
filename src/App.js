import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig)
function App() {
  return (
    <div>
      <LoginSignup />
    </div>
  );
}

export default App;
