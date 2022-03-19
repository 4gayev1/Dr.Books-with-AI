import Contact from "./Contact";
import Books from "./Books";
import Navigationbar from "./Navigationbar";
import Login from "./Login";
import Home from "./Home";
import Cart from "./Cart";
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Navigationbar/>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/Books' element={< Books />}></Route>
                 <Route exact path='/Contact' element={< Contact />}></Route>
                 <Route exact path='/Login' element={< Login />}></Route>
                 <Route exact path='/Cart' element={< Cart />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
 
export default App;