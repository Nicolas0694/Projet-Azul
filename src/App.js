import React,{Fragment} from 'react'
import './App.css'
import TileContainer from './TileContainer'
import LineMotif from './LineMotif'
import Wall from './Wall'

export default function App() {

  return ( 
    <Fragment>
      <div>
        <div id='container'>
          

            <div className="factory"> 1 <TileContainer/> </div>
            <div className="factory"> 2 <TileContainer/> </div>
            <div className="factory"> 3 <TileContainer/> </div>
            <div className="factory"> 4 <TileContainer/> </div>
            <div className="factory"> 5 <TileContainer/> </div>
        </div>
        <LineMotif />
    </div>
    <br></br>
    <br></br>
    <div id="bottom-container">
      <Wall />
    </div>
  </Fragment>

    );

  }



  


  





