import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import data from "./data";





function App() {

 

  const [blogs, setBlogs] = useState([ data[0],data[1],data[2],data[3] ]);


  

  function addBlog(blog) {
    setBlogs(prevItem => {
      return [...prevItem, blog];
    });
  }



  const currentUser = true;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">

     
              <Homepage blogs={blogs} />
           
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write  addBlog={addBlog}  /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
