import React from 'react';
import {Tape} from "./Tape";

import '../styles/style.css';

export class App extends React.Component{

    state = {
        colors:[
            'slider-background-1',
	    'slider-background-2',
	    'slider-background-3',
	    'slider-background-4'
	],
	stop:false,
    }

    changeColor = () => {
        const getDiv = document.getElementById('change-color');

        switch (getDiv.className){
	    case 'slider slider-background-1':
	        getDiv.className = 'slider slider-background-2';
	        break;
	    case 'slider slider-background-2':
		getDiv.className = 'slider slider-background-3';
		break;
	    case 'slider slider-background-3':
		getDiv.className = 'slider slider-background-4';
		break;
	    case 'slider slider-background-4':
		getDiv.className = 'slider slider-background-1';
		break;
	}
    }

    componentDidMount() {
	this.setState({stop: setInterval(
		this.changeColor,1200
	    )})
    }

    handleClearRight = () => {
        this.setState({
	    stop:clearInterval(this.state.stop),
	});
	const getDiv = document.getElementById('change-color');
	switch (getDiv.className){
	    case 'slider slider-background-1':
		getDiv.className = 'slider slider-background-2';
		break;
	    case 'slider slider-background-2':
		getDiv.className = 'slider slider-background-3';
		break;
	    case 'slider slider-background-3':
		getDiv.className = 'slider slider-background-4';
		break;
	    case 'slider slider-background-4':
		getDiv.className = 'slider slider-background-1';
		break;
	}
    }
    handleClearLeft = () => {
	this.setState({
	    stop:clearInterval(this.state.stop),
	});
	const getDiv = document.getElementById('change-color');
	switch (getDiv.className){
	    case 'slider slider-background-4':
		getDiv.className = 'slider slider-background-3';
		break;
	    case 'slider slider-background-3':
		getDiv.className = 'slider slider-background-2';
		break;
	    case 'slider slider-background-2':
		getDiv.className = 'slider slider-background-1';
		break;
	    case 'slider slider-background-1':
		getDiv.className = 'slider slider-background-4';
		break;
	}
    }
    clearMiddleMan = (cn) => {
	this.setState({
	    stop:clearInterval(this.state.stop),
	});
	const getDivv = document.getElementById('change-color');
	getDivv.className = cn;
    }



    render() {
	return (
	    <div className='slider-logo'> <h1>YUMMY SLIDER</h1>
	    <div className='main-container' >
		<div className='slide-container'>
		    <div className='left' onClick={this.handleClearLeft}></div>
		     <div className='slider slider-background-1' id='change-color'  ></div>
		    <div className='right' onClick={this.handleClearRight}></div>
		</div>
		<Tape method={this.clearMiddleMan}/>
	    </div>
    </div>
	);
    }
}