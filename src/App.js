import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'
import {
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [sidebar, SetSidebar] = useState(true);
  return (
    <div>
      <Navbar SetSidebar = {SetSidebar} />
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryID/:videoID" element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App
