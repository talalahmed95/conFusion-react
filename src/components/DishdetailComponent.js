import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';

const RenderDish = ({dish}) => {
	if (dish != null)
		return(
			<Card>
				<CardImg src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		);
	else
		return(<div></div>);
}

const RenderComments = ({comments}) => {
	const commentArr = comments.map(x => {

		if (comments != null){
			return(
				<div key={x.id}>
					<p>{x.comment}</p>
					<p>-- {x.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(x.date)))}</p>
				</div>						
			);
		}

		
		else
			return(<div></div>);

	});

	return(commentArr);
}

const DishDetail = (props) => {
	const details = props.dish;
	const comments = props.comments;
	return(
		<div className="container">
			<div className="row">
				<Breadcrumb>
					<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
					<BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>		
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>         
			</div>
			<div className="row row-content">		
				<div className="col-12 col-md-5 m-1">
					<RenderDish dish={details} />
				</div>
				<div className="col-12 col-md-5 m-1">
					<h4>Comments</h4>
					<RenderComments comments={comments} />
					<CommentForm />
				</div>
			</div>
		</div>
	);
}

export default DishDetail;