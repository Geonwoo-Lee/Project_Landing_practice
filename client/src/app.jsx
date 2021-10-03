import './app.css';
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
  
   <Route path="/UrlPage">
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
