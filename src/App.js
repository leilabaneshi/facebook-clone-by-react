import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="app">
      {/**header */}
      <Header />
      <div className="app__body">
        <Sidebar />
        {/** app body */}
        {/**sidebar */}
        {/** feed*/}
        {/**widgets */}
      </div>



    </div>
  );
}

export default App;
