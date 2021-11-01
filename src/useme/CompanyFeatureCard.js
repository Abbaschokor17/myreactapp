import React from 'react';

// Stylesheet
import '../App.css';


/**
 * CompanyFeatureCard. 
 * Used to show each feature of your company. 
 * 
 * @param {*} props Receives an feature icon and the feature name.
 */
const CompanyFeatureCard = (props) => {
    return (
        <div className="col">
            <div className="card border-dark mb-3">
                <div className="card-body text-dark display-icon">
                    <span>{props.icon}</span>
                    <h1 className="card-title" id="feature">{props.feature}</h1>
                </div>
            </div>
        </div>
    )
}

export default CompanyFeatureCard;