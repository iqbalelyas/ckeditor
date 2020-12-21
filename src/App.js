import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ContactUs from "./component/contactComponent/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ContactUs}/>
      </Router>
    </div>
  );
}

export default App;
