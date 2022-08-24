import './App.css';
import React from 'react';
// import { Outlet, Route, Routes } from 'react-router';
import RoutesObject from './Routes';

function App() {

  return (
    <RoutesObject />
    // <Routes>
    //   <Route path="/ruta-secundaria1" element={<RutaSecundaria1 />}>
    //     <Route index element={<p>Elemento data</p>} />

    //     <Route path="datathings" caseSensitive element={<p>Elemento data-things</p>} />
    //     <Route path="DATATHINGS" caseSensitive element={<p>Elemento data-things UPPER</p>} />

    //   </Route>
    //   <Route path="/" element={<p>Ruta inicial</p>} />
    //   <Route path="/ruta-secundaria2" element={<p>Ruta secundaria2</p>} />
    // </Routes>
  );
}

export default App;
