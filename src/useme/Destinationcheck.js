import React from 'react';


/**
 * Destinationcheck.
 * Used to show some destinations on website.
 * 
 * @param {*} props Receives a thumb image, destination name, destination des
 *                  cription and destination price.
 */
const Destinationcheck = (props) => {

    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={props.thumb} className="card-img" alt="..." width="400" height="260"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{props.destiny}</h3>
                        <p className="card-text">{props.aboutDestiny}</p>
                        <h2 className="card-text">{props.price}</h2>
                        <a href="./" className="btn btn-primary">Check this destination</a>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Destinationcheck;