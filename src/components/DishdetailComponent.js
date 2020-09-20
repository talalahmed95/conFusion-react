import React from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg } from 'reactstrap';

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

const RenderComments = ({dishInfo, comments}) => {
	const obj = dishInfo;
	const commentArr = obj.comments.map(x => {

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
	const details = props.selectedDishInfo;
	const commentsParam = JSON.stringify(props.selectedDishInfo.comments);
	return(
		<div className="container">
			<div className="row">				
				<div className="col-12 col-md-5 m-1">
					<RenderDish dish={details} />
				</div>
				<div className="col-12 col-md-5 m-1">
					<h4>Comments</h4>
					<RenderComments comments={commentsParam} dishInfo={details} />
				</div>
			</div>
		</div>
	);
}

export default DishDetail;