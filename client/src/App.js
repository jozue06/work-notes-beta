import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './reducers/store';
import Dashboard from './components/Dashboard';
import Landing from './components/Landing';
import SignUp from './components/SignUp';

class App extends Component {
  render() {
    return (
      <div className="Notes App">
        <Provider store={store}>
          <BrowserRouter>
        <React.Fragment>
            <Route exact path='/' component={Landing} />
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/signup' component={SignUp}/>
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;