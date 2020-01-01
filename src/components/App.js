import React from 'react';

import Header from './Header/header.js';
import NovoUsuario from './NovoUsuario/novoUsuario.js';
import Toast from './Toast/toast.js';

import Usuario from '../models/Usuario.js';

import '../css/App.css';

class App extends React.Component {
  constructor() {
    super()
    Usuario.obter(usuario	=> {
      this.state	=	{
        usuario: usuario
      };
    },() => {
      this.state = {
        usuario: undefined
      };
    });
  }

  msgNovoUsuario(usuario) {
    let genero = usuario.genero == 'm' ? 'o' : 'a';
    this.refs.toast.sucesso(
      `Seja bem-vind${genero} ${usuario.nome}!`
    )
  }

  renderizarUsuario() {
    let usuario = this.state.usuario;
    if(usuario) {
      return (
        <div style={{marginTop: '140px', textAlign: 'center'}}>
          <b>Usuario obtido do <i>localStorage</i></b><br></br>

          {usuario.toString()}
        </div>
      )
    } else {
      return (
        <NovoUsuario
          onSubmit={usuario => {
            usuario.salvar(() => {
              this.setState({
                usuario: usuario
              }, () => {
                this.msgNovoUsuario(usuario)
              })
            });
          }}
          erro={msg=>this.refs.toast.error(msg)}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderizarUsuario()}
        <Toast ref="toast"/>
      </div>
    );
  }
}

export default App;
