import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Posts from './Component/Posts/Posts';
import PostDetails from './Component/PostDetails/PostDetails';
import Header from './Component/Header/Header';
import NotFound from './Component/NotFound/NotFound';

function App() {
  
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Posts></Posts>
          </Route>
          <Route path="/details/:id">
             <PostDetails></PostDetails>
          </Route>
          <Route path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
    </Router>
    </div>
    
  );
}

export default App;
