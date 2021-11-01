import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';




function RenderCard({item}) {

    return(
        <Card>
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );

}

function Home(props) {
    return(
      <div className="travel-recommendation">
        <div className="container">
            <h3>-- Hot Trips --</h3>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.trip0} />
                </div>
                <div className="col-12 col-md m-2">
                    <RenderCard item={props.trip1} />
                </div>
                <div className="col-12 col-md m-3">
                    <RenderCard item={props.trip2} />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;