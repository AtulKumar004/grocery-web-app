
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdminRoutes from './routes/AdminRoutes';
import GroceryRoutes from './routes/GroceryRoutes';
function App() {
  return (
 

    <BrowserRouter>
      <Routes>
        <Route path = "/grocery-react/*"  element = {<GroceryRoutes />}/>
        <Route path = "/admin/*"  element = {<AdminRoutes />}/>

      </Routes>
    </BrowserRouter>
  
  );
}

export default App;
