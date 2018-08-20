import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './reducers/store';
import Dashboard from './components/Dashboard';
// in future, get reactstrap for elements?

class App extends Component {
  render() {
    return (
      <div className="Notes App">
        <Provider store={store}>
          <BrowserRouter>
            <Route exact path="/" component={Dashboard} />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;