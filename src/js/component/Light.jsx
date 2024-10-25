
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";




export default function Light() {
    const [luzActiva, setLuzActiva] = useState(null);
    const Clicked = (color) => {
        setLuzActiva(color);
      };

	return (
		<div className="container">
		    <img className="semaforo" src="https://i.pinimg.com/originals/6d/bc/51/6dbc5148c1df5776d0e72320cab9baec.png" alt=""/> 
            <div className="luces opacity-25">
            <button className={`red btn btn-danger rounded-circle position-absolute ${luzActiva === 'red' ? 'activo' : ''}`} 
            onClick={() => Clicked('red')}/>
            <button className={`yellow btn btn-warning rounded-circle h-500 position-absolute ${luzActiva === 'yellow' ? 'activo' : ''}`}
            onClick={() => Clicked('yellow')
            }> </button>
            <button className={`green btn btn-success rounded-circle h-500 position-absolute ${luzActiva === 'green' ? 'activo' : ''}`}
            onClick={() => Clicked('green')}> </button>
         </div>
         </div>
	);
};

