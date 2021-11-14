import React from 'react';

// Components
import DestinationCard from './DestinationCard'

// Stylesheet
import '../App.css'

// Cities
import Baalbek from '../assets/images/Baalbek.png'
import Harissa from '../assets/images/Harissa.png'
import Jeita from '../assets/images/Jeita grotto.png'
import coast from '../assets/images/coast of Raouché.png'



/**
 * MainDestination Component.
 * Displays more destinations available by the company.
 */
const MainDestinations = () => {

    return (
        <div className="container" id="destinations">
            <h3>Check some of our destinations!</h3>
            <DestinationCard 
                thumb={Baalbek}
                destiny="Tour to baalbek , Anjar and Ksara" 
                aboutDestiny="" 
                price="$30,00"
            />
            <DestinationCard 
                thumb={Harissa}
                destiny="Visit The Shrine of Our Lady of Lebanon" 
                aboutDestiny="" 
                price="$10,00"
            />
            <DestinationCard 
                thumb={Jeita}
                destiny="Visit the Jeita Grotto, Byblos, and Jounieh" 
                aboutDestiny="" 
                price="$10,00"
            />
            <DestinationCard 
                thumb={coast}
                destiny="small group Beirut historical tour" 
                aboutDestiny="" 
                price="$25,00"
            />
           
        </div>
    );

}


export default MainDestinations;