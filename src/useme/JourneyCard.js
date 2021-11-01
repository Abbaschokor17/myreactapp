import React from 'react';

// Stylesheet

import '../App.css';

/**
 * JourneyCard.
 * Used to show all the records achieved by the company.
 * 
 * @param {*} props Receives a number of the record achieved and the description.
 */
const JourneyCard = (props) => {
    return (
        <div className="col">
            <div className="card border-dark mb-3">
                <div className="card-body text-dark">
                    <h1 className="card-title" id="number">{props.number}</h1>
                    <p className="card-text" id="description">{props.description}</p>
                </div>
            </div>
        </div>
    )
}

export default JourneyCard;
