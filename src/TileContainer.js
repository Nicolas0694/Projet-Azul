import React from 'react'
import './TileContainer.css'

var blackTile = {color : "black", img:"../public/black-tile.PNG"};
var redTile = {color: "red", img:"../public/Red-tile.PNG"};
var blueTile = {color: "blue" , img:"../public/Blue-tile.PNG"};
var whiteTile = {color:"white" , img:"../public/whiteblue-tile.PNG"};
var yellowTile = {color: "yellow" , img:"../public/yellow-tile.PNG"};


function TileContainer() {

    return (
        <div className="container">
            <div className="tile">
            
            </div>
            <div className="tile">
                
            </div>
            <div className="tile">
                
            </div>
            <div className="tile">
                
            </div>
        </div>
        
    );
}

export default TileContainer;
