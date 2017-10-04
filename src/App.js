import React, { Component } from 'react';
import inventoryReference from './reference/inventory.png';
import EquipmentImg from './reference/equipment.png';
import rupee from './reference/rupee.png';
import './App.css';
import Controls from './components/Controls/Controls.jsx';
import Turntable from './components/Turntable/Turntable.jsx';



class App extends Component {
  render() {



    return (
      <div className="App">
        <img className="reference" src={EquipmentImg} alt="blah" />
        <Controls />
        <div className="container">
          <div className="left">
            <div className="leftZArrow">

            </div>
          </div>


          <Turntable />


          <div className="right">
          </div>
        </div>
          <div className="rightRArrow" />
        <div className="bottom">
          <div className="rupees">
            <img className="rupee" src={rupee} alt="rupee" />
            <div className="rupeeCount">500</div>
            </div>
          <div className="selectText"></div>
          </div>
      </div>
    );
  }
}

export default App;
