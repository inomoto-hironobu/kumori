import * as React from 'react';

class Square extends React.Component<any,any,any> {
	render(){
		return (<button>{this.props.value}</button>);
	}
}
export class Board extends React.Component<any,{},any> {
	rennderSquare(i:any) {
		return <Square value={i}/>;
	}
	render(){
		const status:String = "";
		//ルート要素の子要素
		let divChildren = [];
		divChildren.push(<div className="status">{status}</div>);
		//table要素のtr要素を持ってくる
		const trList:NodeListOf<Element> = this.props.target.querySelectorAll("tr");
		for(let i = 0; i < trList.length; i++){
			//
			const data:NodeList = trList.item(i).querySelectorAll("td,th");
			let dataArray = [];
			for(let j = 0; j < data.length; j++){
				dataArray.push(this.rennderSquare(0));
			}
			divChildren.push(React.createElement("div",{className:"board-row"},dataArray));
		}
		return React.createElement("div",{},divChildren);
	}
}
export default class Game extends React.Component<any,{},any> {
	render() {
		return (
			<div className="game">
			<div className="game-board">
				<Board target={this.props.target}/>
			</div>
			<div className="game-info">
				<div>{/* status */}</div>
				<ol>{/* TODO */}</ol>
			</div>
			</div>
		);
	}
}