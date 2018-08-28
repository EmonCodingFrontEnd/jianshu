import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Header from './common/header/index';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store/index';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header/>
          <BrowserRouter>
            <div>
              <Route exact path={'/'} component={Home}/>
              <Route exact path={'/detail'} component={Detail}/>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
