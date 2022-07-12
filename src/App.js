import React, {} from 'react';
import { BrowserRouter} from "react-router-dom";
import Header from './Components/Header/Header';
import MainRoutePage from './Components/MainRoutePage/MainRoutePage';
import 'materialize-css'; // It installs the JS asset only
import 'materialize-css/dist/css/materialize.min.css';

const App = () => {
    return (
        <BrowserRouter>
          <div>
            <Header/>
          </div>
          <div>
            <MainRoutePage/>
          </div>
        </BrowserRouter>   
  );
}
export default App;



