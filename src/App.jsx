import React from 'react'
import { Route,Routes} from 'react-router-dom'
import Main from './pages/Main'
import Intro from "./pages/Intro"
import NoticeBoard from './pages/NoticeBoard'
import ViewBoard from './pages/ViewBoard'
import Create from './pages/Create'
import Login from "./pages/Login"
import axios from './api/axios';
import "./App.css"
import Modi from './pages/Modi'

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Intro></Intro>}></Route>
        <Route path="/main" element={<Main></Main>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/notice" element={<NoticeBoard></NoticeBoard>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/modi" element={<Modi></Modi>}></Route>
        <Route path="/board/detail/:id" element={<ViewBoard></ViewBoard>}></Route>
      </Routes>
    </div>
  )
}

export default App