import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import MainPage from './component/MainPage/MainPage';
import NavTop from './component/NavTop/NavTop'
import ContactPage from './component/ContactPage/ContactPage';
import DocumentPage from './component/DocumentPage/DocumentPage';


function App() {
  return (
      <BrowserRouter>
          <div className='PIKA'>
              <NavTop/>
              <Switch>
                  <Route exact path='/PIKA'>
                     <MainPage />
                  </Route>
                  <Route exact path='/document'>
                      <DocumentPage/>
                  </Route>
                  <Route exact path='/contacts'>
                      <ContactPage />
                  </Route>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
