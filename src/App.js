import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import store from './store/index';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/detail/:id'} component={Detail}/>
            <Route exact path={'/login'} component={Login}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
