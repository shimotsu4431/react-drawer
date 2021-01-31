import clsx from 'clsx';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <div className="App">
        <header className="Header">
          <button className="DrawerButton" onClick={() => setOpenDrawer(true)}>
            <img  className="DrawerButtonImg" src="../button.svg" alt=""/>
          </button>
          Header</header>
      </div>
      <div className={clsx({
        "Drawer": true,
        "isShow": openDrawer
      })}>
      <div>
        <button className="DrawerCloseButton" onClick={() => setOpenDrawer(false)}>
          <img  className="DrawerCloseButtonImg" src="../close.svg" alt=""/>
        </button></div>
      </div>
    </>
  );
}

export default App;
