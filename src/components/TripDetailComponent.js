import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderTrip({trip}) {
    return (
      <Card>
        <CardImg top src={trip.image} alt={trip.name} />
        <CardBody>
          <CardTitle>{trip.name}</CardTitle>
          <CardText>{trip.description}</CardText>
        </CardBody>
      </Card>
    )
  }

function RenderComments({comments}) {
    const comnts = comments.map(comment => {
        return (
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                &nbsp;
                {new Intl.DateTimeFormat('en-US', 
                { year: 'numeric', month: 'short', day: '2-digit'})
                .format(new Date(Date.parse(comment.date)))}
                </p>
            
            </li>
        )
    });
    if (comments == null) {
        return <div></div>
    }
    return (
        <div>
            <h3>Reviews</h3>
            <ul className="list-unstyled">
                {comnts}
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
            </ul>
            <a href="/home" className="btn btn-primary">Book now</a>
        </div>
    );
}

const TripDetail = (props) => {
    const trip = props.trip

    console.log(trip);
    
    return (
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Places</Link></BreadcrumbItem>
                <BreadcrumbItem active>{props.trip.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{props.trip.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <RenderTrip trip={props.trip} />
            </div>
            <div className="col-12 col-md-5 m-1">
                <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>
    );
}

export default TripDetail;