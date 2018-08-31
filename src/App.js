import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';
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
            <Route exact path={'/write'} component={Write}/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
