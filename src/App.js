import LandingScreen from "./pages/landing/LandingScreen";
import CreateAccount from "./pages/createAccount/CreateAccount";
import Account from "./pages/Account/Account";
import SignIn from "./pages/signIn/SignIn";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path={'/'}         element={<LandingScreen/>} />
          <Route path={'/create'}   element={<CreateAccount/>} />
          <Route path={"/account"}  element={<Account/>} />
          <Route path={"/signin"}   element={<SignIn/>} />
        </Routes>  
      </div>

    </Router>
    
  );
}

export default App;
