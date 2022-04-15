import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './pages/admin/Admin';
import User from './pages/admin/User';
import Index from './pages/Index';
import Report from './pages/admin/Report';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/admin' element={<Admin/>}>
          <Route path='overview' element={<User/>}/>
          <Route path='report' element={<Report/>}/>
        </Route>
      </Routes>
  );
}

export default App;
