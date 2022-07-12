import React, {} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './Components/Header/Header';
import MainRoutePage from './Components/MainRoutePage/MainRoutePage';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

const App = () => {
    return (
        <Router>
          <div>
            <Header/>
          </div>
          <div>
            <MainRoutePage/>
          </div>
        </Router>
       
  );
}
export default App;



