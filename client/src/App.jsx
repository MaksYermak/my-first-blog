import React from 'react';
// Router
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

const App = () => {


  return (
    <div className="App">
      <Header />
      <div class="content container">
        <div class="row">
          <div class="col-md-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
