import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Avatar from '@material-ui/core/Avatar';

import Grid from '@material-ui/core/Grid';

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import IconButton from '@material-ui/core/IconButton';

import logo from './assets/logo.png'
import imagem from './assets/instagram.png'
import perfil from './assets/perfil.jpg'

import SimpleTabs from './components/Abas/Abas'


function App() {
  return (
    <div className="body">
    <Grid container direction="row" className="appBar">
      <Grid item xs={1}></Grid>
      <Grid item xs={1}>
        <img  src={logo} className="logo"/>
      </Grid>
      <Grid item>
        <div className="SvO5t"></div>
      </Grid>
      <Grid item>
        <img  src={imagem} className="img"/>
      </Grid>
      <Grid item xs={1} className="mobile-none"></Grid>
      <Grid item xs={3} className="grid-search">
        <input placeholder="pesquisar" className="search"/>
      </Grid>
      <Grid item xs={1}></Grid>
      <Grid item>
      <div className="icons">
        <IconButton>
          <ExploreOutlinedIcon className="icon-color" />
        </IconButton>
        <IconButton>
          <FavoriteBorderOutlinedIcon className="icon-color" />
        </IconButton>
        <IconButton>
          <PersonOutlineOutlinedIcon className="icon-color" />
        </IconButton>
      </div>
      </Grid>
      
    </Grid>

    <Grid container direction="row" className="container">
      <Grid item xs={3}>
        <Avatar src={perfil} className="avatar-large"/>
      </Grid>

      <Grid item xs={8} className="ml">

        <Grid item xs={2} className="inline">
          <a className="login">mateuszp</a>
        </Grid>
        <Grid item xs={2} className="inline ml-edit">
          <button className="button-edit">Editar perfil</button>
        </Grid>
        <Grid item xs={2} className="inline ml">
          <IconButton>
            <SettingsOutlinedIcon className="icon-color" />
          </IconButton>
        </Grid>
        <Grid item></Grid>
        <div className="mt">
          <Grid item xs={2} className="inline">
            <a className="pub"><strong>5</strong> publicações</a>
          </Grid>
          <Grid item xs={2} className="inline ml">
          <a className="pub"><strong>1.075</strong> seguidores</a>
          </Grid>
          <Grid item xs={2} className="inline ml">
          <a className="pub"><strong>1.224</strong> seguindo</a>
          </Grid>
        </div>
        <Grid item>
          <p><strong>Mateus Pires</strong></p>
        </Grid>
        <Grid item>
          <p className="descricao">A.D.S <br/> Me dê alguns anos, tenho grandes planos.</p>
          <a href="https://github.com/mateusdeve" className="color-site"><strong> github.com/mateusdeve</strong></a>
        </Grid>

      </Grid>
    </Grid>
    <SimpleTabs></SimpleTabs>


    </div>
  );
}

export default App;
