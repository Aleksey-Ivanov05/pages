import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Content from "./containers/Content/Content";
import EditPage from "./containers/EditPage/EditPage";


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
          <Route path="/pages/admin" element={(
            <EditPage/>
          )}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
