import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

const RenderLeader = ({leader}) => {

  return(
    <Media>
      <Media left className="mt-3">
        <Media object src={leader.image} alt={leader.name}/>
      </Media>
      <Media body className="ml-5 mt-3">
        <Media heading>{leader.name}</Media>
        <p>{leader.designation}</p>
        <p>{leader.description}</p>
      </Media>
    </Media>
  )
}

function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
          <RenderLeader key={leader.id} leader={leader} />
        );
    });

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>In August 2019 a japanese girl came to Lebanon named Tokyo and fell in love with the country.
                     She became extremely passionate about Lebanese food, its culture, nature and people. She felt here like home.</p>
                    <p>So the long relationship between Tokyo and Lebanon has started.</p>   
                    <p> Tokyo started sharing her experiences from every place she visited on instagram stories .
                     then after reaching a big number of followers because people loved her content so she decides to start her first website guide and do her own trips.</p>
                    <p><em>Guide Trip Lebanon</em></p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">10 August 2019</dd>
                                
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">30</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody className="bg-faded">
                            <blockquote className="blockquote">
                                <p className="mb-0">“Lebanon is one of the most beautiful mountainous areas on Earth. It has greatness and prestige that capture the attention of the tourist.”</p>
                                <footer className="blockquote-footer">Victor Guérin,
                                <cite title="Source Title">French intellectual, explorer and amateur archaeologist</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                        {leaders}
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;