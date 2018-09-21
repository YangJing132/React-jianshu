import React, { Component } from 'react';
//把store提供给内部的组件
import { Provider } from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './common/header';
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      {
        //header 无状态组件
      }
        <BrowserRouter>
          <div>
          <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
