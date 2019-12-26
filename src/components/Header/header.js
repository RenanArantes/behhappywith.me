import React from 'react';
import './header.css';
import logo from'./header_img/logo.png';

export default function Header() {
    return (
        <div className="header pure-menu pure-menu-horizontal pure-menu-fixed">
            <a href="/"><img className="logo" src={logo} alt=""></img></a>
            <h4 className="label">
                <strong>Agenda de Gentilizas</strong>
            </h4>
        </div>
    );
}