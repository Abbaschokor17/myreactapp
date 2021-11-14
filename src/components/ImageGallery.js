import React from 'react';
import ImageCard from './ImageCard'

import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
// Importing all city images. This webpage its not using DB. 

import Baalbek from '../assets/images/Baalbek.png'
import Harissa from '../assets/images/Harissa.png'
import Jeita from '../assets/images/Jeita grotto.png'
import coast from '../assets/images/coast of Raouché.png'
import zagharta  from '../assets/images/zagharta.png'
import tripoli from '../assets/images/tripoli.png'
import akoura from '../assets/images/akoura.png'
import amou3a from '../assets/images/amou3a.png'
import anfeh from '../assets/images/anfeh.png'
import annoubin from '../assets/images/annoubin.png'
import arez from '../assets/images/arez.png'
import balaa from '../assets/images/balaa.png'
import betmoussa from '../assets/images/betmoussa.png'
import faqra from '../assets/images/faqra.png'
import museum from '../assets/images/museum.png'
// Stylesheet
import '../App.css';


/**
 * ImageGallery Component.
 */
const ImageGallery = () => {

  return (   
     
    <div className="container">
      
      <div className="image-gallery">
      <h3>-- Check some amazing places our clients shared with us! --</h3>
          <div className="row">
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Baalbek}
                  />                        
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Jeita}
                  /> 
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={coast}
                  /> 
              </div>
          </div>
          <div className="row">
              <div className="col show-trips">
                  <ImageCard 
                      thumb={Harissa}
                  />                        
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={zagharta}
                  /> 
              </div>
              <div className="col show-trips">
                <ImageCard 
                      thumb={tripoli}
                  /> 
              </div>
          </div>
          <div className="row">
              <div className="col show-trips">
                  <ImageCard 
                      thumb={akoura}
                  />                        
              </div>
              <div className="col show-trips">
                  <ImageCard 
                      thumb={amou3a}
                  /> 
              </div>
              <div className="col show-trips">
                <ImageCard 
                      thumb={anfeh}
                  /> 
              </div>
          </div>
          <div className="row">
          <div className="col show-trips">
              <ImageCard 
                  thumb={annoubin}
              />                        
          </div>
          <div className="col show-trips">
              <ImageCard 
                  thumb={arez}
              /> 
          </div>
          <div className="col show-trips">
            <ImageCard 
                  thumb={balaa}
              /> 
          </div>
      </div>
      <div className="row">
          <div className="col show-trips">
              <ImageCard 
                  thumb={betmoussa}
              />                        
          </div>
          <div className="col show-trips">
              <ImageCard 
                  thumb={faqra}
              /> 
          </div>
          <div className="col show-trips">
            <ImageCard 
                  thumb={museum}
              /> 
          </div>
      </div>
          
          
         
      
      </div>   
    </div>
  )
}

export default ImageGallery;
