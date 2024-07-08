import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from './containers/Header.jsx';
import ActivityBoard from "./containers/ActivityBoard.jsx";

function App() {

  return (
    <div className='container'>
      <Header />
      <ActivityBoard />
    </div>
  );
};

ReactDOM.render(<Provider store={store}><App />  </Provider>, document.getElementById('app'));

export default App;
