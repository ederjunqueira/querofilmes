import React from "react";
import './Header.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/86/Movies24logo.png"></img>
            </a>  
            </div>
            <div className="header--user">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Usu%C3%A1rio-HM.png"></img>
            </a>  
            </div>
        </header>
    )
}