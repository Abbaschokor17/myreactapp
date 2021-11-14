import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderMenuItem ({trip}) {
        return (
            <Card>
                <Link to={`/menu/${trip.id}`} >
                    <CardImg width="100%" src={trip.image} alt={trip.name} />
                    <CardImgOverlay>
                        <CardTitle>{trip.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }
    

    const Menu = (props) => {

        const menu = props.trips.map((trip) => {
            return (
                <div className="col-12 col-md-5 m-1"  key={trip.id}>
                    <RenderMenuItem trip={trip} />
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Places</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Places</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;