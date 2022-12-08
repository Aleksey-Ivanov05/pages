import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Content from "./containers/Content/Content";


function App() {
  return (
    <div>
      <Navbar/>
      <div className="container-fluid">
        <Routes>
          <Route path="/pages/:pageName" element={(
            <Content/>
          )}/>
          <Route path="/" element={(
            <Content/>
          )}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
