import React from 'react';
import Menu from './menu';


const MenuBar = () => {
  return (
    <div>
    <div className="flex fixed justify-end w-screen min-w-screen bg-darkBG h-14">
      <Menu showHome={false}/>
    </div>
    </div>
  );
  }

export default MenuBar