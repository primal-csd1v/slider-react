import React from "react";

export class Tape extends React.Component{

    click1 = () => {
        this.props.method('slider slider-background-1');
    }
    click2 = () => {
	this.props.method('slider slider-background-2');
    }
    click3 = () => {
	this.props.method('slider slider-background-3');
    }
    click4 = () =>{
	this.props.method('slider slider-background-4');
    }

    render() {
	return (
	    <div>
		<div className='small-slider slider-background-1' onClick={this.click1}></div>
		<div className='small-slider slider-background-2' onClick={this.click2}></div>
		<div className='small-slider slider-background-3' onClick={this.click3}></div>
		<div className='small-slider slider-background-4' onClick={this.click4}></div>
	    </div>
	);
    }
}