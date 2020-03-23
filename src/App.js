import React from 'react';
import { Provider } from 'react-redux'; 
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/home';
import Personal from './pages/personal';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={Home}></Route>
          <Route path='/personal' exact component={Personal}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;