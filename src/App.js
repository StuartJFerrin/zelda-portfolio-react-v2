import React, { Component } from 'react';
import inventoryReference from './reference/inventory.png';
import EquipmentImg from './reference/equipment.png';
import EquipmentFull from './reference/equipmentFull.png';
import InventoryFull from './reference/inventoryFull.jpg';
import QuestFull from './reference/questFull.jpg';
import MapFull from './reference/zeldaMapFull.jpg'
import './App.css';
import Controls from './components/Controls/Controls.jsx';
import Turntable from './components/Turntable/Turntable.jsx';
import Footer from './components/Footer/Footer.jsx';


class App extends Component {
  render() {



    return (
      <div className="App">
        {<img className="reference" src={QuestFull} alt="blah" />}
        {/* <Controls /> */}
        <div className="container">
            {/* <div className="leftZArrow"> */}


          <Turntable />
          {/* <EquipmentView /> */}
          </div>


          {/* <div className="rightRArrow"> </div>         */}
         {/* <Footer /> */}
      {/* </div> */}
      </div>
    );
  }
}

export default App;
