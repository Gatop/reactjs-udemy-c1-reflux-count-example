import React from 'react';
import Reflux from 'reflux';
import './App.css';
import AppStore from './stores/AppStore'
import Actions from './actions/Actions.js'

class App extends Reflux.Component {

    constructor(props){
        super(props);
        this.state = {};
        this.store = AppStore;
        // Variables que se estan compartiendo desde el store
        this.storeKeys = ['count'];
    }

  render() {
    return (
      <div className="App">
          <h1>Contador</h1>
          <label className="AppLabel">{this.state.count}</label><br />
          <div>
              <button onClick={() => {Actions.addOne()}}>Agregar</button>
              <button onClick={() => {Actions.minusOne()}}>Restar</button>
          </div>
      </div>
    );
  }
}

export default App;
