import React from 'react';
import './MovieRow.css';
import { TiChevronLeft } from "react-icons/ti";
import { TiChevronRight } from "react-icons/ti";

export default ({title, items}) => {
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left">
                <TiChevronLeft style={{fontSize: 50}} />
            </div>
            <div className="movieRow--right">
                <TiChevronRight style={{fontSize: 50}} />
            </div> 
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                {items.results.length > 0 && items.results.map((item, key)=>(
                    <div  key={key} className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                    </div>
                ))} 
                </div>
            </div>
        </div>
    );
}