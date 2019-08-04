import React, {Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './shared/navbar/navbar';
import Home from './pages/home/home';
import Adopt from './pages/adopt/adopt';
import SearchHome from './pages/searchHome/searchHome';
import Session from './pages/session/session';




function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar></Navbar>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/adopt" component={Adopt}></Route>
        <Route exact path="/search-home" component={SearchHome}></Route>
        <Route exact path="/session" component={Session}></Route>
      </Fragment>
    </BrowserRouter>
   
  );
}

export default App;
