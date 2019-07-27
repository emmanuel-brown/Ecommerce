import React from 'react';
// import './App.css';

import {
  BrowserRouter,
  Route,
  Switch,
  // Redirect
} from 'react-router-dom';

//pages
import Index from './pages/index';

class App extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <Switch >
          <Route exact path="/" component={Index} />
          {/* <Route path="/404" component={NotFoundPage} />
          <Redirect to="/404" /> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
