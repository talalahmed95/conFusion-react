import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, CardImg } from 'reactstrap';

class DishDetail extends Component{

	renderDish(dish){
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

	renderComments(comments){
		const obj = this.props.selectedDishInfo;
		const commentArr = obj.comments.map(x => {

			if (comments != null){
				return(
					<div key={x.id}>
						<p>{x.comment}</p>
						<p>-- {x.author}, {x.date}</p>
					</div>						
				);
			}

			
			else
				return(<div></div>);

		});

		return(commentArr);
	}

	render(){
		const details = this.props.selectedDishInfo;
		const commentsParam = JSON.stringify(this.props.selectedDishInfo.comments);
		// console.log(commentsParam)
		return(
			<div className="row">				
				<div className="col-12 col-md-5 m-1">
					{ this.renderDish(details) }
				</div>
				<div className="col-12 col-md-5 m-1">
					<h4>Comments</h4>
					{ this.renderComments(commentsParam) }
				</div>
			</div>
		);
	}
}

export default DishDetail;