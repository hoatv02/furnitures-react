import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutAdmin from './routes/LayoutAdmin';
import LayoutSite from './routes/LayoutSite';

function App() {
  return (
      <Routes>
          <Route path='*' element={<LayoutSite/>}/>
          <Route path='/admin/*' element={<LayoutAdmin/>}/>
      </Routes>
  );
}

export default App;
