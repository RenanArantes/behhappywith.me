import React from 'react';

import Header from './Header/header.js';
import NovoUsuario from './NovoUsuario/novoUsuario.js';

import '../css/App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NovoUsuario />
      </div>
    );
  }
}

export default App;
