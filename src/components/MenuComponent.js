import React from 'react';
import { Card, CardTitle, CardImg, CardImgOverlay } from 'reactstrap';

const Menu = (props) => {

	const style = {
		cursor: 'pointer'
	};
	
	const menu = props.dishes.map((dish) => {
		return (
			<div key={dish.id} className="col-12 col-md-5 m-1">
				<Card style={style}>
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

export default Menu;