import React, {Fragment} from 'react';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './shared/navbar/navbar';
import Home from './pages/home/home';
import Adopt from './pages/adopt/adopt';
import SearchHome from './pages/searchHome/searchHome';
import Session from './pages/session/session';
import Footer from './shared/footer/footer';
import PetDetails from './pages/pet-details/pet-details';
import Session2 from './pages/session2/session2';




function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar></Navbar>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/adopt" component={Adopt}></Route>
        <Route exact path="/pet-detail" component={PetDetails}></Route>
        <Route exact path="/search-home" component={SearchHome}></Route>
        <Route exact path="/session" component={Session}></Route>
        <Route exact path="/session2" component={Session2}></Route>

        
        
        <Footer></Footer>
      
      </Fragment>
    </BrowserRouter>
   
  );
}

export default App;
