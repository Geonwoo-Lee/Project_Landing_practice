import './app.css';
import React from 'react'
import {Route, Switch } from 'react-router-dom'
import BoardPage from './Pages/BoardPage';
import Landing from './Pages/Landing';
import LogIn from './Pages/LogIn';
import SignUp from './Pages/SignUp';
import UrlPage from './Pages/UrlPage';



function App() {
  return (
    <>
    <Switch>
     <Route exact path="/">
     <Landing />
   </Route>
  
   <Route path="/BoardPage">
     <BoardPage />
   </Route>
  
   <Route path="/UrlPage">   {/* UrlPage에 가시면 라우터랑 컴포넌트 설정 한거 보실 수 있으십니다 ! 그리고 UrlPage 외에 다른 컴포넌트들은 장희님이 작성하신거라 안보셔도 됩니다 !  UrlPage.jsx 파일만보세요 !*/}  
     <UrlPage />
   </Route>
  
   <Route path="/Login">
      <LogIn />
   </Route>
   
   <Route path="/SignUp">
      <SignUp />
   </Route>
   </Switch>
   </>
  );
}

export default App;
