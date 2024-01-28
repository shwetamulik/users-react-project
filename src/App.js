import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' exact element={<UserList/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
