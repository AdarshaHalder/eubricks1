import React from "react";
import Container from "./Container/container"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from "./pages/About.jsx";
import Profile from "./pages/profile.jsx";
import Setting from "./pages/setting.jsx";
import To from "./pages/To.jsx"
import LeftBar from "./Body/LeftBar";



function Service ()  {
    return (
<div className="App">
    <switch>
    <div className='flex gap-6'>
     <LeftBar/>
        <Container/>
        </div>
      {/* <Sidebar/>
      <About/> */}
      {/* <Routes path="/dashboard" element={<About />} /> */}
          {/* <Route path="/" element={<About />} />
          <Route path="/dashboard" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/analytics" element={<Setting />} />
          <Route path="/productList" element={<To />} /> */}
   
        </switch>
      </div>
    );
};

export default Service
 