import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className = 'app-wrapper'>
      <header>
        <img src='https://api.freelogodesign.org/assets/thumb/logo/23243803_400.png?t=637478931530000000' width='20px'/>
      </header>      
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            My post
          </div>
          <div>
            post 1
          </div>
          <div>
            post 2
          </div>
        </div>
      </div>
    </div>
  );
};


export default App;
