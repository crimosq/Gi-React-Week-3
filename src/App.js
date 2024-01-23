
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Easy from './components/easy';
import Medium from './components/medium';
import Hard from './components/hard';
import Home from './components/Home';


function App() {
  return (

   
 <>
  <Router>
      <ul>
        <li><Link to='/'>Home </Link></li>
        <li><Link to='/easy'>Easy </Link></li>
        <li><Link to='/medium'>Medium</Link></li>
        <li><Link to='/hard'> Hard</Link></li>
        </ul>



    


  
    <Routes>
    
    <Route path='/' element={< Home />} /> 
    <Route path='/easy' element={< Easy />} /> 
    <Route path='/medium' element={< Medium />} />
    <Route path='/hard' element={< Hard />} />



    </Routes>

   </Router>

   </>
  );
}

export default App;
