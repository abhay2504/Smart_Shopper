import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import Admin from './pages/Admin';

function App() {


  const [UserLoggedIn, isUserLoggedIn] = useState(false);


  return (

    UserLoggedIn ? (
      < Login />
    ) : (
      <Router>
        <Routes>
          <Route  exact path='/register' element={<Register />} />
        </Routes>
        <Routes>
          <Route exact path='/login' element={< Login />} />
        </Routes>
        <Routes>
          <Route exact path='/home' element={< Home />} />
        </Routes>
        <Routes>
          <Route exact path='/admin' element={< Admin />} />
        </Routes>
      </Router>
    )




  );
}

export default App;
