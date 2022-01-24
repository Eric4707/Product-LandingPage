import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route/>
      </Routes>
    </Router>
  );
}

export default App;
