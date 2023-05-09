import './App.css'
import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton";
import UserProfile from "./components/userProfile";

function App() {
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      <p>The user information are below!</p>
      <UserProfile/>
    </div>
  );
}

export default App;
