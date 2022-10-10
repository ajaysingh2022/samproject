import './App.css';
import Dashboard from './Component/Dashboard/index'
import Subscription from './Component/Subscription/index'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    < >
    <Routes>
      <Route path={'/'} element={<Dashboard />} />
      <Route path={'/subscription'} element={<Subscription />} />

      

      {/* <Subscription /> */}
      {/* <Adduser /> */}
      </Routes>
    </>
  );
}

export default App;
