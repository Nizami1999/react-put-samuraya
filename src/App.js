import React from 'react';
import './App.css';
import Header from './components//Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import News from './components/News/News';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  
  return (
    <div>
      <main className="container">
        <Header />
        <div className="content">
          <Navbar />
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
          <Route path="/profile" render={() => <Profile store={props.store} />} />
          <Route path="/music" render={Music} />
          <Route path="/news" render={News} />
        </div>
      </main>
    </div>
  );
}

export default App;

// 19. Уроки React JS (route, browser-router, маршрутизация) - react курсы бесплатно
// Установление пакета npm i react-router-dom -save
// -save пишем чтобы имя сохранилось в папке package.json
// и при клонировании с гита набрав лишь npm install, у нас vs также установит и этот новый пакет




