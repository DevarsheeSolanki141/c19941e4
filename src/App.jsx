import React from 'react';
import ReactDOM from 'react-dom';
import Header from './containers/Header.jsx';
import ActivityBoard from "./containers/ActivityBoard.jsx";

function App() {

  return (
    <div className='container'>
      <Header/>
      <ActivityBoard />     
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
