import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import MainPage from "./component/MainPage/MainPage";
import NavTop from './component/NavTop/NavTop'
import ContactPage from "./component/ContactPage/ContactPage";

function App() {
  return (
      <BrowserRouter>
          <div className="PIKA">
              <NavTop/>
              <Switch>
                  <Route exact path="/">
                     <MainPage />
                  </Route>
                  <Route exact path="/document">
                      <div></div>
                  </Route>
                  <Route exact path="/contacts">
                      <ContactPage />
                  </Route>
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;
