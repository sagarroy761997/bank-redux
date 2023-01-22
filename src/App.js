
import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Balance from './Pages/Components/Balance';
import Withdrawal from './Pages/Components/Withdrawal';
import Deposit from './Pages/Components/Deposit';

function App() {
  return (
    <div className="App">
      <div className='uldiv'>
      <ul>
        <li><NavLink className='navlink' to='/'>Balance</NavLink></li>
        <li><NavLink className='navlink' to='/deposit'>Deposit</NavLink></li>
        <li><NavLink className='navlink' to='/withdrawal'>Withdrawal</NavLink></li>
      </ul>
      </div>
      <header className="App-header">
        <h1>Redux</h1>
        <Routes>
          <Route path='/' element={<Balance/>}/>
          <Route path='/deposit' element={<Deposit/>}/>
          <Route path='/withdrawal' element={<Withdrawal/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
