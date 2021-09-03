import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/home/Home'
import News from "./pages/news/News"
import Blogs from "./pages/blogs/Blogs"
import Games from "./pages/games/Games"
import Software from "./pages/software/Software"
import Contact from "./pages/contact/Contact"
function App() {

  return (
    <>
  <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route path="/news"><News/></Route>
        <Route path="/blogs"><Blogs/></Route>
        <Route path="/game"><Games/></Route>
        <Route path="/software"><Software/></Route>
        <Route path="/contact"><Contact/></Route>
      </Switch>
    </Router>
    </>
  
  );
}

export default App;
