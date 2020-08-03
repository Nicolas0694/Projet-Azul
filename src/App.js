import React,{Fragment} from 'react'
import './App.css'
import TileContainer from './TileContainer'

export default function App() {

  return ( 
    <Fragment>
    <div className='container'>
      <h2> Choisissez un type de tuile au sein d'une fabrique </h2>

      <div className="factory"> 1 <TileContainer/> </div>
      <div className="factory"> 2 <TileContainer/> </div>
      <div className="factory"> 3 <TileContainer/> </div>
      <div className="factory"> 4 <TileContainer/> </div>
      <div className="factory"> 5 <TileContainer/> </div>
    </div>

  </Fragment>

    );

  }



  


  





