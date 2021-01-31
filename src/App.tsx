import React, { useState } from 'react';

import './App.css';
import Drawer from './components/Drawer';

function App() {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <div className="App">
        <header className="Header">
          <button className="DrawerButton" onClick={() => setOpenDrawer(true)}>
            <img  className="DrawerButtonImg" src="../button.svg" alt="開く"/>
          </button>
            Header
          </header>
      </div>
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
}

export default App;
