import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Game from './starter';

const rscelement:HTMLElement|null = document.getElementById("react-starter-code");
if(rscelement){
	const app = React.createElement(Game,{target:rscelement.querySelector("table")},null);
	ReactDOM.render(app,rscelement);
}
