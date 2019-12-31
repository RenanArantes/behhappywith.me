import React from 'react';

import Header from './Header/header.js';
import NovoUsuario from './NovoUsuario/novoUsuario.js';
import Toast from './Toast/toast.js';

import '../css/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NovoUsuario 
          erro={msg=>this.refs.toast.error(msg)}
        />
        <Toast ref="toast"/>
      </div>
    );
  }
}

export default App;
