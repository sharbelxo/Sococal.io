import { React, useState, useEffect } from 'react';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { supabase } from './supabaseClient'
import Auth from './Auth'
import Account from './Account'
import SignIn from './SignIn';

export default function App() {
  // const [session, setSession] = useState(null)

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  // }, [])
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Login' element={<Login />} />
        <Route exact path='/SignUp' element={<SignUp />} />
        <Route exact path='/SignIn' element={<SignIn />} />
        <Route exact path='*' element={<h1>Page Not Available!</h1>} />
      </Routes>
    </Router>
    // <div className="container" style={{ padding: '50px 0 100px 0' }}>
    //   {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    // </div>
  )
}
