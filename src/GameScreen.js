import React,{Component,Fragment} from 'react';
import './GameScreen.css';


export default function GameScreen() {

	return (

		<Fragment>
			<div className='container'>
				<h2> Choisissez une fabrique </h2>

				<div className="factory"> 1 </div>
				<div className="factory"> 2 </div>
				<div className="factory"> 3 </div>
				<div className="factory"> 4 </div>
				<div className="factory"> 5 </div>
			</div>

		</Fragment>

		);
}

