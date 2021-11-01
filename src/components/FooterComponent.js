import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
function Footer(props) {
   return (
        <div className="container-fluid" id="about">
            <div className="row" id="aboutUs">
                <div className="col-md-3 contact-info">
                    <h3>Any question? Contact us!</h3>
                    {/* <span><span className="info">Address:</span> Av. A place somewhere, 899 </span>
                    <span><span className="info">Number:</span> (55) 9999-99999</span>
                    <span><span className="info">Email (@):</span> ourservices@website.com</span> */}
                    <Link to="/contactus"><button className="btn btn-info">Click Here</button></Link>
                    
                        <h4>Follow Us!</h4>
                        <div className="col-12 col-sm-4 align-self">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        <div className="col-7 col-sm-5">
                    
                </div>
                    </div>
                        <h5>Links</h5>
                    <ul className="list-unstyled">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/aboutus'>About Us</Link></li>
                    <li><Link to='/menu'>Places</Link></li>
                    <li><Link to='/contactus'>Contact Us</Link></li>
                    </ul>
                </div>
                

                <div className="col-md-9 about-info">
                    <h3>About Us</h3>
                    <span>In August 2019 a japanese girl came to Lebanon named Tokyo and fell in love with the country. She became extremely passionate about Lebanese food, its culture, nature and people. She felt here like home.

So the long relationship between Tokyo and Lebanon has started.

Tokyo started sharing her experiences from every place she visited on instagram stories . then after reaching a big number of followers because people loved her content so she decides to start her first website guide and do her own trips.
                    </span>
                    <br />
                    <h3>Our Mission</h3>
                    <span>Discover Lebanon with our daily tours allowing you to see the best of what Lebanon has to offer.
                    </span>
                    <br />
                    <h3>Why choose us?</h3>
                    <span>By choosing us, you will discover and go to new places in Lebanon with a full guide.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;