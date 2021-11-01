import React from 'react';

import { FcAssistant, FcDepartment, FcVoicePresentation, FcGlobe, FcMoneyTransfer, FcInTransit } from "react-icons/fc";   
import CompanyFeatureCard from '../useme/CompanyFeatureCard.js';
import JourneyCard from '../useme/JourneyCard';
import '../App.css';




const OurFeatures = () => {
    return (
        <React.Fragment>
            <div className="our-trips">
                <h3>Why us?</h3>
                <div className="container">
                    <div className="row" id="show-features">
                            <div className="col">
                                <CompanyFeatureCard icon={<FcAssistant size="64"/>} feature="24/7 Support"/>
                                <CompanyFeatureCard icon={<FcMoneyTransfer size="64"/>} feature="Competitive Prices"/>
                            </div>
                            <div className="col">
                                <CompanyFeatureCard icon={<FcGlobe size="64"/>} feature="Variety Tours"/>
                                <CompanyFeatureCard icon={<FcVoicePresentation size="64"/>} feature="Tourism Guide" />
                            </div>
                            <div className="col">
                                <CompanyFeatureCard icon={<FcInTransit size="64"/>} feature="Transportation" />
                                <CompanyFeatureCard icon={<FcDepartment size="64"/>} feature="Hotels" />
                            </div>
                        </div>
                </div>
            </div>
            <div className="our-journey">
                <h3>Our Journey</h3>
                <div className="container">
                    <div className="row">
                        <JourneyCard number='500+' description='Trips realized'/>
                        <JourneyCard number='2500+' description='Happy Travelers'/>
                        <JourneyCard number='50+' description='Destinies'/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default OurFeatures;