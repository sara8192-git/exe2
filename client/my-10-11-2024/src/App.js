import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Alltodos from './Component/Alltodos';

function App() {
  return (
    <div className="App">
      <div id="navbar">
      <Link  to={'/home'}>Home</Link></div>
      <Routes>
      <Route path='/home' element={<Alltodos/>} />
      </Routes>
    </div>
  );
}

export default App;
