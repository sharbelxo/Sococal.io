import { React } from 'react';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './SignIn';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Login' element={<Login />} />
        {/* <Route exact path='/SignUp' element={<SignUp />} />
        <Route exact path='/SignIn' element={<SignIn />} /> */}
        <Route exact path='*' element={<h1>Page Not Available!</h1>} />
      </Routes>
    </Router>
  )
}