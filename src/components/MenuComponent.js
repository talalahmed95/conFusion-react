import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';
// import DishDetail from './DishdetailComponent';

class Menu extends Component{
	
	render(){
		// console.log('yahaaaaaaaaan:',this.props.onClick(2));
		const menu = this.props.dishes.map((dish) => {
			return (
				<div key={dish.id} className="col-12 col-md-5 m-1">
					<Card onClick={() => this.props.onClick(dish.id) }>
						<CardImg src={dish.image} alt={dish.name} />
						<CardImgOverlay>
							<CardTitle>{dish.name}</CardTitle>
						</CardImgOverlay>
					</Card>
				</div>
			);
		});

		return (
			<div className="container">
				<div className="row">
					{menu}
				</div>
			</div>
		);
	}
}

export default Menu;