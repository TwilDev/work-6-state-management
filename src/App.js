import './App.css';
import { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { Contact } from './pages/Contact';
import { Error404 } from './pages/404';
import { Navbar } from './components/Navbar';

export const UserContext = createContext()

function App() {
  const [user, setUser] = useState({id: 1, forename: 'Aaron', surname: 'Gold', email: 'aarong@target-technology.co.uk'})
  return (
    <div className="App">
      <UserContext.Provider value={{user, setUser}}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>        
            <Route path="/contact" element={<Contact/>}/>
            <Route path="*" element={<Error404/>}/>
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
