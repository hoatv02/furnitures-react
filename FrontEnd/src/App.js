import { Route, Routes } from 'react-router-dom';
import './App.css';
import LayoutAdmin from './routes/LayoutAdmin';
import LayoutSite from './routes/LayoutSite';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Categorys, Products } from './Common/Api';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(Products())
    dispatch(Categorys())
  },[])
  return (
      <Routes>
           <Route path='*' element={<LayoutSite/>}/>
          <Route path='/admin/*' element={<LayoutAdmin/>}/>
      </Routes>
  );
}

export default App;
